import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    books: bookReducer,
    auth: authReducer
  }
});