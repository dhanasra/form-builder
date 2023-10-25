import { Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";
import LandingImage from '../../assets/images/landing.png'
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../../assets/images/logo-white.png';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import useStyles from './Style';
import { useMediaQuery } from '@mui/material';


function LandingPage() {

    const navigate = useNavigate();

    const classes = useStyles();

    const goToSignIn=()=>{
        navigate('/signin');
    }

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    console.log(isSmallScreen);

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{backgroundColor: '#1c222d', height: '100vh', color: '#fff', display: 'flex', flexDirection: 'column'}}>
            <Toolbar>
                <img src={LogoWhite} alt='Logo' width={20}></img>
                <div className={classes.logoTitle}>Formly</div>
                <Button color="inherit" onClick={()=>goToSignIn()}>Sign In</Button>
            </Toolbar>
            <Box className={`${classes.content} ${isSmallScreen ? classes.contentFull : ''}`}>
                <Box className={`${classes.container} ${isSmallScreen ? classes.containerExpand : ''}`}>
                    <Typography 
                        variant='header'>
                            Simplify data collection with online forms</Typography>
                    <Typography 
                        variant='content'
                        margin={'20px 0'}
                    >Create forms, share them online, receive instant alerts, and efficiently manage your data with our integrated apps. Focus on your business while Zoho Forms handles the data collection process for you!</Typography>
                    <Button 
                        variant='contained' 
                        onClick={()=>goToSignIn()} 
                        endIcon={<RiArrowRightLine fontSize={'20px'}/>} 
                        style={{
                            textTransform: 'none', 
                            borderRadius: '30px', 
                            padding: '10px 30px', 
                            fontSize: '1.15rem', 
                            fontWeight: '300'
                        }} >Get Started</Button>
                </Box>
                <Box className={`${classes.container} ${isSmallScreen ? classes.hideOnSmallScreen : ''}`}>
                    <Box 
                        className={classes.imgContainer}
                        component={'img'} 
                        src={LandingImage} 
                    />
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
  )
}

export default LandingPage