import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@slices";

const rootReducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
