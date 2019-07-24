import React from "react";
import Canvas from "../views/Canvas";
import ToolBar from "../views/ToolBar";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 ">
          <ToolBar />
        </div>
        <div className="col-md-10 my-3">
          <Canvas />
        </div>
      </div>
    </div>
  );
};

export default App;
