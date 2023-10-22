import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

function DRadioInput() {
  return (
    <Box>
        <Box sx={{p: 3}}>
            <Typography sx={{fontSize: '14px', marginBottom: '8px'}}>Radio Input</Typography>
            <RadioGroup
                defaultValue="one"
                name="radio-buttons-group"
            >
                <FormControlLabel
                    value="one"
                    control={<Radio size="small" />}
                    label={
                        <Typography sx={{fontSize: '14px'}}>First Choice</Typography>
                    }
                />
                <FormControlLabel
                    value="two"
                    control={<Radio size="small" />}
                    label={
                        <Typography sx={{fontSize: '14px'}}>Second Choice</Typography>
                    }  
                />
                <FormControlLabel
                    value="three"
                    control={<Radio size="small" />}
                    label={
                        <Typography sx={{fontSize: '14px'}}>Third Choice</Typography>
                    }
                />
            </RadioGroup>
        </Box>
        <Divider/>
    </Box>
  )
}

export default DRadioInput