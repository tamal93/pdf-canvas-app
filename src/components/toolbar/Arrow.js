import React from "react";
import { connect } from "react-redux";
import { drawArrowType } from "../../actions/toolbarActions";
import PropTypes from "prop-types";

const Arrow = props => {
  const Draw = event => {
    props.drawArrowType();
  };
  return (
    <div>
      <button
        className="btn btn-block btn-secondary my-1"
        onClick={event => {
          Draw(event);
        }}
      >
        Arrow
      </button>
    </div>
  );
};

Arrow.propTypes = {
  drawableType: PropTypes.string,
  drawArrowType: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drawableType: state.toolbarData.drawType
  };
};

export default connect(
  mapStateToProps,
  { drawArrowType }
)(Arrow);
