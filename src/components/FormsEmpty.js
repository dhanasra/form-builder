import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import FormImage from '../assets/images/form.png'
import { FiArrowRight } from "react-icons/fi";

function FormsEmpty(props) {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '360px',
        }}
    >
        <Box component={'img'} src={FormImage} width={'60%'}/>
        <Typography variant='h6' textAlign={"center"}>Welcome to Formly</Typography>
        <Typography sx={{fontSize: '14px', color: '#1116', textAlign: 'center', p: 1}}>Create your first form now to explore endless possibilities in data collection.</Typography>
        <Button onClick={props.onCreate} variant="contained" sx={{textTransform: 'none', m: 2}} endIcon={<FiArrowRight/>}>Let's Get Started</Button>
    </Box>
  )
}

export default FormsEmpty