import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterReducer = {
    counter: {
        value: number;
    }
}

export type CounterState = {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { decrement, increment, incrementAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;