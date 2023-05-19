import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid';
import Corousel from '../components/Corousel';
import SearchIcon from '@mui/icons-material/Search';
import Searchbar from '../components/Searchbar';
import ScrolltoTop from '../components/ScrolltoTop';
import logo from '../images/Logo.svg'
import axios from 'axios';


export default function Menu() {


const [fooditem,setfooditem]=useState([])
const [query, setquery] = useState("")

const loaddata=async()=>{

    const response = axios.get("https://food-app-mern-backend.vercel.app/api/fetch");
    console.log(response);
    setfooditem(response)
}

useEffect(()=>{
    loaddata()
},[])



  return (
    <div>

    <Navbar/>
    
    <div>
    {/* <Corousel/> */}
    </div>
      
   

<div className='br'>
<div className="search-box">
    <button className="btn-search"><SearchIcon/></button>
    <input onChange={(e)=> setquery(e.target.value)}   type="text" className="input-search" placeholder="Type to Search..."/>
  </div>
</div>




    
    <div className="container">
    <div className="sidebar">
    <img src={logo} alt="ZB Foods logo" style={{filter: 'invert(1)', width: '10rem',marginBottom:'-3.5rem'}} />

   <h1>ZB Foods</h1>

   <a href="">Home</a>
   
  

  
   <a href="">Portfolio</a>
   <a href="">Gallery</a>
   <a href="">Service</a>
   <a href="">Join</a>
   <a href="">Contact</a>
  </div>
  <ScrolltoTop/>

    
        {fooditem.length !== 0 ? (
          <Grid container sx={{mt:10}}spacing={1}>

            {fooditem
            .filter((item)=>{
            
              return query.toLowerCase()==""? item : item.name.toLowerCase().includes(query)
            })
            .map((data) => (
              <Grid item xs={12} md={4} lg={4}     key={data._id} >
                <Cards
                   key={data._id}
                   id={data._id}
                  name={data.name}
                  category={data.category}
                  description={data.description}
                  image={data.image}
                  price={data.price}
              
                  
                />
              </Grid>
            ))}
          </Grid>
        ) : ""
    }
     
      
    </div>
    </div>
  )
}
