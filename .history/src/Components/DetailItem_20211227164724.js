import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CocktailApi, fetchSingleCocktail } from "../Redux/CocktailSlice";

const DetailItem = () => {
  const dispatch = useDispatch();
  const { cocktail } = useSelector(CocktailApi);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, []);
  return (
    <>
      <h1>Detail</h1>
    </>
  );
};

export default DetailItem;
