import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );
    return response.data;
  }
);
export const fetchSingleCocktail = createAsyncThunk(
  "cocktails/fetchSingleDetails",
  async (id) => {
    const responses = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return responses.data;
  }
);
export const fetchSearchCocktail = createAsyncThunk(
  "Cocktails/fetchSearchCocktail",
  async (search) => {
    const responseSearch = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    return responseSearch.data;
  }
);
const CocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: [],
    error: null,
  },
  //! Get all Cocktail
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //! Get single Cocktail id
    [fetchSingleCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //! Get Search Cocktail id
    [fetchSearchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
const Cocktail = CocktailSlice.reducer;
// export const { addTodo, removeTodo, editTodo, getTodo } = movieSlice.actions;
export default Cocktail;
