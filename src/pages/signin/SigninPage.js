import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { RiLinkedinBoxFill, RiFacebookCircleFill, RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import SignInImage from '../../assets/images/signin.png'

function SigninPage() {
  return (
    <Container style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

        <Box sx={{width: '600px', padding: '20px', boxShadow: '0px 2px 30px #ccc6', justifyContent: 'center', display:'flex'}}>
            <Box sx={{width: '380px', textAlign: 'center'}}>
                <Typography variant='h6'>Sign In</Typography>
                <Typography style={{fontSize: '14px', color: '#1116'}}>to access Forms</Typography>
                <Box component={'img'} src={SignInImage} width={'100%'} />
                <Button variant="outlined" startIcon={<FcGoogle />} style={{color: '#000', border: '1px solid #8886', textTransform: 'none', padding: '6px 20px'}}>Continue With Google</Button>
                <Divider sx={{margin: '24px 30px'}}>Or</Divider>
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

    </Container>
  )
}

export default SigninPage