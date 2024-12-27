import { FractalType } from "./shaders/interfaces";
import { useRenderJulia4D } from "./shaders/julia4D/DE.glsl";
import { useRenderMandelBox } from "./shaders/mandelbox/DE.glsl";
import { useRenderMandelBulb } from "./shaders/mandelbulb/DE.glsl";
import { useRenderMenger } from "./shaders/menger/DE.glsl";
import { useRenderSierpinski } from "./shaders/sierpinski/DE.glsl";

export const toggleShader = (gl: WebGL2RenderingContext, type: FractalType) => {
    switch(type){
        case FractalType.MandelBulb: return useRenderMandelBulb(gl);
        case FractalType.MandelBox: return useRenderMandelBox(gl);
        case FractalType.Menger: return useRenderMenger(gl);
        case FractalType.Sierpinski: return useRenderSierpinski(gl);
        case FractalType.Julia4D: return useRenderJulia4D(gl);
        default: return useRenderMandelBulb(gl);
    }
}