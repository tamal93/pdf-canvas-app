import React from "react";

const FreeHand = () => {
  return (
    <div>
      <button
        onClick={e => {
          this.setState({ newDrawableType: "FreeDrawable" });
        }}
      >
        FreeHandDraw
      </button>
    </div>
  );
};

export default FreeHand;
