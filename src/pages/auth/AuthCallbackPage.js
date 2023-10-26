import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import loadingAnimation from '../../assets/lotties/loading.json'
import Lottie from 'react-lottie'
import useStyles from './style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getMainData } from '../../network/service/authService';
import { globalConst } from '../../utils/global';

function AuthCallbackPage() {

    const [searchParams] = useSearchParams();
    const accessToken = searchParams.get("token");

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchUser=async()=>{

            Cookies.set('accessToken', accessToken); 

            const data = await getMainData();

            Cookies.set('accessToken', data?.credentials.accessToken); 
            Cookies.set('refreshToken', data?.credentials.refreshToken); 

            localStorage.setItem('user', JSON.stringify(data.user));

            globalConst.fields = data?.formConfigs.fields;
            globalConst.groups = data?.formConfigs.groups;
            globalConst.properties = data?.formConfigs.properties;
            
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