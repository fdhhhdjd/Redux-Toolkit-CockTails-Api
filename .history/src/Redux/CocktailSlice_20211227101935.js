import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const CocktailSlice = createSlice({
  name: "cocktail",
  reducers: {},
  extraReducers: {},
});
const Cocktail = CocktailSlice.reducer;
// export const { addTodo, removeTodo, editTodo, getTodo } = movieSlice.actions;
export const getAllTodo = (state) => state.cocktail.data;
export default Cocktail;
