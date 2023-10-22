import { Box, Divider, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomAppBar from './components/CustomAppBar'
import ComponentsDrawer from './components/ComponentsDrawer'
import { RxGear, RxTrash } from "react-icons/rx";
import { PiNoteLight } from "react-icons/pi";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Components } from '../../utils/DComponents';
import PropertiesDrawer from './components/PropertiesDrawer';
import ShareDrawer from './components/ShareDrawer';


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

function FormBuilder() {

    const [items, setItems] = useState([]);
    const [hovered, setHovered] = useState('');
    const [open, setOpen] = React.useState(false);
    const [openShare, setOpenShare] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpenShare = () => {
        setOpenShare(true);
    };
    
    const handleCloseShare = () => {
        setOpenShare(false);
    };
  

    const addComponent = (id) => {
        const item = Components.find((item)=>{
            return item.id===id;
        });

        const newItem = {...item, id: `${id}-${items.length}`};
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const removeComponent = (id) => {
        const updatedItems = items.filter((item)=>item.id!==id)
        setItems(updatedItems);
    };

    const handleMouseEnter = (id) => {
        setHovered(id);
    };
    
    const handleMouseLeave = () => {
        setHovered('');
    };

    const handleDragOver = (e, id) => {
        e.preventDefault();
        const draggedItemId = parseInt(e.dataTransfer.getData('text/plain'), 10);
        const newItems = items.slice();
        const currentIndex = items.findIndex((item) => item.id === draggedItemId);
        const newIndex = items.findIndex((item) => item.id === id);

        if (currentIndex !== -1 && newIndex !== -1 && currentIndex !== newIndex) {
            const [movedItem] = newItems.splice(currentIndex, 1);
            newItems.splice(newIndex, 0, movedItem);
            setItems(newItems);
        }
    };

    const handleDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
    
        const updatedItems = reorder(
          items,
          result.source.index,
          result.destination.index
        );
    
        setItems(updatedItems);
      };

   return (
    <Box sx={{display: 'flex'}}>
        <CustomAppBar
            onShareClick={()=>handleClickOpenShare()}
        />
        <Box sx={{
        display: 'flex',
        height: "calc(100vh - 48px)",
        top: "auto",
        bottom: 0,
        position: "fixed",
        width: "100vw"
      }}>
        <ComponentsDrawer/>
        <Box 
          component="main"
          sx={{
            position: 'relative',
            overflow: "auto",
            background: "#f5f6f6",
            flexGrow: 1, 
            display: 'flex',
            justifyContent: 'center'
          }}
        >
            <div
                onDrop={(e)=>{
                    e.preventDefault();
                    const draggedId = e.dataTransfer.getData('text/plain');
                    addComponent(draggedId);
                }}
                onDragOver={(e)=>{
                    e.preventDefault();
                    handleDragOver(e)
                }}
            >
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Box
                        height={'1000px'}
                        width={'700px'}
                        m={4}
                        sx={{
                            background: "#fff",
                            boxShadow: '0px -4px 10px #ccc'
                        }}
                    >
                        <Box sx={{p: 3, display: "flex", alignItems: "center"}}>
                            <PiNoteLight fontSize={28}/>
                            <Typography variant='h6' sx={{marginLeft: "8px"}}>Personal Information Form</Typography>
                        </Box>
                        <Droppable droppableId="reorderable-list">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {items.map((item, index) => (
                                    <Draggable
                                        key={`${item.id}-${index}`}
                                        draggableId={item.id}
                                        index={index}
                                    >
                                        {(provided, snapshot)=>{
                                            return <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                
                                            <Box 
                                                onClick={()=>handleClickOpen()}
                                                onMouseEnter={()=>handleMouseEnter(`${item.id}-${index}`)}
                                                onMouseLeave={handleMouseLeave}
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: "end",
                                                    background: "#fff",
                                                    
                                                    opacity: snapshot.isDragging
                                                        ? 0.6: 1,
                                                    border: snapshot.isDragging || (hovered===`${item.id}-${index}`) 
                                                        ? "1px dashed green": "none"}}
                                            >

                                                {
                                                    (hovered===`${item.id}-${index}`) && <Box sx={{
                                                        position: 'fixed',
                                                        display: "flex",
                                                    }}>
                                                        <IconButton onClick={()=>handleClickOpen()}>
                                                            <RxGear style={{margin: '10px'}} fontSize={18}/>   
                                                        </IconButton> 
                                                        <IconButton onClick={()=>removeComponent(item.id)}>
                                                            <RxTrash style={{margin: '10px'}} fontSize={18}/>
                                                        </IconButton>
                                                    </Box>
                                                }
                                                <Box sx={{width: "100%"}}>
                                                    {item.component}
                                                    <Divider/>
                                                </Box>
                                            </Box>
                                            </div>
                                        }}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </Box>
                    
                </DragDropContext>
                <ShareDrawer
                    open={openShare}
                    onClose={()=>handleCloseShare()}
                />
                <PropertiesDrawer
                    open={open}
                    onClose={()=>handleClose()}
                />
            </div>
        </Box>
      </Box>
    </Box>
   )
}

export default FormBuilder