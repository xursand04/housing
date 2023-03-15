import { Box, Typography } from "@mui/material"
import { ReactComponent as Location  } from "../assets/icons/locaton.svg"
import { ReactComponent as Phone  } from "../assets/icons/phone.svg"
import { ReactComponent as Email  } from "../assets/icons/email.svg"
import { ReactComponent as Social  } from "../assets/icons/social.svg"
import '../css/style.css'




const Footer = () => {
    return(
        <>
        <center>
        <Box sx={{background:'#0D263B',color:'#fff',padding:'150px 100px',display:'flex',justifyContent:'space-between'}}>
            <Box className="footer-info1" >
                <Typography variant="h4">Contact Us</Typography>
                <Box sx={{display:"flex" , alignItems:'center',margin:'40px 0'}}>
                    <Location/>
                    <Typography sx={{marginLeft:'20px'}}>329 Queensberry Street, <br/> North Melbourne VIC 3051, Australia.</Typography>
                </Box>
                <Box sx={{display:"flex" , alignItems:'center',margin:'40px 0'}}>
                    <Phone/>
                    <Typography sx={{marginLeft:'20px'}}>123 456 7890</Typography>
                </Box>
                <Box sx={{display:"flex" , alignItems:'center',margin:'40px 0'}}>
                    <Email/>
                    <Typography sx={{marginLeft:'20px'}}>support@houzing.com</Typography>
                </Box>
                <Box>
                    <Social/>
                </Box>
            </Box>
            <Box className="footer-info2" >
                <Typography variant="h4">Discover</Typography>
                <Typography sx={{marginTop:'40px'}} >Chicago</Typography>
                <Typography sx={{marginTop:'40px'}} >Los Angeles</Typography>
                <Typography sx={{marginTop:'40px'}} >Miami</Typography>
                <Typography sx={{marginTop:'40px'}} >New York</Typography>
            </Box>
            <Box className="footer-info3" >
                <Typography variant="h4">Lists by Category</Typography>
                <Typography sx={{marginTop:'40px'}} >Apartments</Typography>
                <Typography sx={{marginTop:'40px'}} >Condos</Typography>
                <Typography sx={{marginTop:'40px'}} >Houses</Typography>
                <Typography sx={{marginTop:'40px'}} >Offices</Typography>
            </Box>
            <Box className="footer-info4" >
                <Typography variant="h4">Lists by Category</Typography>
                <Typography sx={{marginTop:'40px'}} >About Us</Typography>
                <Typography sx={{marginTop:'40px'}} >Terms & Conditions</Typography>
                <Typography sx={{marginTop:'40px'}} >Support Center</Typography>
                <Typography sx={{marginTop:'40px'}} >Contact Us</Typography>
        </Box>
            </Box>
            </center>
        </>
    )
}
export default Footer