import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/style.css'

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
    <center>
   <Box className="login" sx={{boxShadow:'0px 0px 10px',width:'500px',padding:'20px',borderRadius:'20px',margin:'150px 0',textAlign:'center'}}>
    <Typography variant='h4' sx={{color:'#0D263B',fontFamily:'monospace'}}>Sign in</Typography>
    <Box>
    <TextField  className="login-input" sx={{width:'300px',marginTop:'40px'}} label='login' variant='standard'/>
    <TextField  className="login-input" sx={{width:'300px',marginTop:'20px'}} label='password' variant='standard'/>
    </Box>
    <Button  className="login-btn" variant='contained' sx={{margin:'40px',width:'300px'}}>Login</Button>
    <Box sx={{marginTop:'20px',marginBottom:'20px'}}>
      <Button onClick={()=>navigate('/Register')}>
    <Link to={'/Register'} sx={{fontSize:'20px'}}>REGISTER</Link>
      </Button>
    </Box>
   </Box>
   </center>
   <Outlet/>
    </>
  )
}

export default Login