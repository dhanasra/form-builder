import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LogoWhite from '../../../assets/images/logo-white.png';
import { RxShare1, RxEyeOpen } from "react-icons/rx";

function CustomAppBar(props) {
  return (
    <AppBar
        position="fixed">
        <Toolbar
            variant="dense"
            sx={{backgroundColor: "#1c222d", justifyContent: "space-between"}}
        >
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={LogoWhite} alt='Logo' width={20} style={{marginRight: '8px'}}/>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>Formly</Typography>
                </div>
                <div  style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton sx={{mx: 1}}>
                      <RxEyeOpen color='#fff' size={'18px'}/>
                    </IconButton>
                    <IconButton sx={{mx: 1}} onClick={()=>props.onShareClick()}>
                      <RxShare1 color='#fff' size={'18px'}/>
                    </IconButton>
                    <Button sx={{textTransform: "none", mx: 1, textDecoration: 'underline', color: '#1ffffd',}} variant="text">All Entries</Button>
                    <Button sx={{textTransform: "none", mx: 1,  }} variant="contained" >Access Form</Button>
                    {/* <Avatar alt="Dhana Sekaran" src="/static/images/avatar/1.jpg" sx={{width: 36, height: 36}} /> */}
                </div>
        </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar