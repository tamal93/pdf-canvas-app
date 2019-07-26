import {
  DRAW_LINE,
  DRAW_FREEPATH,
  DRAW_RECTANGLE,
  DRAW_ARROW,
  DRAW_CIRCLE,
  CLEAR_CANVAS_CLICK
} from "../actions/types";

const initialState = {
  drawType: "LineDrawable",
  clearData: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DRAW_LINE:
      return {
        ...state,
        drawType: action.payload
      };
    case DRAW_FREEPATH:
      return {
        ...state,
        drawType: action.payload
      };
    case DRAW_RECTANGLE:
      return {
        ...state,
        drawType: action.payload
      };
    case DRAW_ARROW:
      return {
        ...state,
        drawType: action.payload
      };
    case DRAW_CIRCLE:
      return {
        ...state,
        drawType: action.payload
      };
    case CLEAR_CANVAS_CLICK:
      return {
        ...state,
        clearData: action.payload
      };
    default:
      return state;
  }
}
