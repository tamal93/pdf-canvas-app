import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import { Document, Page, pdfjs } from "react-pdf";
//import ReactDOM from "react-dom";
import {
  // LineDrawable,
  ArrowDrawable,
  CircleDrawable,
  FreePathDrawable
} from "./canvasDrawables";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class Canva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawables: [],
      newDrawable: [],
      newDrawableType: "CircleDrawable"
    };
  }

  getNewDrawableBasedOnType = (x, y, type) => {
    const drawableClasses = {
      FreePathDrawable,
      ArrowDrawable,
      CircleDrawable
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
            width: window.innerWidth / 2,
            height: 900,
            // top: 100,
            left: 10,
            zIndex: 1,
            position: "absolute",
            border: "1px solid black"
          }}
        >
          <Document
            file="./myreport.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={1} width={window.innerWidth / 2} height={900} />
          </Document>
        </div>
        <div
          style={{
            width: window.innerWidth / 2,
            height: 900,
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
            width={window.innerWidth / 2}
            height={900}
            style={{ background: "transparent" }}
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

export default Canva;
