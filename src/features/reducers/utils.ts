import DefaultMandelBulb from '../../data/mandelbulb/default-setting.json';
import DefaultMandelBox from '../../data/mandelbox/default-setting.json';
import DefaultMenger from '../../data/menger/default-setting.json';
import DefaultSierpinski from '../../data/sierpinski/default-setting.json';
import DefaultJulia4D from '../../data/julia4D/default-setting.json';

import { FractalType, FractalState } from "../shaders/interfaces";
const defaultFractals = [DefaultMandelBulb, DefaultMandelBox, DefaultMenger, DefaultSierpinski, DefaultJulia4D] as const;


export const getDefaultFractal = (type: FractalType): FractalState => {
    const fractal = defaultFractals[type];
    const {params, juliaEnabled, julia, pos, eps, ray_multiplier, style, lighting, environment} = fractal;
    const r = Math.sqrt(pos[0] * pos[0] + pos[1] * pos[1] + pos[2] * pos[2]);
    const front = pos.map(v => -v / r);
    const camera = {pos, front};
    return {type, params, juliaEnabled, julia, camera, eps, ray_multiplier, style, lighting, environment};
}