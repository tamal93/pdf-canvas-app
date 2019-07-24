import React from "react";
import { connect } from "react-redux";
import { drawRectangleType } from "../../actions/toolbarActions";
import PropTypes from "prop-types";

const Rectangle = props => {
  const Draw = event => {
    props.drawRectangleType();
  };
  return (
    <div>
      <button
        className="btn btn-block btn-secondary  my-1"
        onClick={event => {
          Draw(event);
        }}
      >
        Rectangle
      </button>
    </div>
  );
};

Rectangle.propTypes = {
  drawableType: PropTypes.string,
  drawRectangleType: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drawableType: state.toolbarData.drawType
  };
};

export default connect(
  mapStateToProps,
  { drawRectangleType }
)(Rectangle);
