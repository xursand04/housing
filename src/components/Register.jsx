import { Box, Button, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"



const Register = () => {
    const navigate = useNavigate()
    return(
        <>
        <center>
            <Box className="register" sx={{padding:'80px 0'}}>
        <Box className="register-box" sx={{width:'600px',
        height:"fit-content",
        color:'black',
        padding:'40px 10px',
        textAlign:'center',
        borderRadius:'30px'}}>
            <Typography variant="h4">Registration</Typography>
        <TextField sx={{width:'520px',marginTop:'40px',}} label="Login" variant="standard" />
        <TextField sx={{width:'520px',marginTop:'40px'}} label="First name" variant="standard" />
        <TextField sx={{width:'520px',marginTop:'40px'}} label="Last name" variant="standard" />
        <TextField sx={{width:'520px',marginTop:'40px'}} label="Email" variant="standard" />
        <TextField sx={{width:'520px',marginTop:'40px'}} label="Password" variant="standard" />
            <Button variant="contained" sx={{width:'520px',marginTop:'40px',color:'black'}}>Register</Button>

        <Button sx={{marginTop:'60px',marginLeft:'80%',color:"blue"}} variant="text" onClick={()=>navigate(-1)}>go back</Button>
        </Box>
            </Box>
            </center>
        </>
    )
}
export default Register