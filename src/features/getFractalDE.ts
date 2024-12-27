import { vec3 } from "gl-matrix";
import { FractalType } from "./shaders/interfaces";
import { mandelbulbDE_JS } from "./shaders/mandelbulb/DE";
import { mandelboxDE_JS } from "./shaders/mandelbox/DE";
import { mengerDE_JS } from "./shaders/menger/DE";
import { sierpinskiDE_JS } from "./shaders/sierpinski/DE";
import { julia4DDE_JS } from "./shaders/julia4D/DE";


export const getFractalDE = ({type, pos, params, juliaEnabled, julia}: 
    {type: FractalType, pos: vec3, params: number[], juliaEnabled: boolean, julia: number[]}): number => {
    switch(type){
        case FractalType.MandelBulb: return mandelbulbDE_JS(pos, params, juliaEnabled, julia);
        case FractalType.MandelBox: return mandelboxDE_JS(pos, params, juliaEnabled, julia);
        case FractalType.Menger: return mengerDE_JS(pos, params, juliaEnabled, julia);
        case FractalType.Sierpinski: return sierpinskiDE_JS(pos, params, juliaEnabled, julia);
        case FractalType.Julia4D: return julia4DDE_JS(pos, params, juliaEnabled, julia);
        default: return mandelbulbDE_JS(pos, params, juliaEnabled, julia);
    }
}