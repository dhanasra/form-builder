import { Box, Divider, TextField, Typography } from '@mui/material'
import React from 'react'

function DPhoneInput() {
  return (
    <Box>
        <Box sx={{p: 3}}>
            <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Phone Number</Typography>
            <TextField size="small" style = {{width: 240}}/>
        </Box>
        <Divider/>
    </Box>
  )
}

export default DPhoneInput