import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'

function SizeProp() {
  return (
    <Box>
        <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Size</Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth >
            <Button>Small</Button>
            <Button>Medium</Button>
            <Button>Large</Button>
        </ButtonGroup>
    </Box>
  )
}

export default SizeProp

