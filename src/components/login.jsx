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
      <Box className="login" sx={{padding:'200px 0'}}>
   <Box className="login-box" sx={{boxShadow:'0px 0px 10px',background:'#gray',width:'500px',padding:'20px',borderRadius:'20px',textAlign:'center',}}>
    <Typography variant='h4' sx={{color:'black',fontFamily:'monospace'}}>Sign in</Typography>
    <Box>
    <TextField  className="login-input" sx={{width:'300px',marginTop:'40px',color:'white'}} label='login' variant='standard'/>
    <TextField  className="login-input" sx={{width:'300px',marginTop:'20px'}} label='password' variant='standard'/>
    </Box>
    <Button  className="login-btn" variant='contained' sx={{margin:'40px',width:'300px',color:'black'}}>Login</Button>
    <Box sx={{marginTop:'20px',marginBottom:'20px'}}>
      <Button onClick={()=>navigate('/Register')}>
    <Link to={'/Register'} sx={{fontSize:'20px'}}>REGISTER</Link>
      </Button>
    </Box>
   </Box>
      </Box>
   </center>
   <Outlet/>
    </>
  )
}

export default Login