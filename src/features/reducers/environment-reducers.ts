import { PayloadAction } from "@reduxjs/toolkit";
import { FractalState } from "../shaders/interfaces";

interface SetDecayPayload {value: number}
export const setDecay = (state: FractalState, action: PayloadAction<SetDecayPayload>) => {
    state.environment.decay = action.payload.value;
}