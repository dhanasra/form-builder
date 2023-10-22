import { Box, Drawer, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Components } from '../../../utils/DComponents';


function ComponentsDrawer() {
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
                    Components.map((item)=>{
                            return (
                                <ListItem
                                    key={item.id}
                                >
                                    <Box
                                        draggable
                                        onDragStart={(e) => e.dataTransfer.setData('text/plain', item.id)}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            border: '1px solid #0000002e',
                                            borderRadius: '3px',
                                            p: 1,
                                            width: '200px',
                                            background: "#fff"
                                        }}
                                    >
                                        {item.icon}
                                        <Typography fontSize={'13px'} sx={{marginLeft: "16px"}}>{item.label}</Typography>
                                    </Box>
                                </ListItem>
                            );
                        }
                    )
                }
            </List>
        </Drawer>
    </Box>
  )
}

export default ComponentsDrawer