import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import { Document, Page, pdfjs, View, styles } from "react-pdf";
import { Stage, Layer, Line } from "react-konva";
// import { Stage, Layer, Line, Text, Rect, Circle, Ellipse } from "react-konva";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

export default class Canva extends Component {
  state = {
    lines: [],
    x1: "",
    y1: "",
    x2: "",
    y2: ""
  };

  handleMouseDown = () => {
    this._drawing = true;
    this.setState({
      lines: [...this.state.lines, []]
    });
  };

  handleMouseUp = () => {
    this._drawing = false;
  };

  handleMouseMove = e => {
    if (!this._drawing) {
      return;
    }
    const stage = this.stageRef.getStage();
    const point = stage.getPointerPosition();
    const { lines } = this.state;
    let lastLine = lines[lines.length - 1];
    lastLine = lastLine.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    this.setState({
      lines: lines.concat()
    });
  };

  handleClick = () => {
    const numbers = this.state.lines[0];

    const doubled = numbers.map(number => number);

    for (var i = 1; i < doubled.length; i += 2) {
      doubled[i] = 842 - doubled[i];
    }

    // const reqObj = {
    //   points: doubled
    // };
  };

  myFunction = (value, index, array) => {
    return value;
  };

  render() {
    return (
      <div>
        <button className="btnStyle" onClick={this.handleClick}>
          Download pdf{" "}
        </button>

        <div
          style={{
            // top: 100,
            left: 10,
            position: "absolute",
            border: "1px solid black"
          }}
        >
          <Document
            file="./myreport.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={1} width={window.innerWidth / 2} height={842} />
          </Document>
        </div>

        <div
          style={{
            // top: 100,
            left: 10,
            position: "absolute"
          }}
        >
          <Stage
            className="myStage"
            onContentMousemove={this.handleMouseMove}
            onContentMousedown={this.handleMouseDown}
            onContentMouseup={this.handleMouseUp}
            width={window.innerWidth / 2}
            height={842}
            ref={node => {
              this.stageRef = node;
            }}
          >
            <Layer>
              {this.state.lines.map((line, i) => (
                <Line key={i} points={line} stroke="black" strokeWidth="1.2" />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}
