import counterSlice from "./counterSlice";

export const counterSelector = (state) => {
  const { count } = state[counterSlice.name];

  return {
    count,
  };
};
