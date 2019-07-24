import React, { Component } from "react";
//import Pen from "../toolbar/Pen";
import Arrow from "../toolbar/Arrow";
import Line from "../toolbar/Line";
import Circle from "../toolbar/Circle";

class ToolBar extends Component {
  render() {
    return (
      <div>
        <div>Tools</div>
        <div className="container">
          <div className="col">
            <div className="row-md-6">
              <Arrow Click={this.props.arrowClickHandler} />
            </div>
            <div className="row-md-6">
              <Circle Click={this.props.circleClickHandler} />
            </div>
            <div className="row-md-6">
              <Line Click={this.props.lineClickHandler} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;
