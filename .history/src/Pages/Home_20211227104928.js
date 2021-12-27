import React, { useEffect, useState } from "react";
import Cocktail from "../Redux/CocktailSlice";
const Home = () => {
  useEffect(() => {
    dispatch(Cocktail());
  }, []);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
