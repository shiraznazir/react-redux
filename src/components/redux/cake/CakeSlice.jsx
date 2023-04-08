import { createSlice } from "@reduxjs/toolkit";

export const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numOfCakes: 100,
  },
  reducers: {
    buyCakes: (state) => {
      state.numOfCakes -= 1;
    },
    addCakesToShop: (state, actions) => {
      state.numOfCakes = parseInt(state.numOfCakes) + parseInt(actions.payload);
    },
    buyCakesMore: (state, actions) => {
      state.numOfCakes = state.numOfCakes - actions.payload;
    },
  },
});

export const { buyCakes, addCakesToShop, buyCakesMore } = cakeSlice.actions;

export default cakeSlice.reducer;
