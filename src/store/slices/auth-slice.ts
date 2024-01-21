import { createSlice } from "@reduxjs/toolkit";

interface State {
  isAuthorized: boolean;
}

const initialState: State = {
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authorize: (state) => {
      state.isAuthorized = true;
    },
    revoke: (state) => {
      state.isAuthorized = false;
    },
  },
  extraReducers: (_builder) => {},
});

export { authSlice };
export const { authorize, revoke } = authSlice.actions;
export const authReducer = authSlice.reducer;
