import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function PlaceholderProp() {
  return (
    <Box sx={{marginBottom: '16px'}}>
        <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Placeholder Text</Typography>
        <TextField size="small" fullWidth/>
    </Box>
  )
}

export default PlaceholderProp