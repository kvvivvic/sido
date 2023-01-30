import React from "react";
import { Outlet } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./component/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
