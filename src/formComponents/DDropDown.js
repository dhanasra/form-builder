import { Box, Divider, Select, Typography } from '@mui/material'
import React from 'react'

function DDropDown() {
  return (
    <Box>
        <Box sx={{p: 3}}>
            <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Dropdown</Typography>
            <Select 
              size="small" 
              style = {{width: 240}}>

            </Select>
        </Box>
        <Divider/>
    </Box>
  )
}

export default DDropDown