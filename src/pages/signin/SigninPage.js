import { Box, Button, Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { RiLinkedinBoxFill, RiFacebookCircleFill, RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import SignInImage from '../../assets/images/signin.png'
import useStyles from './style';
import theme from '../../utils/theme';

function SigninPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const signInWithGoogle = ()=>{
        const url = 'https://z0qmycg8b1.execute-api.us-east-1.amazonaws.com/dev/auth/google';
        window.location.href = url;
    }

  return (
    <Box className={`${classes.wrapper} ${isSmallScreen ? classes.wrapperFull : ''}`}>

        <Box className={`${classes.card} ${isSmallScreen ? classes.cardFull : ''}`}>
            <Box className={`${classes.content}`}>
                <Typography variant='h6'>Sign In</Typography>
                <Typography variant='body1'>to access Forms</Typography>
                <Box component={'img'} src={SignInImage} width={'100%'} />
                <div
                    style={{margin: '0 14px'}}>
                    <Button onClick={signInWithGoogle} variant="outlined" startIcon={<FcGoogle />} style={{color: '#333', fontWeight: 400, border: '1px solid #8886', textTransform: 'none', padding: '6px 20px' }} fullWidth>Continue With Google</Button>
                </div>
                <Divider sx={{margin: '24px 14px'}}>Or</Divider>
                <Grid
                    container
                    direction={'row'}
                    alignItems={'center'}
                    columnGap={4}
                    justifyContent={'center'}
                >
                    <RiLinkedinBoxFill size={30} color='#0072B1'/>
                    <RiFacebookCircleFill size={30} color='#3B5998'/>
                    <RiGithubFill size={30} color='#000'/>
                </Grid>
            </Box>      
        </Box>

    </Box>
  )
}

export default SigninPage