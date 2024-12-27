import { useState } from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useAppSelector } from '../../hooks';

const ToClipboard= () => {
    const state = useAppSelector(state => state.fractal);
    const [isCopied, setIsCopied] = useState(false);
    const handleOnClick = () => {
        const settingData = JSON.stringify(state);
        navigator.clipboard.writeText(settingData);
        setIsCopied(true);
    }
    return (
        <Tooltip title={isCopied ? 'copied!' : ''}>
            <Button disableRipple onClick={handleOnClick} onMouseLeave={() => setIsCopied(false)}>To<br/>Clipboard</Button>
        </Tooltip>
    )
}

export default ToClipboard;