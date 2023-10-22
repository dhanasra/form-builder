import { Box, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

function InstructionsProp() {
  return (
    <Box sx={{marginBottom: '16px'}}>
        <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Instructions</Typography>
        <TextareaAutosize style={{resize: 'none', width: "100%"}} size="small" fullWidth minRows={6}/>
    </Box>
  )
}

export default InstructionsProp