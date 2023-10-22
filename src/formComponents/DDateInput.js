import React from 'react'
import { Box, Divider, TextField, Typography } from '@mui/material';

function DDateInput() {
  return (
    <Box>
        <Box sx={{p: 3}}>
            <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Date</Typography>
            <TextField type='date' size='small' style = {{width: 240}}/>
        </Box>
        <Divider/>
    </Box>
  )
}

export default DDateInput