import React from "react";
import { connect } from "react-redux";
import { drawFreePathType } from "../../actions/toolbarActions";
import PropTypes from "prop-types";

function FreePath(props) {
  const Draw = event => {
    props.drawFreePathType();
  };
  return (
    <div>
      <button
        className="btn btn-block btn-secondary  my-1"
        onClick={event => {
          Draw(event);
        }}
      >
        Free Path
      </button>
    </div>
  );
}

FreePath.propTypes = {
  drawableType: PropTypes.string,
  drawFreePathType: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drawableType: state.toolbarData.drawType
  };
};

export default connect(
  mapStateToProps,
  { drawFreePathType }
)(FreePath);
