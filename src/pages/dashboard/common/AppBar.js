import { AppBar, Avatar, Button, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import LogoWhite from '../../../assets/images/logo-white.png';
import theme from '../../../utils/theme';
import { RxBell } from 'react-icons/rx'
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationDrawer from '../../common/NavigationDrawer';

function HomeAppBar() {


  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const openSideNav=()=>{
    console.log(open);
    setOpen(true);
  }

  const closeSideNav=()=>{
    setOpen(false);
  }

  return (
    <AppBar
        position="fixed">
        <Toolbar
            variant="dense"
            sx={{backgroundColor: "#1c222d", justifyContent: "space-between"}}
        >
                {
                  isSmallScreen
                    ? <IconButton onClick={()=>openSideNav()} sx={{color: '#fff'}}><RxHamburgerMenu/></IconButton>
                    : <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={LogoWhite} alt='Logo' width={20} style={{marginRight: '8px'}}/>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>Formly</Typography>
                    </div>
                }
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button sx={{color: '#1ffffd', textDecoration: 'underline', fontSize: '14px'}}>Upgrade</Button>
                    <RxBell fontSize={"22px"} style={{margin: '0px 20px'}}/>
                    <Avatar alt="Dhana Sekaran" src="/static/images/avatar/1.jpg" sx={{width: 36, height: 36}} />
                </div>
        </Toolbar>
        <NavigationDrawer open={open} onClose={()=>closeSideNav()}/>
    </AppBar>
  )
}

export default HomeAppBar