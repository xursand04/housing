import { Box, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const ToogleMenu = () => {
    const navigate = useNavigate()
  return (
    <Box className="burgerMenu" sx={{position:'absolute',zIndex:'999',right:'0',width:"350px",background:'#gray',color:'white',
    textAlign:'center',justifyContent:'center',height:'100vh',display:{xs:'block',md:'none'}}}>
        <Box sx={{marginTop:"150px"}}>
    <NavLink style={{textDecoration:"none", color:'#000'}} to={'/'}>Home</NavLink><br/>
    <NavLink style={{textDecoration:"none", color:'#000' }} to={'/Properties'}>Properties</NavLink><br/>
    <NavLink style={{textDecoration:"none", color:'#000'}} to={'/Products'}>Products</NavLink><br/>
    <Button sx={{marginTop:'30px'}} variant='contained'onClick={()=>navigate('/Login',)}>Sign in</Button>
        </Box>
    
    
    </Box>
  )
}

export default ToogleMenu