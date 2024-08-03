import { configureStore, ReducerType } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counter-slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

type GetState = typeof store.getState;
export type TypeReducer = ReturnType<GetState>;