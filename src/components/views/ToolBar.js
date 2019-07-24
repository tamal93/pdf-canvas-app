import React, { Component } from "react";
//import Pen from "../toolbar/Pen";
import Arrow from "../toolbar/Arrow";
import Line from "../toolbar/Line";
import Circle from "../toolbar/Circle";
import FreePath from "../toolbar/FreeHand";
import Rectangle from "../toolbar/Rectangle";

class ToolBar extends Component {
  render() {
    return (
      <div className="">
        <Line />
        <FreePath />
        <Arrow />
        <Circle />
        <Rectangle />
      </div>
    );
  }
}

export default ToolBar;
