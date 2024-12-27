import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import Control from './control';
import Save from './save';
import Setting from './setting';
import { toggleShader } from './toggleShader';
import { initGL} from './initGL';
import Lighting from './setting/advanced/lighting';

const FractalRenderer = () => {
  const gl = useMemo(() => initGL(), []);
  const fractalRef = useRef<HTMLDivElement>(null);
  const {type, params, juliaEnabled, julia, camera, eps, ray_multiplier, style, lighting, environment} = useAppSelector((state) => state.fractal);
  const render = useMemo(() => toggleShader(gl, type), [type]);

  const draw = useCallback(() => {
    render(params, juliaEnabled, julia, camera, eps, ray_multiplier, style, lighting, environment);
    fractalRef.current?.append(gl.canvas as HTMLCanvasElement);
    return gl.canvas as HTMLCanvasElement;
  }, [type, params, juliaEnabled, julia, camera, eps, ray_multiplier, style, lighting, environment]);
  
  useEffect(() => {
    draw();
  }, [draw]);
  
  //return <Lighting setting={state} dispatch={dispatch}/>;
  //<Setting setting={state} dispatch={dispatch}/>
  //return null;
  return (
    <>
      <Control>
        <div ref={fractalRef} style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, overflow: 'hidden'}}/>
      </Control>
      <Setting/>
    </>
  );
}

export default FractalRenderer;