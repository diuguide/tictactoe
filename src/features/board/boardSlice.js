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
  notClicked: [0,1,2,3,4,5,6,7,8],
  move: false,
  showMsg: false,
  msg: ""
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    userMove: (state, action) => {
      state.userClicked.push(action.payload);
      state.userClicked = state.userClicked.sort();
    },
    compMove: (state, action) => {
      state.compClicked.push(action.payload);
      state.compClicked = state.compClicked.sort();
    },
    gameOver: (state) => {
      state.userClicked = [];
      state.compClicked = [];
      state.move = true;
    },
    showMessage: (state, action) => {
      state.msg = action.payload;
      state.showMsg = true;
      state.move = true;
    },
    hideMessage: (state) => {
      state.msg = "";
      state.showMsg = false;
      state.move = false;
    }
  },
});

export const { userMove, compMove, gameOver, hideMessage, showMessage } = boardSlice.actions;
export const boardState = (state) => state.board;
export default boardSlice.reducer;
