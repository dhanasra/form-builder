import React from 'react'
import { Box, Drawer, List, ListItemButton, Typography } from "@mui/material";
import { PiNoteLight, PiChartBarLight, PiGearLight, PiUserLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

const items = [
    {
        icon: <PiNoteLight fontSize={'32px'}/>,
        label: "Forms",
        path: "/forms"
    },
    {
        icon: <PiChartBarLight fontSize={'32px'}/>,
        label: "Reports",
        path: "/reports"
    },
    {
        icon: <PiGearLight fontSize={'32px'}/>,
        label: "Settings",
        path: "/settings"
    },
    {
        icon: <PiUserLight fontSize={'32px'}/>,
        label: "Profile",
        path: "/profile"
    }
];

function Sider() {

  const location = window.location.pathname;

  return (
    <Box>
        <Drawer
        variant='permanent'
            sx={{
                height: "100%",
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    position: 'relative'
                },
            }}
            
        >
            <List>
                {
                    items.map((item)=>{
                        console.log()
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
                                    <Box sx={{flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                                        {item.icon} 
                                        <Typography sx={{fontSize: '14px', marginTop: '8px'}}>{item.label}</Typography>
                                    </Box>
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Drawer>
    </Box>
  )
}

export default Sider