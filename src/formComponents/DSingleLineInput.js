import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function DSingleLineInput() {
  return (
    <Box sx={{p: 3}}>
        <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Text Input</Typography>
        <TextField size="small" style = {{width: 240}}/>
    </Box>
  )
}

export default DSingleLineInput