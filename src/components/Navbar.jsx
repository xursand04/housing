import { Box, Button, Link } from "@mui/material"
import { NavLink } from "react-router-dom"
import { ReactComponent as Logo } from "../assets/icons/logo.svg"
import { useNavigate } from "react-router-dom"
import SearchTitle from "./searchTitle"
import { useLocation } from "react-router-dom"



const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return(
        <>
            <Box sx={{background:'#0D263B',
            color:'#ffff',
            height:'40px',
            alignItems:'center',
            padding:'12px',
            display:'flex',
            justifyContent:'space-around',
            position:'fixed',
            width:'100%' ,
            top:'0',
            left:"0",
            zIndex:'999',
            margin:"0"}}>
                <Logo />
                <Box>
                <NavLink to='/' style={{color:'white',marginLeft:'40px'}}>home</NavLink>
                <NavLink to='/Properties' style={{color:'white',marginLeft:'40px'}}>Properties</NavLink>
                <NavLink to='/Contact' style={{color:'white',marginLeft:'40px'}}>Contacts</NavLink>
                </Box>
                <Box>
                    <Button variant="outlined" sx={{border:'1px solid white'}} onClick={()=>navigate('/Login')}>
                        <Link sx={{color:'white',textDecoration:'none'}} to='/Login'>Sign in</Link>
                    </Button>
                </Box>
            </Box>
            <Box>
            {location.pathname === '/' && <SearchTitle/> }
            </Box>
        </>
    )
}
export default Navbar