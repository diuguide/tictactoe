import { configureStore } from '@reduxjs/toolkit';
import boardReducer from "../features/board/boardSlice";
import computerReducer from "../features/computerAI/computerSlice";


export const store = configureStore({
  reducer: {
    board: boardReducer,
    computer: computerReducer
  },
});
