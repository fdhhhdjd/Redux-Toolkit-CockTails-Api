import { nanoid } from "nanoid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const CocktailSlice = createSlice({
  name: "cocktail",
  reducers: {},
  extraReducers: {},
});
const Cocktail = CocktailSlice.reducer;
// export const { addTodo, removeTodo, editTodo, getTodo } = movieSlice.actions;
export const getAllTodo = (state) => state.data.data;
export default Cocktail;
