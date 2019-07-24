import React from "react";
import { connect } from "react-redux";
// import { drawLineType } from "../../actions/toolbarActions";
import PropTypes from "prop-types";

const Pen = props => {
  const Draw = event => {
    // props.drawLineType();
  };
  return (
    <div>
      <button
        className="btn btn-block btn-secondary mt-3 mb-1"
        onClick={event => {
          Draw(event);
        }}
      >
        Pen
      </button>
    </div>
  );
};

Pen.propTypes = {
  drawableType: PropTypes.string,
  drawLineType: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drawableType: state.toolbarData.drawType
  };
};

export default connect(
  mapStateToProps,
  {}
)(Pen);
