import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CocktailApi, fetchSingleCocktail } from "../Redux/CocktailSlice";

const DetailItem = () => {
  const dispatch = useDispatch();
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id]);
  useEffect(() => {
    if (cocktail.length>0) {
      const {  strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,}
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktail, id]);
  return (
    <>
      <h1>Detail</h1>
    </>
  );
};

export default DetailItem;
