import {FC} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface SettingHeadProps {closeDrawer: () => void}
const SettingHead: FC<SettingHeadProps> = ({closeDrawer}) => {
  return (
    <Box display='flex' justifyContent='flex-end' alignItems='center'>
        <IconButton onClick={closeDrawer}>
            <ChevronLeftIcon fontSize='large'/>
        </IconButton>
    </Box>
  )
}

export default SettingHead;