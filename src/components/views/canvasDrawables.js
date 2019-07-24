import React from "react";
import { Arrow, Circle, Line } from "react-konva";

class Drawable {
  constructor(startx, starty) {
    this.startx = startx;
    this.starty = starty;
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
    return (
      <Line key={this.startx} points={points} fill="black" stroke="black" />
    );
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
  }
  render() {
    const points = [this.startx, this.starty, this.x, this.y];
    return (
      <Arrow key={this.startx} points={points} fill="black" stroke="black" />
    );
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
        key={this.startx}
        radius={radius}
        x={this.startx}
        y={this.starty}
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
      <Line
        key={this.startx}
        points={this.points}
        fill="black"
        stroke="black"
      />
    );
  }
}
