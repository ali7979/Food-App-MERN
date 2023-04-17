import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import i1 from "../images/Untitled design (2).png"
import Navbar from '../components/Navbar'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '../App';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === theme ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function Home() {



  const { theme, settheme } = useContext(ThemeContext);
 
  const darkTheme = createTheme({
    palette: {
      mode: theme?"light" : "dark"
    }
  });


      return (
        <>
     
<Navbar/>
<ThemeProvider theme={darkTheme}>
<Grid container columnSpacing={{ xs: 1, sm: 2, md:3}}  >
  <Grid item xs={6.5} >
    <Item sx={{backgroundColor:'var(--l0)', boxShadow: 'none',ml:11, mt:8}}>
    
    <div className="heading">
      <h1>Good <span className='ylw'>Food</span> for Good <span className='yl'>Mood</span></h1>
      <p className="pp MuiTypography-root MuiTypography-body1 css-17kr6hk">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
      <NavLink to={"/menu"} style={{textDecoration: 'none'}}><Button className="btn" size="large" sx={{borderRadius:'20px',background:"#576CBC",fontFamily: "'M PLUS Rounded 1c', sans-serif" }} variant="contained" label="" endIcon={<FastfoodIcon/>}>
        Order Now
      </Button></NavLink>
    </div>
   
    
    
    </Item>
   
  </Grid>
  <Grid item xs={5.5}>
    <Item sx={{ backgroundColor:'var(--l0)',boxShadow: 'none',overflow:'hidden'}}><img style={{height:'580px',width:'700px',filter: 'brightness(var(--b))'}} src={i1}/></Item>
  </Grid>
</Grid>

</ThemeProvider>
        </>
      );
    }

  export default Home;