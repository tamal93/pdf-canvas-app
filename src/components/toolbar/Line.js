import React from "react";

const Line = () => {
  return (
    <div>
      <button
        onClick={e => {
          this.setState({ newDrawableType: "LineDrawable" });
        }}
      >
        Line
      </button>
    </div>
  );
};

export default Line;
