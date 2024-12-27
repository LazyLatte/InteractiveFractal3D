import { createSlice } from '@reduxjs/toolkit'
import * as ResetReducers from './reset-reducers';
import * as ParameterReducers from './parameter-reducers';
import * as CameraReducers from './camera-reducers';
import * as PrecisionReducers from './precision-reducers';
import * as StyleReducers from './style-reducers';
import * as LightingReducers from './lighting-reducers';
import * as EnvironmentReducers from './environment-reducers';
import { getDefaultFractal } from './utils';
import { FractalType } from '../shaders/interfaces';
export const fractalSlice = createSlice({
  name: 'fractal',
  initialState: getDefaultFractal(FractalType.Menger),
  reducers: {
    switchFractal: ResetReducers.switchFractal,
    resetFractal: ResetReducers.resetFractal,
    fromSample: ResetReducers.fromSample,
    fromClipboard: ResetReducers.fromClipboard,
    setParameter: ParameterReducers.setParameter,
    setJulia: ParameterReducers.setJulia,
    toggleJulia: ParameterReducers.toggleJulia,
    moveCamera: CameraReducers.moveCamera,
    rotateCamera: CameraReducers.rotateCamera,
    
    wheelEps: PrecisionReducers.wheelEps,
    wheelRayMultiplier: PrecisionReducers.wheelRayMultiplier,
  
    setColor: StyleReducers.setColor,
    setOrbitFrequency: StyleReducers.setOrbitFrequency,
    toggleNeon: StyleReducers.toggleNeon,
    toggleLight: LightingReducers.toggleLight,
    addLight: LightingReducers.addLight,
    deleteLight: LightingReducers.deleteLight,
    setShadow: LightingReducers.setShadow,
    setDecay: EnvironmentReducers.setDecay
    
  },
})

// Action creators are generated for each case reducer function
export const {
  switchFractal,  
  resetFractal,
  fromClipboard,
  setParameter,
  setJulia,
  toggleJulia,
  moveCamera,
  rotateCamera,
  wheelEps,
  wheelRayMultiplier,
  
  setColor,
  setOrbitFrequency,
  toggleNeon,
  toggleLight,
  addLight,
  deleteLight,
  setShadow,
  setDecay
  
} = fractalSlice.actions;

export default fractalSlice.reducer;