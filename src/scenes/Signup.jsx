import * as React from 'react';
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
import { useContext } from 'react';





 function Signup() {

  const { theme, settheme } = useContext(ThemeContext);
  const darkTheme = createTheme({
    palette: {
      mode: theme?"dark" : "light"
    }
  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name=data.get('name')
    const location=data.get('location')
    const email=data.get('email')
    const password=data.get('password')
    
    
    const res= await fetch("http://localhost:5000/api/createuser",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"name":name,"location":location,"email":email,"password":password})
    });
    const responsedata=await res.json();
    console.log(responsedata)







  };

  return (
    <>
    <Navbar/>
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'var(--l3)' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{fontFamily:"'M PLUS Rounded 1c', sans-serif"}} component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "30px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                    dark
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  autoComplete="location"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "30px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item sx={{borderRadius:'30px'}} xs={12}>
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
             
              sx={{ 
                borderRadius: "10px",
              mt: 3, mb: 2 ,backgroundColor:'var(--l3)',fontFamily:"'M PLUS Rounded 1c', sans-serif"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item >
                <Link style={{color:'var(--l2)',fontFamily:"'M PLUS Rounded 1c', sans-serif"}}href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </>
  );
}
export default Signup;