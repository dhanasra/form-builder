import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LogoWhite from '../../assets/images/logo-white.png';
import { PiNoteLight, PiChartBarLight, PiGearLight, PiUserLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';


const items = [
    {
        icon: <PiNoteLight fontSize={'24px'}/>,
        label: "Forms",
        path: "/forms"
    },
    {
        icon: <PiChartBarLight fontSize={'24px'}/>,
        label: "Reports",
        path: "/reports"
    },
    {
        icon: <PiGearLight fontSize={'24px'}/>,
        label: "Settings",
        path: "/settings"
    },
    {
        icon: <PiUserLight fontSize={'24px'}/>,
        label: "Profile",
        path: "/profile"
    }
];

function NavigationDrawer(props) {
    
    const location = window.location.pathname;

  return (
    <div>
        <Drawer
            open={props.open} 
            anchor="left"
            sx={{
                padding: "20px",
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    width: '60%'
                },
            }}
            
        >
        <Toolbar sx={{px: 2, backgroundColor: "#1c222d", justifyContent: "space-between"}} variant='dense'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={LogoWhite} alt='Logo' width={20} style={{marginRight: '8px'}}/>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px', color: '#fff' }}>Formly</Typography>
            </div>
            <IconButton onClick={()=>props.onClose()}>
                <FiX color='#fff' fontSize={"22px"} />
            </IconButton>
        </Toolbar>
        <Divider/>
            <List>
                {
                    items.map((item)=>{
                        return (
                            <ListItemButton 
                                key={item.path}
                                component={Link} 
                                to={item.path}
                                sx={{
                                    justifyContent: 'center', 
                                    margin: '16px 0',
                                    color: "#1116",
                                    "&.Mui-selected": {
                                        backgroundColor: "#fff",
                                        color: "#1c222d"
                                    }
                                }} 
                                selected={location === item.path}>
                                    <ListItemIcon>
                                        {item.icon} 
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Drawer>
    </div>
  )
}

export default NavigationDrawer