import { combineReducers } from "redux";
import canvasReducers from "./canvasReducers";
import toolBarReducers from "./toolbarReducer";

export default combineReducers({
  canvasData: canvasReducers,
  toolbarData: toolBarReducers
});
