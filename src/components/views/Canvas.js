import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import { Document, Page, pdfjs } from "react-pdf";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
    drawables: [],
    newDrawable: [],
    newDrawableType: "ArrowDrawable"
  };

  componentDidMount() {
    this.getCanvasData();
  }
  getCanvasData = () => {
    this.setState({
      drawables: this.props.drawables,
      newDrawable: this.props.newDrawable
    });
  };

  static propTypes = {
    drawableType: PropTypes.string.isRequired,
    drawables: PropTypes.array.isRequired,
    newDrawable: PropTypes.array.isRequired
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state) {
      this.setState({
        newDrawableType: nextProps.drawableType
      });
    }
  }
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

  handleMouseUp = e => {
    const { newDrawable, drawables } = this.state;
    if (newDrawable.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const drawableToAdd = newDrawable[0];
      drawableToAdd.registerMovement(x, y);
      drawables.push(drawableToAdd);
      this.setState({
        newDrawable: [],
        drawables
      });
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
    newDrawable: state.canvasData.newDrawable
  };
};

export default connect(
  mapStateToProps,
  {}
)(Canvas);
