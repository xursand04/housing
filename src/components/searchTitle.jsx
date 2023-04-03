import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const SearchTitle = () => {
  return (
    <Box sx={{display:'flex',alignItems:'center',marginTop:'10px',justifyContent:'space-between',marginBottom:'10px',padding:'0 130px'}}>
            <TextField sx={{width:'75%',borderRadius:'10px'}} label="Enter an address, neighborhood, city, or ZIP code" variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeOutlinedIcon />
                </InputAdornment>
              ),
            }}
            />
            <Button variant="outlined" sx={{padding:'15px 35px', marginLeft:'30px'}}> Advanced</Button>
            <Button variant="contained" sx={{padding:'15px 35px', marginLeft:'30px'}}> Search</Button>
            </Box>
  )
}

export default SearchTitle