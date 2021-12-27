import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/CocktailSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktail = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
      });
    }
  }, [cocktails]);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
