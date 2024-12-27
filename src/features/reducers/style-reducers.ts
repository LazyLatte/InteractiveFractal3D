import { PayloadAction } from "@reduxjs/toolkit";
import { Color, FractalState } from "../shaders/interfaces";

interface SetColorPayload {color: Color}
export const setColor = (state: FractalState, action: PayloadAction<SetColorPayload>) => {
    const {color} = action.payload;
    state.style.color = color;
}


interface SetOrbitFrequencyPayload {value: number, idx: number}
export const setOrbitFrequency = (state: FractalState, action: PayloadAction<SetOrbitFrequencyPayload>) => {
    const {value, idx} = action.payload;
    state.style.orbit_freq[idx] = value;
}

export const toggleNeon = (state: FractalState) => {
    state.style.neon = !state.style.neon;
}