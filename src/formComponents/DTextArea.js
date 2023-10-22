import { Box, Divider, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

function DTextArea() {
  return (
    <Box>
        <Box sx={{p: 3}}>
            <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Multi Line</Typography>
            <TextareaAutosize size="small" style = {{width: 240}} minRows={8}/>
        </Box>
        <Divider/>
    </Box>
  )
}

export default DTextArea