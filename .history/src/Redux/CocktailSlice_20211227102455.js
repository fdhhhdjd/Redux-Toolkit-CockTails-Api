import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const CocktailSlice = createSlice({
  name: "todos",
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
export const getAllTodo = (state) => state.data.todos;
export default Cocktail;
