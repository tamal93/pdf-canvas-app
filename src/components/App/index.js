import React from "react";
import Canva from "../views/canva";
import ToolBar from "../views/ToolBar";
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ToolBar />
        </div>
        <div className="col-md-6">
          <Canva />y
        </div>
      </div>
    </div>
  );
};

export default App;
