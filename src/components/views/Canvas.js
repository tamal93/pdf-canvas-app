import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import { Document, Page, pdfjs } from "react-pdf";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getCanvasData,
  updateCanvasData,
  clearCanvasData
} from "../../actions/canvasActions";
import { triggerCanvasDataClear } from "../../actions/toolbarActions";

import {
  ArrowDrawable,
  CircleDrawable,
  FreePathDrawable,
  LineDrawable,
  RectangleDrawable
} from "./canvasDrawables";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class Canvas extends Component {
  state = {
    user: {},
    canvasId: null,
    drawables: [],
    newDrawable: [],
    newDrawableType: ""
  };

  componentDidMount() {
    this.getUserData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      let newDrawables = this.convertDataToDrawables(nextProps.drawables);
      if (nextProps.clearCanvas) {
        this.props.clearCanvasData(
          this.state.canvasId,
          JSON.stringify({ drawables: [] })
        );
        this.props.triggerCanvasDataClear(false);
      }
      this.setState({
        drawables: newDrawables,
        newDrawableType: nextProps.drawableType,
        canvasId: nextProps.canvasId
      });
    }
  }
  getUserData = () => {
    setTimeout(
      function() {
        this.setState({ user: { user_id: 1 } }, () => {
          this.getCanvasData(this.state.user.user_id);
        });
      }.bind(this),
      1000
    );
  };
  getCanvasData = id => {
    this.props.getCanvasData(id);
  };

  static propTypes = {
    drawableType: PropTypes.string.isRequired,
    drawables: PropTypes.array.isRequired,
    getCanvasData: PropTypes.func.isRequired,
    updateCanvasData: PropTypes.func.isRequired,
    triggerCanvasDataClear: PropTypes.func,
    clearData: PropTypes.bool,
    canvasId: PropTypes.number
  };

  getNewDrawableBasedOnType = (x, y, type) => {
    const drawableClasses = {
      FreePathDrawable,
      ArrowDrawable,
      CircleDrawable,
      LineDrawable,
      RectangleDrawable
    };

    return new drawableClasses[type](x, y);
  };

  handleMouseDown = e => {
    const { newDrawable } = this.state;
    if (newDrawable.length === 0) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const newDrawable = this.getNewDrawableBasedOnType(
        x,
        y,
        this.state.newDrawableType
      );
      this.setState({
        newDrawable: [newDrawable]
      });
    }
  };

  convertDatatoJson = data => {
    let updateddata = data.map(item => {
      if (item.constructor === ArrowDrawable) {
        return {
          className: "ArrowDrawable",
          attrs: item
        };
      }
      if (item.constructor === CircleDrawable) {
        return {
          className: "CircleDrawable",
          attrs: item
        };
      }
      if (item.constructor === FreePathDrawable) {
        return {
          className: "FreePathDrawable",
          attrs: item
        };
      }
      if (item.constructor === LineDrawable) {
        return {
          className: "LineDrawable",
          attrs: item
        };
      }
      if (item.constructor === RectangleDrawable) {
        return {
          className: "RectangleDrawable",
          attrs: item
        };
      }
      return null;
    });
    return { drawables: updateddata };
  };

  convertDataToDrawables = data => {
    if (data.length > 0) {
      const drawables = data.map(item => {
        const newaDrawable = this.getNewDrawableBasedOnType(
          item.attrs.startx,
          item.attrs.starty,
          item.className
        );
        newaDrawable.registerMovement(item.attrs.x, item.attrs.y);
        return newaDrawable;
      });

      return drawables;
    }
    return [];
  };

  handleMouseUp = e => {
    const { newDrawable, drawables, canvasId } = this.state;
    if (newDrawable.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const drawableToAdd = newDrawable[0];
      drawableToAdd.registerMovement(x, y);
      drawables.push(drawableToAdd);

      this.setState(
        {
          newDrawable: [],
          drawables
        },
        () => {
          const drawableJsons = this.convertDatatoJson(this.state.drawables);

          this.props.updateCanvasData(canvasId, JSON.stringify(drawableJsons));
        }
      );
    }
  };

  handleMouseMove = e => {
    const { newDrawable } = this.state;
    if (newDrawable.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const updatedNewDrawable = newDrawable[0];
      updatedNewDrawable.registerMovement(x, y);
      this.setState({
        newDrawable: [updatedNewDrawable]
      });
    }
  };

  render() {
    const drawables = [...this.state.drawables, ...this.state.newDrawable];

    return (
      <div>
        <div
          style={{
            width: "100%",
            height: 1200,
            // top: 100,

            left: 10,
            zIndex: 1,
            position: "absolute",
            border: "1px solid #5A6268"
          }}
        >
          <Document
            file="./myreport.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page
              pageNumber={1}
              width={window.innerWidth / 1.62}
              height={900}
            />{" "}
          </Document>{" "}
        </div>{" "}
        <div
          style={{
            width: "100%",
            height: 1200,
            //top: 100,
            left: 10,
            zIndex: 100,
            position: "absolute",

            border: "1px solid black"
          }}
        >
          <Stage
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
            width={window.innerWidth / 1.62}
            height={1200}
            style={{
              background: "transparent"
            }}
          >
            <Layer>
              {drawables.map(drawable => {
                return drawable.render();
              })}
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    drawableType: state.toolbarData.drawType,
    drawables: state.canvasData.drawables,
    canvasId: state.canvasData.canvas_id,
    clearCanvas: state.toolbarData.clearData
  };
};

export default connect(
  mapStateToProps,
  { getCanvasData, updateCanvasData, clearCanvasData, triggerCanvasDataClear }
)(Canvas);
