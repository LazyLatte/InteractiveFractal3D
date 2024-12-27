import { PayloadAction } from "@reduxjs/toolkit";
import { getDefaultFractal } from "./utils";
import { FractalType, FractalState } from "../shaders/interfaces";
interface SwitchFractalPayload {type: FractalType}
export const switchFractal = (state: FractalState, action: PayloadAction<SwitchFractalPayload>) => {
    return getDefaultFractal(action.payload.type);
}

export const resetFractal = (state: FractalState) => {
    return getDefaultFractal(state.type);
}

interface FromSamplePayload {idx: number}
export const fromSample = (state: FractalState, action: PayloadAction<FromSamplePayload>) => {
    /*
        const targetSample = samples[idx];
        const {fractal, params, juliaEnabled, shadow, neon, color, decay, eps, ray_multiplier} = targetSample;
        const camera = [targetSample.camera[0], targetSample.camera[1], targetSample.camera[2]] as vec3;
        const front = [targetSample.front[0], targetSample.front[1], targetSample.front[2]] as vec3;
        const julia = targetSample.julia;
        const lighting: LightingInterface = {
            enabled: true,
            lights: [{
                pos: camera,
                color
            }],
            shadow: 16.0
        }
        return {fractal, params, juliaEnabled, julia, camera, front, eps, ray_multiplier, 
            style: {color, lighting, neon, shadow, decay, orbit_freq: [targetSample.orbit_freq[0], targetSample.orbit_freq[1], targetSample.orbit_freq[2]]}};
    */
}

interface FromClipboardPayload {}
export const fromClipboard = (state: FractalState, action: PayloadAction<FromClipboardPayload>) => {
    /*
            const {data} = action;
            const {fractal, params, camera, front, juliaEnabled, julia, eps, ray_multiplier, style} = data as ClipBoardData;
            const {neon, color, decay, orbit_freq} = style;
            if(!Number.isInteger(fractal) || !Array.isArray(params) || !Array.isArray(camera) || camera.length !== 3 || !Array.isArray(front) || front.length !== 3 || 
            !Array.isArray(julia) || (julia.length !== 3 && julia.length !== 4) || typeof juliaEnabled !== 'boolean' || typeof neon !== 'boolean' || typeof eps !== 'number' || typeof ray_multiplier !== 'number' ||
            typeof color !== 'object' || typeof color.r !== 'number' || typeof color.g !== 'number' || typeof color.b !== 'number') throw Error('Invalid setting');
            if(fractal >= defaultParams.length || fractal < 0) throw Error('No such fractal');
            const targetFractalSliderSetting = sliderSetting[fractal];
            if(params.length !== targetFractalSliderSetting.params.length) throw Error('Params number not match');
            params.forEach((e, i) => {
                if(typeof e !== 'number' || e > targetFractalSliderSetting.params[i].maxValue || e < targetFractalSliderSetting.params[i].minValue){
                    throw Error('Invalid param value');
                }
            });
            camera.forEach(v => {
                if(typeof v !== 'number') throw Error('Invalid camera position');
            });
            front.forEach(v => {
                if(typeof v !== 'number') throw Error('Invalid front direction');
            });
            julia.forEach(v => {
                if(typeof v !== 'number') throw Error('Invalid julia vector');
            });
            if(decay < 0) throw Error('Invalid decay coefficient');
            color.r = Math.min(Math.max(color.r, 0), 255);
            color.g = Math.min(Math.max(color.g, 0), 255);
            color.b = Math.min(Math.max(color.b, 0), 255);
            return {fractal, params, camera, front, juliaEnabled, julia, eps, ray_multiplier, style};
    */
}


