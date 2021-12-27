import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CocktailApi, fetchSingleCocktail } from "../Redux/CocktailSlice";

const DetailItem = () => {
  const dispatch = useDispatch();
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id]);
  useEffect(() => {
    if (cocktail) {
      const newCocktail = cocktail.map((item) => {
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
    }
  });
  return (
    <>
      <h1>Detail</h1>
    </>
  );
};

export default DetailItem;
