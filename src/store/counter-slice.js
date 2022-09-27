import { createSlice } from "@reduxjs/toolkit";

const initialCountState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCountState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice;
