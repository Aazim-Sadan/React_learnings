import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    points: 1,
}

const incrementByAmount = createAction("account/incrementByAmount");

export const BonusSlice = createSlice({
    name: 'bonus', // Name of the slice, used as a prefix for generated action types.
    initialState,
    reducers: {
        increment: (state) => {
            state.points += 1
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementByAmount, (state, action) => {
            if (action.payload >= 100)
                state.points += 1;
        })
    }
})

// Action creators are generated for each case reducer function
export const { increment } = BonusSlice.actions

export default BonusSlice.reducer