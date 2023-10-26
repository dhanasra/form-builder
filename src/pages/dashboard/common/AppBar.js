import { AppBar, Avatar, Button, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import LogoWhite from '../../../assets/images/logo-white.png';
import theme from '../../../utils/theme';
import { RxBell } from 'react-icons/rx'
import { RxHamburgerMenu } from "react-icons/rx";

function HomeAppBar() {


  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
        position="fixed">
        <Toolbar
            variant="dense"
            sx={{backgroundColor: "#1c222d", justifyContent: "space-between"}}
        >
                {
                  isSmallScreen
                    ? <IconButton sx={{color: '#fff'}}><RxHamburgerMenu/></IconButton>
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
    </AppBar>
  )
}

export default HomeAppBar