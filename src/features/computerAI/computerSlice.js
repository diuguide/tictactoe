import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notClicked : [0,1,2,3,4,5,6,7,8]
}

const generateRandom = (num) => {
    return Math.random(Math.floor() * num);
}

const computerMove = () => {
    console.log("GenerateRandom: ", generateRandom(10));
}

const computerSlice = createSlice({
    name:'computer',
    initialState,
    reducers: {
        click: (state, action) => {
            state.notClicked = state.notClicked.filter(choice => choice != action.payload);
        },
        computerAction: (state) => {
            computerMove();
        }
    }
})

export const { click, computerAction } = computerSlice.actions;
export const computerState = (state) => state.computer;
export default computerSlice.reducer;

