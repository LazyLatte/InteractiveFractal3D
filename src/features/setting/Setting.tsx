import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingHead from './head';
import SettingBody from './body';
import SettingFoot from './foot';

const Setting = () => {
  const [open, setOpen] = useState(false);
  const handleOpenDrawer = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (
    <>
      <Drawer 
        variant='persistent'
        anchor='left'
        open={open}
        hideBackdrop
        sx={{
          position: 'absolute',
          zIndex: 999,
        }}
        PaperProps={{
          sx: {
            backgroundColor: '#eee'
          }
        }}
      >
        <SettingHead closeDrawer={handleDrawerClose}/>
        <Divider/>
        <SettingBody/>
        <SettingFoot/>
        <Box display='flex' flexDirection='row' justifyContent='space-around' alignItems='center'>
          <Button onClick={()=>{}}>sample 0-red</Button>
          <Button onClick={()=>{}}>sample 0-blue</Button>
        </Box>
      </Drawer>
      <IconButton 
        aria-label="setting" 
        onClick={handleOpenDrawer}
        sx={{
          position: 'absolute', 
          top: 8, 
          left: 8, 
          zIndex: 99
        }} 
      >
        <SettingsIcon sx={{fontSize: '48px', color: 'ghostwhite'}}/>
      </IconButton>
    </>
  )
}

export default Setting;