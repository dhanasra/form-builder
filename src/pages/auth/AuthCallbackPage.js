import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import loadingAnimation from '../../assets/lotties/loading.json'
import Lottie from 'react-lottie'
import useStyles from './style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function AuthCallbackPage() {

    const [searchParams] = useSearchParams();
    const accessToken = searchParams.get("token");

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchUser=async()=>{
            const headers = {
                Authorization: `Bearer ${accessToken}`
            };

            const response = await axios.get("https://z0qmycg8b1.execute-api.us-east-1.amazonaws.com/dev/main", {headers});
            const data = response.data['data'];

            console.log(data);

            Cookies.set('accessToken', data?.credentials.accessToken); 
            Cookies.set('refreshToken', data?.credentials.refreshToken); 

            localStorage.setItem('user', JSON.stringify(data.user));
            
            navigate('../../forms');
        }
        fetchUser();
    })
    

    const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
        <Lottie
            options={{
                animationData: loadingAnimation
            }}
            height={100}
            width={100}
        />
        <Typography variant='body2' color={'#fff'}>
            Authenticating...
        </Typography>
    </Box>
  )
}

export default AuthCallbackPage