import { Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { FiX } from 'react-icons/fi'
import LabelProp from '../../../propComponents/LabelProp'
import PlaceholderProp from '../../../propComponents/PlaceholderProp'
import InstructionsProp from '../../../propComponents/InstructionsProp'

function PropertiesDrawer(props) {
  return (
    <Drawer
        open={props.open} 
        anchor="right"
        PaperProps={{
            sx: {
              width: 700,
            }
          }}
    >   
    
        <Toolbar sx={{px: 3, justifyContent: "space-between"}} variant='dense'>
            <Typography sx={{fontSize: "16px"}}>Properties</Typography>
            <IconButton onClick={()=>props.onClose()}>
                <FiX sx={{}} fontSize={"22px"} />
            </IconButton>
        </Toolbar>
        <Divider></Divider> 
        <Box sx={{p: 3}}>
            <LabelProp/>
            <InstructionsProp/>
            <PlaceholderProp/>
        </Box>
    </Drawer>
  )
}

export default PropertiesDrawer