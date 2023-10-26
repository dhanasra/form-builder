import { Box, Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import HomeAppBar from '../common/AppBar'
import Sider from '../common/Sider'
import { getUser } from '../../../utils/global';
import theme from '../../../utils/theme';

function ProfilePage() {

  const [isViewMode, setIsViewMode] = useState(true);

  const user = getUser();

  const [firstName, setFirstName] = useState(user.firstName??'')
  const [lastName, setLastName] = useState(user.lastName??'')
  const [countryCode, setCountryCode] = useState(user.countryCode??'')
  const [locale, setLocale] = useState(user.locale??'')
  const [dateFormat, setDateFormat] = useState(user.dateFormat??'')
  const [currency, setCurrency] = useState(user.defaultCurrency??'')

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <HomeAppBar/>
      <Box sx={{
        display: 'flex',
        height: "calc(100vh - 48px)",
        top: "auto",
        bottom: 0,
        position: "fixed",
        width: "100vw"
      }}>
        {!isSmallScreen && <Sider/>}
        <Box 
          component="main"
          sx={{
            display: 'block',
            overflow: 'auto',
            flexGrow: 1,
            padding: isSmallScreen ? 2: 4,
            background: "#f5f6f6",
          }}
        >
          <Box sx={{
            background: '#fff',
            boxShadow: '0px 2px 30px #ccc6',
            p: 3
          }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <Typography variant='h6'>Profile</Typography>
                <Typography variant='subtitle2'>You can view and manage your profile details here</Typography>
              </div>
              {
                isViewMode && <Button onClick={()=>setIsViewMode(false)} variant='contained' disableElevation style={{height: '40px', width: '80px', textTransform: 'none'}}>Edit</Button>
              }
            </Box>

            <Box sx={{marginTop: '36px', marginBottom: '18px'}}>
              <Grid container rowGap={4} columnGap={6}>
                <Grid item xs={12} md={4}>
                  <Box>
                    <Typography variant='body3'>First Name</Typography>
                    {
                      isViewMode 
                        ? <Typography variant='body2' marginTop={'4px'}>{user.firstName}</Typography>
                        : <Box>
                            <TextField 
                              value={firstName} 
                              onChange={(e)=>setFirstName(e.target.value)} 
                              size='small' style={{marginTop: '4px'}} 
                              fullWidth/>
                          </Box>
                    }
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <Typography variant='body3'>Last Name</Typography>
                    {
                      isViewMode 
                        ? <Typography variant='body2' marginTop={'4px'}>{user.lastName}</Typography>
                        : <Box>
                            <TextField 
                              value={lastName} 
                              onChange={(e)=>setLastName(e.target.value)} 
                              size='small' 
                              style={{marginTop: '4px'}} 
                              fullWidth/>
                          </Box>
                    }
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <Typography variant='body3'>Country/Region</Typography>
                    {
                      isViewMode 
                        ? <Typography variant='body2' marginTop={'4px'}>{user.lastName}</Typography>
                        : <Box>
                            <TextField 
                              value={countryCode} 
                              onChange={(e)=>setCountryCode(e.target.value)} 
                              size='small' 
                              style={{marginTop: '4px'}} 
                              fullWidth/>
                          </Box>
                    }
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <Typography variant='body3'>Language</Typography>
                    {
                      isViewMode 
                        ? <Typography variant='body2' marginTop={'4px'}>{user.locale}</Typography>
                        : <Box>
                            <TextField 
                              value={locale} 
                              onChange={(e)=>setLocale(e.target.value)} 
                              size='small' 
                              style={{marginTop: '4px'}} 
                              fullWidth/>
                          </Box>
                    }
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <Typography variant='body3'>Date Format</Typography>
                    {
                      isViewMode 
                        ? <Typography variant='body2' marginTop={'4px'}>{user.dateFormat}</Typography>
                        : <Box>
                            <TextField 
                              value={dateFormat} 
                              onChange={(e)=>setDateFormat(e.target.value)} 
                              size='small' 
                              style={{marginTop: '4px'}} 
                              fullWidth/>
                          </Box>
                    }
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <Typography variant='body3'>Currency</Typography>
                    {
                      isViewMode 
                        ? <Typography variant='body2' marginTop={'4px'}>{user.defaultCurrency}</Typography>
                        : <Box>
                            <TextField 
                              value={currency} 
                              onChange={(e)=>setCurrency(e.target.value)} 
                              size='small' 
                              style={{marginTop: '4px'}} 
                              fullWidth/>
                          </Box>
                    }
                  </Box>
                </Grid>
               {
                !isViewMode && <Grid item xs={12}>
                  <Box>
                    <Button onClick={()=>setIsViewMode(true)} color='success' variant='contained' disableElevation style={{height: '40px', width: '80px', textTransform: 'none', marginRight: '20px'}}>Save</Button>
                    <Button onClick={()=>setIsViewMode(true)} variant='contained' disableElevation style={{height: '40px', width: '80px', textTransform: 'none', background: '#ccc6', color: '#333'}}>Cancel</Button>
                  </Box>
                </Grid>
               }
              </Grid>
            </Box>
          </Box>

          <Box sx={{
            background: '#fff',
            boxShadow: '0px 2px 30px #ccc6',
            marginTop: '24px',
            p: 3
          }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <Typography variant='h6'>My Email Address</Typography>
                <Typography variant='subtitle2'>You can use this email address to login to your account</Typography>
              </div>
              <Button variant='contained' disableElevation style={{height: '40px', width: '80px', textTransform: 'none'}}>Edit</Button>
            </Box>

            <Box sx={{marginTop: '36px', marginBottom: '18px'}}>
              <Grid container rowGap={4} columnGap={1}>
                <Grid item xs={12} md={7}>
                  <Box>
                    <Typography variant='body3'>Email Address</Typography>
                    <Typography variant='body2' marginTop={'4px'}>Dhana sekaran</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ) 
}

export default ProfilePage