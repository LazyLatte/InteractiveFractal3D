export enum FractalType {MandelBulb, MandelBox, Menger, Sierpinski, Julia4D};

export type Color = {
    r: number;
    g: number;
    b: number;
}

export type Camera = {
    pos: number[];
    front: number[];
}

export interface FractalStyle {
    color: Color;
    neon: boolean;
    orbit_freq: number[];
}

type Light = {
    pos: number[];
    color: Color;
}

export interface FractalLighting {
    enabled: boolean;
    lights:  Light[];
    shadow: number;
}

export interface FractalEnvironment {
    decay: number;
}

export interface FractalState {
    type: FractalType;
    params: number[];
    juliaEnabled: boolean;
    julia: number[];

    camera: Camera;
    eps: number;
    ray_multiplier: number;
    style: FractalStyle;
    lighting: FractalLighting;
    environment: FractalEnvironment;
}