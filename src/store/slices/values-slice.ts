import { createSlice } from "@reduxjs/toolkit";

interface State {
  work: number; //minutes
  shortBreak: number; //minutes
  longBreak: number; //minutes
}

const initialState: State = {
  work: 0.5,
  shortBreak: 0.15,
  longBreak: 0.25,
};

const valuesSlice = createSlice({
  name: "values",
  initialState: initialState,
  reducers: {
    resetValues: (state) => {
      state.work = initialState.work;
      state.shortBreak = initialState.shortBreak;
      state.longBreak = initialState.longBreak;
    },
  },
  extraReducers: (_builder) => {},
});

export { valuesSlice };
export const { resetValues } = valuesSlice.actions;
export const valuesReducer = valuesSlice.reducer;
