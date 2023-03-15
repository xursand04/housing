import { Button, Container, TextField } from '@mui/material'
import React from 'react'

const SearchTitle = () => {
  return (
    <Container sx={{display:'flex',alignItems:'center',marginTop:'100px',justifyContent:'space-around'}}>
            <TextField sx={{width:'80%',borderRadius:'10px'}} label="Enter an address, neighborhood, city, or ZIP code" variant="outlined" />
            <Button variant="outlined" sx={{padding:'15px 35px', marginLeft:'30px'}}> Advanced</Button>
            <Button variant="contained" sx={{padding:'15px 35px', marginLeft:'30px'}}> Search</Button>
            </Container>
  )
}

export default SearchTitle