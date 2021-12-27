import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktail } from "../Redux/CocktailSlice";
const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const dispatch = useDispatch;
  const SearchCocktail = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail({ searchText }));
  };
  const searchValue = useRef();
  return (
    <>
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Search Cocktail</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
              onChange={SearchCocktail}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
