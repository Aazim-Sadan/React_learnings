// creating a reducer for Reward.js
import { createAction, createReducer } from "@reduxjs/toolkit";


export const increment = createAction("reward/increment");
const initialState = {
    points: 12,
};


const rewardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.points++;
        });
});

export default rewardReducer;