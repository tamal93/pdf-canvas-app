import React from "react";

const Rectangle = () => {
  return (
    <div>
      <button
        onClick={e => {
          this.setState({ newDrawableType: "RectangleDrawable" });
        }}
      >
        Rectangle
      </button>
    </div>
  );
};

export default Rectangle;
