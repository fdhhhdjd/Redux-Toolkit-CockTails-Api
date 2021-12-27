import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/CocktailSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  console.log(cocktails, "alo");
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
