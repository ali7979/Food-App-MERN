import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Card,Backdrop,Stack, CardContent, Typography, Button, Avatar,IconButton } from '@mui/material';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useCartContext } from '../components/context/cartcontext';
import CartItems from '../components/CartItems';
const Mycart = () => {

const {cart} =useCartContext();
console.log(cart)


  
     

  



  return (
    <div style={{ margin: '0',
        padding: '0',background: 'linear-gradient(to bottom right, #E3F0FF, #FAFCFF)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
            <div className="Cart-Container">
             
                <div className="Header" style={{ backdropFilter: 'blur(5px)' }}>
            <h1 className="Heading">Shopping Cart</h1>
             <h3 className="Action">Remove all</h3>

            </div>

            {cart.length > 0 ? (
            <Box sx={{ flexGrow: 1,m:4  }}>
     
      <Grid container spacing={1} columns={12} >
     
      <Grid xs={12}sx={{ fontFamily:"cursive",maxHeight:350,overflow:'auto',mb:3}} >
        
      {cart.map((item) => {
       
  
       return <CartItems key={item.id}{...item}  />;
   
    

      
})}
        </Grid>
        <Grid xs={4} >
          <Link to='../' ><Button startIcon= {<ArrowBackIosIcon/>} ><h3>Back to Home </h3></Button></Link>
        </Grid>
        <Grid xs={8}>
          <hr></hr>
          <h1 style={{float:'right'}}>Total Cost: ₹1500</h1>
          </Grid>
      </Grid>
      
    </Box>):(<><Typography variant="h6" align="center">
            Your cart is empty
          </Typography>
          <Grid xs={4}>
          <Link to='../' ><Button startIcon= {<ArrowBackIosIcon/>} ><h3>Back to Home </h3></Button></Link>
        </Grid></>)}
            </div>
      
    </div>
  )
}

export default Mycart
