import React from 'react'
import { Card,Backdrop,Stack, CardContent, Typography, Button, Avatar,IconButton } from '@mui/material';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useCartContext } from './context/cartcontext';

const CartItems = ({id,name,image,qty,price}) => {
  
    const [qnty, setQty] = useState(qty);
        const [total, settotal] = useState(price*qty)
        const handleIncrement = () => {
            setQty(qnty + 1);
            settotal(price*(qnty + 1));
          };
          
          const handleDecrement = () => {
            if (qnty >= 1) {
              setQty(qnty - 1);
              settotal(price*(qnty - 1));
            }
          };

          const {handleRemoveItem} = useCartContext();

          const RItem = (id) => {
           console.log(id)
           
            handleRemoveItem(id);
          };
        
      
    

  return (
    <div>
       <Card sx={{ height:'140px' , boxShadow: 2,my:2,padding:0.5 }}>
  <CardContent>
    <Grid container alignItems="center">
      <Grid xs={2} >
        <img style={{height:'100px',width:'100px',borderRadius:'50px'}} src={image}/>
      </Grid>
      <Grid xs={10} Spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ letterSpacing:'2px', fontFamily:"'M PLUS Rounded 1c', sans-serif",ml: 1.5, flexGrow: 1 }}>
            {name}
          </Typography>
          
         <Button onClick={()=>RItem(id)}><DeleteOutlineIcon sx={{color:'red',ml: 2 }} /></Button> 
           
        </Box>
        <Grid container spacing={2} sx={{ flexGrow:2,float:'right' }}>
          <Grid item>
            <IconButton  aria-label="decrement" onClick={handleDecrement}>
              <RemoveIcon  />
            </IconButton>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="subtitle1"sx={{ fontFamily:"cursive"}}>{qnty}</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton aria-label="increment" onClick={handleIncrement}>
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
          <Typography sx={{ flexGrow: 2, fontFamily:"'M PLUS Rounded 1c', sans-serif", mt: 1.5, textAlign: 'right' }} variant="h5">
           SubTotal: ₹ {total}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </CardContent>
</Card>
    </div>
  )
}

export default CartItems
