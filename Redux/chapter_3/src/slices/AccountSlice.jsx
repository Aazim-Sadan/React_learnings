import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    amount: 1,
}


export const getUserById = createAsyncThunk(
    'account/getUser',
    async (userId, thunkAPI) => {
        const { data } = await axios.get(
            `http://localhost:8080/accounts/${userId}`
        );
        return data.amount
    }
)



export const AccountSlice = createSlice({
    name: 'account',  // Name of the slice, used as a prefix for generated action types.
    initialState,
    reducers: {
        increment: (state) => {

            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserById.fulfilled, (state, action) => {
                state.amount = action.payload;
                state.pending = false;
            })
            .addCase(getUserById.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.error = action.error;
            })
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = AccountSlice.actions

export default AccountSlice.reducer