import {
  DRAW_LINE,
  DRAW_FREEPATH,
  DRAW_RECTANGLE,
  DRAW_ARROW,
  DRAW_CIRCLE
} from "../actions/types";

export const drawLineType = () => {
  return {
    type: DRAW_LINE,
    payload: "LineDrawable"
  };
};
export const drawFreePathType = () => {
  return {
    type: DRAW_FREEPATH,
    payload: "FreePathDrawable"
  };
};
export const drawRectangleType = () => {
  return {
    type: DRAW_RECTANGLE,
    payload: "RectangleDrawable"
  };
};
export const drawArrowType = () => {
  return {
    type: DRAW_ARROW,
    payload: "ArrowDrawable"
  };
};
export const drawCircleType = () => {
  return {
    type: DRAW_CIRCLE,
    payload: "CircleDrawable"
  };
};
