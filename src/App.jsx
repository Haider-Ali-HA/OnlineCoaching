import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
