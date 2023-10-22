import { Box, Button, Divider, Drawer, IconButton, TextField, TextareaAutosize, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { FiX } from 'react-icons/fi'
import { QRCode } from 'react-qrcode-logo'
import { RiLinkedinBoxFill, RiFacebookCircleFill, RiGithubFill } from "react-icons/ri";

function ShareDrawer(props) {
  return (
    <Drawer
        open={props.open} 
        anchor="right"
        PaperProps={{
            sx: {
              width: 600,
            }
          }}
    >   
        <Toolbar sx={{px: 3, justifyContent: "space-between"}} variant='dense'>
            <Typography sx={{fontSize: "16px"}}>Share Publicly</Typography>
            <IconButton onClick={()=>props.onClose()}>
                <FiX sx={{}} fontSize={"22px"} />
            </IconButton>
        </Toolbar>
        <Divider></Divider> 
        <Box sx={{p: 3}}>
          <Box sx={{marginBottom: '16px'}}>
            <Typography sx={{fontSize: "14px", marginBottom: '8px'}}>Form Link</Typography>
            <Box
                sx={{
                    border: '1px solid #0000002e',
                    p: 1.5,
                    display: 'flex',
                    borderRadius:'3px',
                    background: "#00000003"
                }}
            >
                <Typography sx={{fontSize: "14px", overflowWrap: "anywhere"}} >https://forms.zohopublic.in/dhanainzeph/form/TestForm/formperma/w24cw0Pp6gTF6vASA0i58KWykceuJ7gqMyMgJcv37Ws</Typography>
            </Box>
          </Box>
          <Box sx={{marginBottom: '16px'}}>
            <Typography sx={{fontSize: "14px", marginBottom: '8px'}}>QR Code</Typography>
            <Box
                sx={{
                    border: '1px solid #0000002e',
                    p: 1,
                    display: 'flex',
                    borderRadius:'3px',
                    alignItems: 'center',
                    background: "#00000003"
                }}
            >
                <QRCode value="https://github.com/gcoro/react-qrcode-logo" size={100}/>
                <Box
                  sx={{p: 2}}
                >
                  <Typography sx={{fontSize: "14px", overflowWrap: "anywhere"}} >Share this QR code to your users and make them directly handle with their devices.</Typography>
                  <Button variant="contained" sx={{textTransform: "none", background: "#1c222d", marginTop: "16px"}} disableElevation={true}>Download</Button>
                </Box>
            </Box>
          </Box>
          <Box>
            <Typography sx={{fontSize: "14px", marginBottom: '8px'}}>Share On Social Media</Typography>
            <Box
                sx={{
                    border: '1px solid #0000002e',
                    p: 1,
                    display: 'flex',
                    borderRadius:'3px',
                    alignItems: 'center',
                    background: "#00000003"
                }}
            >
                <Box
                  sx={{p: 0, display: "flex"}}
                >
                  <IconButton>
                    <RiLinkedinBoxFill size={30} color='#0072B1'/>
                  </IconButton>
                  <IconButton sx={{mx: 1}}>
                    <RiFacebookCircleFill size={30} color='#3B5998'/>
                  </IconButton>
                  <IconButton>
                    <RiGithubFill size={30} color='#000'/>
                  </IconButton>
                </Box>
            </Box>
          </Box>
        </Box>
    </Drawer>
  )
}

export default ShareDrawer