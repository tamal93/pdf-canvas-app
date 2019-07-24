import React from "react";
import uuidv4 from "uuid/v4";
import { Arrow, Circle, Line, Rect } from "react-konva";

class Drawable {
  constructor(startx, starty, width, height) {
    this.startx = startx;
    this.starty = starty;
    this.width = width;
    this.height = height;
  }
}

export class LineDrawable extends Drawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.x = startx;
    this.y = starty;
  }
  registerMovement(x, y) {
    this.x = x;
    this.y = y;
  }
  render() {
    const points = [this.startx, this.starty, this.x, this.y];
    return <Line key={uuidv4()} points={points} fill="black" stroke="black" />;
  }
}

export class ArrowDrawable extends Drawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.x = startx;
    this.y = starty;
  }
  registerMovement(x, y) {
    this.x = x;
    this.y = y;
    //console.log(x, y);
  }
  render() {
    const points = [this.startx, this.starty, this.x, this.y];
    return <Arrow key={uuidv4()} points={points} fill="black" stroke="black" />;
  }
}

export class CircleDrawable extends ArrowDrawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.x = startx;
    this.y = starty;
  }
  render() {
    const dx = this.startx - this.x;
    const dy = this.starty - this.y;
    const radius = Math.sqrt(dx * dx + dy * dy);
    return (
      <Circle
        key={uuidv4()}
        radius={radius}
        x={this.startx}
        y={this.starty}
        stroke="black"
      />
    );
  }
}
export class RectangleDrawable extends Drawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.x = startx;
    this.y = starty;
  }
  registerMovement(x, y) {
    this.x = x;
    this.y = y;
  }
  render() {
    const points = [this.startx, this.starty, this.x, this.y];
    const w = this.startx / 2 + this.x;
    const h = this.starty / 2 + this.y;

    return (
      <Rect
        key={uuidv4()}
        points={points}
        width={w}
        height={h}
        // fill="black"
        stroke="black"
      />
    );
  }
}
export class FreePathDrawable extends Drawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.points = [startx, starty];
  }
  registerMovement(x, y) {
    this.points = [...this.points, x, y];
  }
  render() {
    return (
      <Line key={uuidv4()} points={this.points} fill="black" stroke="black" />
    );
  }
}
