import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {};
const store = configureStore({
  reducer: rootReducer,
});

export { store };
