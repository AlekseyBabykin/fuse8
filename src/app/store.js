import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../features/ComponentName/apiSlice";

export default configureStore({
  reducer: {
    api: apiReducer,
  },
});
