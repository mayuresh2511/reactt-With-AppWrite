import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import loaderReducer from "../features/loader/loaderSlice";
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
    auth: authReducer,
    loader: loaderReducer
})

export const store = configureStore({
    reducer: allReducers
}) 