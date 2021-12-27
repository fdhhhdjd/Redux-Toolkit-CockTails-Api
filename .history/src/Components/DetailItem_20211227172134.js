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
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktail, id]);
  if(!modifiedCocktail){
    return <h2 className="section-title">No Cocktail to Display</h2>;
  }else{
    const { name, image, category, info, glass, instructions, ingredients } =
    modifiedCocktail;
    return (
    
         {loading ? (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <section className="section cocktail-section">
            <Link to="/">
              <button className="btn btn-danger" style={{ marginTop: "2rem" }}>
                Go Back
              </button>
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
              <img src={image} alt={name} />
              <div className="drink-info">
                <p>
                  <span className="drink-data">Name :</span> {name}
                </p>
                <p>
                  <span className="drink-data">Category :</span> {category}
                </p>
                <p>
                  <span className="drink-data">Info :</span> {info}
                </p>
                <p>
                  <span className="drink-data">Glass :</span> {glass}
                </p>
                <p>
                  <span className="drink-data">Instructions :</span>{" "}
                  {instructions}
                </p>
                <p>
                  <span className="drink-data">Ingredients :</span>
                  {ingredients.map((item, index) => {
                    return item ? <span key={index}>{item}</span> : null;
                  })}
                </p>
              </div>
            </div>
          </section>
    
    );
  }
 
};

export default DetailItem;
