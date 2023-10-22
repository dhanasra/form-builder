import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function DAddressInput() {
  return (
    <Box sx={{p: 3}}>
        <Typography sx={{fontSize: '14px', marginBottom: '16px'}}>Address Input</Typography>
        <Typography sx={{fontSize: '12px', marginBottom: '6px'}}>Street Address</Typography>
        <TextField size="small" fullWidth sx={{marginBottom: '16px'}}/>
        <Typography sx={{fontSize: '12px', marginBottom: '6px'}}>Address Line 2</Typography>
        <TextField size="small" fullWidth sx={{marginBottom: '16px'}}/>
        <Box sx={{display: "flex", marginBottom: '16px'}}>
          <Box sx={{flexGrow: 1, marginRight: "8px"}}>
            <Typography sx={{fontSize: '12px', marginBottom: '6px'}}>City</Typography>
            <TextField size="small" fullWidth/>
          </Box>
          <Box sx={{flexGrow: 1, marginLeft: "8px"}}>
            <Typography sx={{fontSize: '12px', marginBottom: '6px'}}>State / Region</Typography>
            <TextField size="small" fullWidth/>
          </Box>
        </Box>
        <Box sx={{display: "flex"}}>
          <Box sx={{flexGrow: 1, marginRight: "8px"}}>
            <Typography sx={{fontSize: '12px', marginBottom: '6px'}}>Postal / Zip Code</Typography>
            <TextField size="small" fullWidth/>
          </Box>
          <Box sx={{flexGrow: 1, marginLeft: "8px"}}>
            <Typography sx={{fontSize: '12px', marginBottom: '6px'}}>Country</Typography>
            <TextField size="small" fullWidth/>
          </Box>
        </Box>
    </Box>
  )
}

export default DAddressInput