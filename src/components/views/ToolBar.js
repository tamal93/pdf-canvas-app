import React, { Component } from "react";
import Pen from "../toolbar/Pen";
import Line from "../toolbar/Line";
import Circle from "../toolbar/Circle";

class ToolBar extends Component {
  render() {
    return (
      <div>
        {/* <div>toolbar</div> */}
        <div className="container">
          <div className="col">
            <div className="row-md-6">
              <Pen />
            </div>
            <div className="row-md-6">
              <Line />
            </div>
            <div className="row-md-6">
              <Circle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;
