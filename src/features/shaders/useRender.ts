import { compile } from "./compile";
import { fs, fs_header } from "./fs.glsl";
import { Camera, FractalStyle, FractalEnvironment, FractalLighting } from "./interfaces";
const useRender = (DE: string, param_names: string[], julia_dimension: 3 | 4 = 3) => {
    return (gl: WebGL2RenderingContext) => {
        const program = compile(gl, fs_header + DE + fs);
        const camera_location = gl.getUniformLocation(program, "camera");
        const front_location = gl.getUniformLocation(program, "front");
        const juliaEnabled_location = gl.getUniformLocation(program, "juliaEnabled");
        const julia_location = gl.getUniformLocation(program, "julia");
        const shadow_location = gl.getUniformLocation(program, "shadow");
        const neon_location = gl.getUniformLocation(program, "neon");
        const decayCoeff_location = gl.getUniformLocation(program, "decayCoeff");
        const palette_seed_location = gl.getUniformLocation(program, "palette_seed");
        const orbit_freq_location = gl.getUniformLocation(program, "orbit_freq");
        const eps_location = gl.getUniformLocation(program, "eps");
        const ray_multiplier_location = gl.getUniformLocation(program, "ray_multiplier");
        const param_locations = param_names.map(s => gl.getUniformLocation(program, s));
        return (params: number[], juliaEnabled: boolean, julia: number[], camera: Camera, eps: number, ray_multiplier: number, 
            style: FractalStyle, lighting: FractalLighting, environment: FractalEnvironment) => {
            gl.useProgram(program);
    
            gl.uniform3f(camera_location, camera.pos[0], camera.pos[1], camera.pos[2]);
            gl.uniform3f(front_location, camera.front[0], camera.front[1], camera.front[2]);
            gl.uniform1i(juliaEnabled_location, Number(juliaEnabled));
            
            gl.uniform1i(shadow_location, Number(lighting.shadow));
            gl.uniform1i(neon_location, Number(style.neon));
            gl.uniform1f(decayCoeff_location, environment.decay);
            gl.uniform3f(palette_seed_location, style.color.r / 255.0, style.color.g / 255.0, style.color.b / 255.0);
            gl.uniform3f(orbit_freq_location, style.orbit_freq[0], style.orbit_freq[1], style.orbit_freq[2]);
            gl.uniform1f(eps_location, eps);
            gl.uniform1f(ray_multiplier_location, ray_multiplier);
    
            julia_dimension == 3 ? gl.uniform3f(julia_location, julia[0], julia[1], julia[2]) : gl.uniform4f(julia_location, julia[0], julia[1], julia[2], julia[3]);
            param_locations.forEach((loc, i) => gl.uniform1f(loc, params[i]));
            gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        }
    }
}

export default useRender;