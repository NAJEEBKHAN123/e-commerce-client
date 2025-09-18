import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Topbar from "./Common/Topbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path=""  element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
