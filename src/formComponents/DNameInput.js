import { Box, Divider, TextField, Typography } from '@mui/material'
import React from 'react'

function DNameInput() {
  return (
    <Box>
        <Box sx={{display: "flex", p: 2}}>
            <Box sx={{p: 1}}>
                <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>First Name</Typography>
                <TextField size="small" style = {{width: 240}}/>
            </Box>
            <Box sx={{p: 1}}>
                <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Last Name</Typography>
                <TextField size="small" style = {{width: 240}}/>
            </Box>
        </Box>
        <Divider/>
    </Box>
  )
}

export default DNameInput