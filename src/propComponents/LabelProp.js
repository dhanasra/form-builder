import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React from 'react'

function LabelProp() {
  return (
    <Box sx={{marginBottom: '16px'}}>
        <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Field Label</Typography>
        <TextField size="small" fullWidth/>
        <FormControlLabel
            control={<Checkbox checked={false} size="small" onChange={(v)=>{}} />}
            label={
                <Typography sx={{fontSize: '14px'}}>Hide Label</Typography>
            }
        />
    </Box>
  )
}

export default LabelProp