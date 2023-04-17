import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../App';





function Login() {
  


  const { theme, settheme } = useContext(ThemeContext);
  const darkTheme = createTheme({
    palette: {
      mode: !theme?"light" : "dark"
    }
  });



  let navigate=useNavigate();

    const handleSubmit = async(event) => {


         event.preventDefault();
        const data = new FormData(event.currentTarget);
        const password=data.get('password')
         const email=data.get('email')
        
        
        const res= await fetch("http://localhost:5000/api/loginuser",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"email":email,"password":password})
        });
        const json=await res.json()

        if(!json.success)
        {
          alert("Enter Valid Credentials");

        }
        if(json.success)
        {
           
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate("/");
        }
    };





  return (
    <>
    <Navbar />
    <div>
      <ThemeProvider theme={darkTheme}>
      <Container  component="main" maxWidth="xs">
   
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor:'var(--l3)'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{fontFamily:"'M PLUS Rounded 1c', sans-serif"}} component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}   >
             
              
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "30px",
                    },
                  }}
                  
                />
              </Grid>
              <Grid item xs={12}  >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "30px",
                    },
                  }}
                 
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor:'var(--l3)',fontFamily:"'M PLUS Rounded 1c', sans-serif" }}
            >
                Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item >
                <Link href="/Signup" sx={{fontFamily:"'M PLUS Rounded 1c', sans-serif"}} variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </div>
    </>
  )
}
export default Login;