import {
  GET_CANVAS_DATA,
  ERROR_FINDING_CANVAS_DATA,
  UPDATE_CANVAS_DATA
} from "../actions/types";
import axios from "axios";

export const getCanvasData = userId => dispatch => {
  axios
    .get(`http://localhost:8000/canvas?user_id=${userId}`)
    .then(response => {
      dispatch({
        type: GET_CANVAS_DATA,
        payload: response.data[0]
      });
    })
    .catch(error => {
      dispatch({ type: ERROR_FINDING_CANVAS_DATA });
    });
};

export const updateCanvasData = (canvasId, canvasData) => dispatch => {
  var headers = {
    "Content-Type": "application/json"
  };
  axios
    .patch(`http://localhost:8000/canvas/${canvasId}`, canvasData, {
      headers: headers
    })

    .then(response => {
      console.log(response.data);

      dispatch({ type: UPDATE_CANVAS_DATA, payload: response.data });
    });
};
