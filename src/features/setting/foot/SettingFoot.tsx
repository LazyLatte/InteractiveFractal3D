import Box from '@mui/material/Box';
import ResetButton from './ResetButton';
import FromClipboard from './FromClipboard';
import ToClipboard from './ToClipboard';
import {  useAppDispatch } from '../../hooks';
import { resetFractal, fromClipboard} from '../../reducers/fractalSlice';
const SettingFoot = () => {
  const dispatch = useAppDispatch();
  const reset = () => dispatch(resetFractal());
  const load = (data: Object) => dispatch(fromClipboard({}));
  return (
    <Box display='flex' flexDirection='row' justifyContent='space-around' alignItems='center' margin='40px 0'>
        <ResetButton reset={reset}/>
        <FromClipboard load={load}/>
        <ToClipboard/>
    </Box>
  )
}

export default SettingFoot;