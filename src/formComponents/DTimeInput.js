import { Box, Divider, TextField, Typography } from '@mui/material'
import React from 'react'

function DTimeInput() {
  return (
    <Box>
        <Box sx={{p: 3}}>
            <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Time</Typography>
            <TextField type='time' size='small' style = {{width: 240}} />
        </Box>
        <Divider/>
    </Box>
  )
}

export default DTimeInput