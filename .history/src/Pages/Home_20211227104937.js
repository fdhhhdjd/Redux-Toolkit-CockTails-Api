import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cocktail from "../Redux/CocktailSlice";
const Home = () => {
  const dispatch = useDispatch();
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
