import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setParameter } from '../../reducers/fractalSlice';

import MandelBulbParamSliderSetting from '../../../data/mandelbulb/paramSliderSetting.json';
import MandelBoxParamSliderSetting from '../../../data/mandelbox/paramSliderSetting.json';
import MengerParamSliderSetting from '../../../data/menger/paramSliderSetting.json';
import SierpinskiParamSliderSetting from '../../../data/sierpinski/paramSliderSetting.json';
import Julia4DParamSliderSetting from '../../../data/julia4D/paramSliderSetting.json';


const sliderSetting = [MandelBulbParamSliderSetting, MandelBoxParamSliderSetting, MengerParamSliderSetting, SierpinskiParamSliderSetting, Julia4DParamSliderSetting] as const;
const ParamSliders = () => {
    const dispatch = useAppDispatch();
    const {type, params} = useAppSelector(state => state.fractal);
    const paramSliderSetting = sliderSetting[type].params;
    return (<>
        {paramSliderSetting.map((p, i) => (
            <Box margin='8px 0' key={i}>
                <Typography id="param-label">
                    {p.label}
                </Typography>
                <Slider
                    min={p.minValue}
                    max={p.maxValue}
                    step={p.step}
                    value={params[i]}
                    onChange={(_: Event, newValue: number | number[]) => {
                        if (typeof newValue === 'number') {
                            dispatch(setParameter({idx: i, value: newValue}));
                        }
                    }}
                    valueLabelDisplay="auto"
                    marks={p.marks.map(e => ({label: e, value: e}))}
                    sx={{
                        width: 300,
                        height: 10,
                    }}
                />
            </Box>
        ))}
    </>);
}

export default ParamSliders;

