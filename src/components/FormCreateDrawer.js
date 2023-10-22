import { Box, Button, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';


function FormCreateDrawer(props) {

  return (
    <div>
        <Drawer 
            open={props.open} 
            anchor="right"
            sx={{
                padding: "20px"
            }}
        >   
        
        <Toolbar sx={{px: 3, justifyContent: "space-between"}} variant='dense'>
            <Typography sx={{fontSize: "18px"}}>Create Form</Typography>
            <IconButton onClick={()=>props.onClose()}>
                <FiX sx={{}} fontSize={"22px"} />
            </IconButton>
        </Toolbar>
        <Divider></Divider> 
        <Box sx={{p: 3}}>

            <Typography sx={{fontSize: "15px", color: "#666"}}>Form Title</Typography>
            <TextField 
                variant="outlined" 
                size="small" 
                sx={{ marginTop: '8px', width: '400px'}} 
                fullWidth
            ></TextField>
            <Box
                sx={{
                    my: 4,
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Button 
                    onClick={()=>props.onClose()}
                    variant='outlined'
                    sx={{
                        textTransform: "none",
                        width: "100px"
                    }}
                    >Cancel</Button>
                <Button 
                    component={Link}
                    to={'/form/builder'}
                    variant="contained"
                    disableElevation="true"
                    sx={{
                        textTransform: "none",
                        width: "100px"
                    }}
                >Create</Button>
            </Box>
        </Box>
        </Drawer>
    </div>
  )
}

export default FormCreateDrawer