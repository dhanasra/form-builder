import React from 'react'
import HomeAppBar from '../common/AppBar'
import Sider from '../common/Sider';
import { Box } from '@mui/material';
import FormsEmpty from '../../../components/FormsEmpty';
import FormCreateDrawer from '../../../components/FormCreateDrawer';

function FormListPage() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <HomeAppBar/>
      <Box sx={{
        display: 'flex',
        height: "calc(100vh - 48px)",
        top: "auto",
        bottom: 0,
        position: "fixed",
        width: "100vw"
      }}>
        <Sider/>
        <Box 
          component="main"
          sx={{
            background: "#f5f6f6",
            flexGrow: 1, 
            alignItems: 'center', 
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <FormsEmpty onCreate={()=>handleClickOpen()}/>
          <FormCreateDrawer 
            open={open}
            onClose={()=>handleClose()}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default FormListPage