import React from "react";

const Circle = () => {
  return (
    <div>
      <button
        onClick={e => {
          this.setState({ newDrawableType: "CircleDrawable" });
        }}
      >
        Circles
      </button>
    </div>
  );
};

export default Circle;
