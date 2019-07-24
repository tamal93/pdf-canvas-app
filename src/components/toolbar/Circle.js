import React from "react";
import { connect } from "react-redux";
import { drawCircleType } from "../../actions/toolbarActions";
import PropTypes from "prop-types";

const Circle = props => {
  const Draw = event => {
    props.drawCircleType();
  };
  return (
    <div>
      <button
        className="btn btn-block btn-secondary my-1"
        onClick={event => {
          Draw(event);
        }}
      >
        Circle
      </button>
    </div>
  );
};

Circle.propTypes = {
  drawableType: PropTypes.string,
  drawCircleType: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drawableType: state.toolbarData.drawType
  };
};

export default connect(
  mapStateToProps,
  { drawCircleType }
)(Circle);
