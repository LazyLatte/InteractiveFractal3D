import {  useAppSelector } from '../hooks';

const digits = 5;
const Display = () => {
  const {camera, eps, ray_multiplier} = useAppSelector((state) => state.fractal);
  return (
    <div style={{position: 'absolute', top: 8, right: 8, fontSize: '24px', color: 'white', textAlign: 'right'}}>
        <div>ray_mul: {ray_multiplier.toFixed(4)}</div>
        <div>eps: {eps.toFixed(7)}</div>
        <div>x: {camera.pos[0].toFixed(digits)}</div>
        <div>y: {camera.pos[1].toFixed(digits)}</div>
        <div>z: {camera.pos[2].toFixed(digits)}</div>
    </div>
  )
}

export default Display;