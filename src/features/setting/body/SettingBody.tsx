import Box from '@mui/material/Box';
import FractalSelector from './FractalSelector';
import ParamSliders from './ParamSliders';
import JuliaSliders from './JuliaSliders';
import ShadingOptions from './ShadingOptions';

const SettingBody = () => {  
  return (
    <Box display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' padding='0 40px'>
      <FractalSelector/>
      <ParamSliders/>
      <JuliaSliders/>
      <ShadingOptions/>
    </Box>
  )
}

export default SettingBody;