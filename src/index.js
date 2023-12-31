import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './setup/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    header: {
      fontSize: '3em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
      fontFamily: 'Poppins',
      fontWeight: 600
    },
    content: {
      fontSize: '1.2em',
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
      fontFamily: 'Poppins',
      fontWeight: 300
    },
    body1: {
      color: '#1116'
    },
    subtitle2: {
      color: '#1116',
      fontSize: '0.8em'
    },
    body3: {
      fontSize: '0.7em',
      fontFamily: 'Poppins',
      fontWeight: 400
    }

  },
})


root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router}/>
  </ThemeProvider>
);
