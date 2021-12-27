import React from "react";
import "./App.css";
import "./Styles/Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailItem from "./Components/DetailItem";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:id" element={<DetailItem />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
