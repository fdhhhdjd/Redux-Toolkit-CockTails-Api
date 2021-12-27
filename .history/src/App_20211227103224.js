import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
