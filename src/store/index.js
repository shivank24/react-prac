import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
