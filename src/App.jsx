import React from "react";
import { Routes, Route } from "react-router-dom";
import Inventory from "./Inventory";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </>
  );
}

export default App;
