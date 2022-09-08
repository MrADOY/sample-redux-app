import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.count += payload;
    },
    reset: () => ({ ...initialState }),
    incrementAsync: (state) => state,
  },
});

export default counterSlice;
