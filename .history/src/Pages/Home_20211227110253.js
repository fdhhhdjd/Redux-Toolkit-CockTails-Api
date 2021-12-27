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
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);
  if (loading) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (!cocktails) {
    return <h2>No Cocktails matched your search criteria</h2>;
  }
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
