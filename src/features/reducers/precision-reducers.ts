import { PayloadAction } from "@reduxjs/toolkit";
import { FractalState } from "../shaders/interfaces";

interface WheelEpsPayload {inc: boolean}
export const wheelEps = (state: FractalState, action: PayloadAction<WheelEpsPayload>) => {
    const {inc} = action.payload;
    state.eps = inc ? Math.min(state.eps / 0.9, 0.01) : Math.max(state.eps * 0.9, 1e-7);
}


interface WheelRayMultiplierPayload {inc: boolean}
export const wheelRayMultiplier = (state: FractalState, action: PayloadAction<WheelRayMultiplierPayload>) => {
    const {inc} = action.payload;
    state.ray_multiplier = inc ? Math.min(state.ray_multiplier / 0.9, 1.0) : Math.max(state.ray_multiplier * 0.9, 0.01);
}