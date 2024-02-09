import { SoundType } from "@constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  worked: number; //number of times worked
  breaks: number; //no. of break;
  isBreak: boolean;
  isPaused: boolean;
  isPlaying: boolean;
  stamp: number; //milliseconds since 1970 epoch
  timerRef: string | number | NodeJS.Timeout | undefined;
  currentSound: "lofi" | "hz" | "rain";
  justifyContent: "flex-start" | "center" | "flex-end";
}

const initialState: State = {
  worked: 0,
  breaks: 0,
  isBreak: false,
  isPaused: false,
  isPlaying: false,
  stamp: 0,
  timerRef: undefined,
  currentSound: "lofi",
  justifyContent: "flex-start",
};

const timerSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true;
      state.stamp = Date.now();
      state.isPaused = false;
    },
    stop: (state) => {
      state.isPlaying = false;
      state.isBreak = true;
    },
    finish: (state) => {
      state.isPlaying = false;
      if (state.isBreak) {
        state.breaks = state.breaks + 1;
      } else {
        state.worked = state.worked + 1;
      }
      clearInterval(state.timerRef);
      state.timerRef = undefined;
      state.isBreak = !state.isBreak;
    },
    reset: (state) => {
      state.worked = initialState.worked;
      state.breaks = initialState.breaks;
      state.isBreak = initialState.isBreak;
      state.isPaused = initialState.isPaused;
      state.isPlaying = initialState.isPlaying;
      state.stamp = initialState.stamp;
      clearInterval(state.timerRef);
      state.timerRef = initialState.timerRef;
    },
    pause: (state) => {
      state.isPaused = true;
      state.isPlaying = false;
      state.stamp = Date.now();
    },
    setTimerRef: (state, action: PayloadAction<string | number | NodeJS.Timeout | undefined>) => {
      state.timerRef = action.payload;
    },
    setCurrentSound: (state, action: PayloadAction<keyof SoundType>) => {
      state.currentSound = action.payload;
      if (action.payload === "lofi") state.justifyContent = "flex-start";
      else if (action.payload === "hz") state.justifyContent = "center";
      else state.justifyContent = "flex-end";
    },
  },
  extraReducers: (_builder) => {},
});

export { timerSlice };
export const { play, stop, setTimerRef, pause, reset, finish, setCurrentSound } =
  timerSlice.actions;
export const timerReducer = timerSlice.reducer;
