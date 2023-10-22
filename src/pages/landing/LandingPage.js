import { Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";
import { GiFlamingSheet } from "react-icons/gi";
import LandingImage from '../../assets/images/landing.png'
import { useNavigate } from 'react-router-dom';


function LandingPage() {

    const navigate = useNavigate();

    const goToSignIn=()=>{
        navigate('/signin');
    }

  return (
    <div>
        <Box sx={{backgroundColor: '#1c222d', height: '100vh', color: '#fff', display: 'flex', flexDirection: 'column'}}>
            <Toolbar>
                <GiFlamingSheet fontSize={'24px'} style={{marginRight: '8px'}}/>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>Formly</Typography>
                <Button color="inherit" onClick={()=>goToSignIn()}>Sign In</Button>
            </Toolbar>
            <Box sx={{height: 'calc(100vh - 64px)', display: 'flex', padding: '100px'}} >
                <Box sx={{width: '50%', height: '100%', display: 'grid', justifyContent: 'center', alignItems: 'center', padding: '8px'}}>
                    <div>
                        <Typography variant='h4' fontSize={'54px'} fontWeight={600}>Simplify data collection with online forms</Typography>
                        <Typography variant='h6' margin={'20px 0'} fontWeight={300}>Create forms, share them online, receive instant alerts, and efficiently manage your data with our integrated apps. Focus on your business while Zoho Forms handles the data collection process for you!</Typography>
                        <Button variant='contained' onClick={()=>goToSignIn()} endIcon={<RiArrowRightLine fontSize={'20px'}/>} style={{textTransform: 'none', borderRadius: '30px', padding: '10px 30px', fontSize: '1.15rem', fontWeight: '300'}} >Get Started</Button>
                    </div>
                </Box>
                <Box sx={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px'}}>
                    <Box component={'img'} src={LandingImage} width={'100%'} height={'100%'} sx={{objectFit: 'contain'}}/>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default LandingPage