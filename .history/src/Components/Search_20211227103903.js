import React from "react";
import { useRef } from "react";

const Search = () => {
  const handleSubmit = () => {};
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
              onChange={searchCocktail}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
