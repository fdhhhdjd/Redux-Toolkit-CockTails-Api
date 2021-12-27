import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails");
const CocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: [],
    error: null,
  },
  extraReducers: {},
});
const Cocktail = CocktailSlice.reducer;
// export const { addTodo, removeTodo, editTodo, getTodo } = movieSlice.actions;
export const getAllCocktail = (state) => state.cocktails.data;
export default Cocktail;
