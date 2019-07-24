import React from "react";

const Arrow = () => {
  return (
    <div>
      <button
        onClick={e => {
          this.setState({ newDrawableType: "ArrowDrawable" });
        }}
      >
        Arrow
      </button>
    </div>
  );
};

export default Arrow;
