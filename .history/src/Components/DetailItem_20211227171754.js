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
    if (cocktail) {
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktail]);
  return (
    <>
      <h1>Detail</h1>
    </>
  );
};

export default DetailItem;
