import React from "react";
import { Routes, Route } from "react-router-dom";
import Inventory from "./Inventory";
import NavBar from "./components/NavBar";
import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/" element={<h1>Welcome to the BookStore</h1>} />
      </Routes>
    </>
  );
}

export default App;
