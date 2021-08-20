import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grid: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  userClicked: [],
  compClicked: [],
  possibleWins: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    userMove: (state, action) => {
      state.userClicked.push(action.payload);
    },
    compMove: (state, action) => {
      state.compClicked.push(action.payload);
    },
    gameOver: (state) => {
      state.userClicked = [];
      state.compClicked = [];
    },
  },
});

export const { userMove, compMove, gameOver } = boardSlice.actions;
export const boardState = (state) => state.board;
export default boardSlice.reducer;
