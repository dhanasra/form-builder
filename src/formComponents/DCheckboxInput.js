import { Box, Checkbox, Divider, FormControlLabel, Typography } from '@mui/material'
import React from 'react'

function DCheckboxInput() {
  return (
    <Box>
        <Box sx={{p: 3}}>
            <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Checkbox Input</Typography>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <FormControlLabel
                    value="one"
                    control={<Checkbox checked={false} size="small" onChange={(v)=>{}} />}
                    label={
                        <Typography sx={{fontSize: '14px'}}>First Choice</Typography>
                    }
                />
                <FormControlLabel
                    value="one"
                    control={<Checkbox checked={false} size="small" onChange={(v)=>{}} />}
                    label={
                        <Typography sx={{fontSize: '14px'}}>Second Choice</Typography>
                    }
                />
                <FormControlLabel
                    value="one"
                    control={<Checkbox checked={false} size="small" onChange={(v)=>{}} />}
                    label={
                        <Typography sx={{fontSize: '14px'}}>Thrid Choice</Typography>
                    }
                />
            </Box>
        </Box>
        <Divider/>
    </Box>
  )
}

export default DCheckboxInput