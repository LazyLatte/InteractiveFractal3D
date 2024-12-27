import { useState, FC, ReactNode} from 'react';
import {  useAppDispatch } from '../hooks';
import { moveCamera, rotateCamera, wheelEps, wheelRayMultiplier } from '../reducers/fractalSlice';
import Display from './Display';
interface ControlProps {
    children?: ReactNode;
}
const Control: FC<ControlProps> = ({children}) => {
    const dispatch = useAppDispatch()
    const [evtButton, setEvtButton] = useState(-1);
    return (
        <div 
            style={{
                position: 'absolute', 
                top: 0, 
                right: 0, 
                bottom: 0, 
                left: 0, 
                backgroundColor: 'transparent',
                zIndex: 99,
                cursor: 'pointer'
            }} 
            tabIndex={0}
            onContextMenu={e => e.preventDefault()}
            onMouseDown={(e) => setEvtButton(e.button)}
            onMouseUp={() => setEvtButton(-1)}
            onClick={(e) => {
                if(document.pointerLockElement){
                    document.exitPointerLock();
                }else{
                    e.currentTarget.requestPointerLock();
                }
            }}
            onMouseMove={(e) => {
                if(document.pointerLockElement){
                    if(e.movementX === 0 && e.movementY === 0) return;
                    dispatch(rotateCamera({dir: [-e.movementY, -e.movementX]}));
                }
            }}
            onWheel={(e) => {
                if(evtButton === -1){
                    dispatch(wheelEps({inc: e.deltaY > 0}))
                }else if(evtButton === 2){
                    dispatch(wheelRayMultiplier({inc: e.deltaY > 0}))
                }
            }}
            onKeyDown={(e)=>{
                switch(e.code){
                    case 'KeyE': {
                        dispatch(moveCamera({dir: [0, 1, 0]}));
                        break;
                    }
                    case 'KeyC': {
                        dispatch(moveCamera({dir: [0, -1, 0]}));
                        break;
                    }
                    case 'KeyW': {
                        dispatch(moveCamera({dir: [0, 0, 1]}));
                        break;
                    }
                    case 'KeyS': {
                        dispatch(moveCamera({dir: [0, 0, -1]}));
                        break;
                    }
                    case 'KeyA': {
                        dispatch(moveCamera({dir: [-1, 0, 0]}));
                        break;
                    }
                    case 'KeyD': {
                        dispatch(moveCamera({dir: [1, 0, 0]}));
                        break;
                    }
                    default: break;
                }
                
            }}
            
        >
            {children}
            <Display/>
        </div>
    )
}

export default Control;