import React from "react";
import { connect } from "react-redux";
import { triggerCanvasDataClear } from "../../actions/toolbarActions";
import PropTypes from "prop-types";

const ClearData = props => {
  const Draw = event => {
    props.triggerCanvasDataClear(true);
  };
  return (
    <div>
      <button
        className="btn btn-block btn-secondary my-1"
        onClick={event => {
          Draw(event);
        }}
      >
        Clear Drawings
      </button>
    </div>
  );
};

ClearData.propTypes = {
  drawableType: PropTypes.string,
  triggerCanvasDataClear: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    ClearData: state.toolbarData.ClearData
  };
};

export default connect(
  mapStateToProps,
  { triggerCanvasDataClear }
)(ClearData);
