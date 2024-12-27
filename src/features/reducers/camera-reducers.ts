import { PayloadAction } from "@reduxjs/toolkit";
import { FractalState } from "../shaders/interfaces";
import { vec2, vec3, mat4, quat} from "gl-matrix";
import { getFractalDE as DE } from '../getFractalDE';


interface MoveCameraPayload {dir: [number, number, number]}
export const moveCamera = (state: FractalState, action: PayloadAction<MoveCameraPayload>) => {
    const {dir} = action.payload;
    const pos = vec3.fromValues(state.camera.pos[0], state.camera.pos[1], state.camera.pos[2]);
    const front = vec3.fromValues(state.camera.front[0], state.camera.front[1], state.camera.front[2]);
    const d = DE({...state, pos});
    const step_multiplier = 0.2;
    const dist = Math.abs(d) * step_multiplier;

    const right = vec3.create();
    const up = vec3.create();
    vec3.cross(right, front, [0, 0, 1]);
    vec3.cross(up, right, front);
    vec3.normalize(right, right);
    vec3.normalize(up, up);
    
    const translate = vec3.create();
    vec3.zero(translate);
    vec3.scaleAndAdd(translate, translate, right, dir[0] * dist);
    vec3.scaleAndAdd(translate, translate, up, dir[1] * dist);
    vec3.scaleAndAdd(translate, translate, front, dir[2] * dist);
    const translationMatrix = mat4.create();
    mat4.fromTranslation(translationMatrix, translate);
    
    vec3.transformMat4(pos, pos, translationMatrix);

    state.camera.pos = [
        pos[0], pos[1], pos[2]
    ];
}

interface RotateCameraPayload {dir: [number, number]}
export const rotateCamera = (state: FractalState, action: PayloadAction<RotateCameraPayload>) => {
    const {dir} = action.payload;
    const front = vec3.fromValues(state.camera.front[0], state.camera.front[1], state.camera.front[2]);
    const r = Math.sqrt(dir[0] * dir[0] + dir[1] * dir[1]);
    const rotateFactor = 0.0008;
    const z_axis = [0, 0, dir[0] > 0 ? 1 : -1] as vec3;
    const max_rad =  Math.acos(vec3.dot(front, z_axis) / vec3.length(front)) - 0.52359877559; //0.52359877559 = pi / 6
    const rad = Math.min(r * rotateFactor, max_rad);
    
    const right = vec3.create();
    const up = vec3.create();
    vec3.cross(right, front, [0, 0, 1]);
    vec3.cross(up, right, front);
    vec3.normalize(right, right);
    vec3.normalize(up, up);


    const axis = vec3.create();
    vec3.zero(axis);
    vec3.scaleAndAdd(axis, axis, right, dir[0]);
    vec3.scaleAndAdd(axis, axis, up, dir[1]);
    vec3.normalize(axis, axis);

    const q = quat.create();
    quat.setAxisAngle(q, axis, rad);
    
    vec3.transformQuat(front, front, q);
    state.camera.front = [
        front[0], front[1], front[2]
    ]

}