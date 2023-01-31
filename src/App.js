import React from "react";
import { Outlet } from "react-router-dom";
import { Reset } from "styled-reset";
import { AuthContextProvider } from "./component/context/AuthContext";
import Header from "./component/Header/Header";

function App() {
  return (
    <AuthContextProvider>
      <Reset />
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
