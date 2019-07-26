import {
  GET_CANVAS_DATA,
  UPDATE_CANVAS_DATA,
  CLEAR_CANVAS_DATA
} from "../actions/types";

const initialState = {
  canvas_id: null,
  drawables: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CANVAS_DATA:
      return {
        ...state,
        canvas_id: action.payload.id,
        drawables: action.payload.drawables
      };
    case UPDATE_CANVAS_DATA:
      return {
        ...state,
        drawables: action.payload.drawables
      };
    case CLEAR_CANVAS_DATA:
      return {
        ...state,
        drawables: action.payload.drawables
      };
    default:
      return state;
  }
}
