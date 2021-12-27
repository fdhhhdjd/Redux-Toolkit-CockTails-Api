import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`)
      .then((res) => {
        res.json();
      });
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
      state.erro r = action.payload;
    },
  },
});
const Cocktail = CocktailSlice.reducer;
// export const { addTodo, removeTodo, editTodo, getTodo } = movieSlice.actions;
export const getAllCocktail = (state) => state.cocktails.data;
export default Cocktail;
