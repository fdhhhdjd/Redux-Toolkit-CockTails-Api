import React, { Suspense, lazy } from "react";
import "./App.css";
import "./Styles/Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailItem from "./Components/DetailItem";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<DetailItem />} />
      </Routes>
    </>
  );
}

export default App;
