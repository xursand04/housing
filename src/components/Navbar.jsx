import { Box, Button, Link } from "@mui/material"
import { NavLink } from "react-router-dom"
import { ReactComponent as Logo } from "../assets/icons/logo.svg"
import { useNavigate } from "react-router-dom"
import SearchTitle from "./searchTitle"
import { useLocation } from "react-router-dom"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ToogleMenu from "./ToogleMenu"
import { useState } from 'react'



const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [showToogleMenu, setShowToogleMenu] = useState(false)
    return(
        <>
            <Box sx={{background:'#0D263B',
            color:'#ffff',
            height:'64px',
            alignItems:'center',
            padding:'20px 130px',
            display:'flex',
            justifyContent:'space-between',
            width:'100%' ,}}>
                <Logo />
                <Box sx={{display:{xs:"none",md:'flex'}}}>
                <NavLink to='/' style={{color:'white',textDecoration:'none'}}>Home</NavLink>
                <NavLink to='/Properties' style={{color:'white',marginLeft:'40px',textDecoration:'none'}}>Properties</NavLink>
                <NavLink to='/Products' style={{color:'white',marginLeft:'40px',textDecoration:'none'}}>Products</NavLink>
                </Box>
                <Box onClick={()=>setShowToogleMenu(!showToogleMenu)} sx={{display:{xs:'flex',md:'none'} ,cursor:'pointer'}}><MenuOutlinedIcon/></Box>
                <Box sx={{display:{xs:"none",md:'flex'}}}>
                    <Button variant="outlined" sx={{border:'1px solid white'}} onClick={()=>navigate('/Login',)}>
                        <Link sx={{color:'white',textDecoration:'none'}} to='/Login'>Sign in</Link>
                    </Button>
                </Box>
            </Box>
            { showToogleMenu &&  <ToogleMenu />}
            <Box>
            {location.pathname === '/' && <SearchTitle/> }
            </Box>
        </>
    )
}
export default Navbar