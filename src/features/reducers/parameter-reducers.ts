import { PayloadAction } from "@reduxjs/toolkit";
import { FractalState } from "../shaders/interfaces";

interface SetParameterPayload {idx: number, value: number}
export const setParameter = (state: FractalState, action: PayloadAction<SetParameterPayload>) => {
    const {idx, value} = action.payload;
    state.params[idx] = value;
}

interface SetJuliaPayload {idx: number, value: number}
export const setJulia = (state: FractalState, action: PayloadAction<SetJuliaPayload>) => {
    const {idx, value} = action.payload;
    state.julia[idx] = value;
}

export const toggleJulia = (state: FractalState) => {
    state.juliaEnabled = !state.juliaEnabled;
}