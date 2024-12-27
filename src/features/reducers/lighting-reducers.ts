import { PayloadAction } from "@reduxjs/toolkit";
import { Color, FractalState } from "../shaders/interfaces";

export const toggleLight = (state: FractalState) => {
    state.lighting.enabled = !state.lighting.enabled;
}

interface AddLightPayload {pos: number[], color: Color;}
export const addLight = (state: FractalState, action: PayloadAction<AddLightPayload>) => {
    state.lighting.lights = [...state.lighting.lights, {...action.payload}]
}

interface DeleteLightPayload {idx: number}
export const deleteLight = (state: FractalState, action: PayloadAction<DeleteLightPayload>) => {
    state.lighting.lights = state.lighting.lights.filter((_, i) => i != action.payload.idx);
}

interface SetShadowPayload {value: number}
export const setShadow = (state: FractalState, action: PayloadAction<SetShadowPayload>) => {
    state.lighting.shadow = action.payload.value;
}