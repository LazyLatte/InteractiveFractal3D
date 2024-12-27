import {ChangeEvent} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { switchFractal, toggleJulia } from '../../reducers/fractalSlice';
import { FractalType } from '../../shaders/interfaces';
const FractalSelector = () => {
    const dispatch = useAppDispatch();
    const {type, juliaEnabled} = useAppSelector(state => state.fractal);
    
    const fractalTypes = Object.keys(FractalType).filter((_, i) => FractalType[i] === undefined);
    const handleOnChange = (e: SelectChangeEvent<string>) => dispatch(switchFractal({type: FractalType[e.target.value as keyof typeof FractalType]}));
    const handleCheckboxChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => dispatch(toggleJulia());
    const juliaCheckBox = <Checkbox checked={juliaEnabled} onChange={handleCheckboxChange}/>;
    return (
        <FormControl fullWidth focused={false} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '20px 0 12px'}}>
            <Select
                id="fractal-select"
                value={fractalTypes[type]}
                onChange={handleOnChange}
                sx={{
                    width: 150
                }}
            >
                {fractalTypes.map((t, i) => <MenuItem value={t} key={i}>{t}</MenuItem>)}
            </Select>
            <FormGroup row>
                <FormControlLabel control={juliaCheckBox} label="Julia" />
            </FormGroup>
        </FormControl>
    )
}

export default FractalSelector;