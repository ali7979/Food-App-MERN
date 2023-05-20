import './App.css';
import React,{createContext,useState} from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Login from './scenes/Login';
import Menu from './scenes/Menu';
import Signup from './scenes/Signup';
import Home from './scenes/Home';
import Searchbar from './components/Searchbar';
import Offers from './scenes/Offers';
import Mycart from './scenes/Mycart';
import { CartProvider } from './components/context/cartcontext';

export const ThemeContext=createContext()



function App() {

const [theme,settheme]=useState(false)




  return (
    <>
    <CartProvider>
<ThemeContext.Provider value={{ theme, settheme }}>

      <Routes>
        <Route path="/" element={ <Home/> } />
        
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/search" element={ <Searchbar/> } />
        <Route path="/menu" element={ <Menu/> } />
        <Route path="/order" element={ <Menu/> } />
        <Route path="/mycart" element={ <Mycart/> } />

        <Route path="/offer" element={ <Offers/> } />

      </Routes>
      </ThemeContext.Provider>
      </CartProvider>
    </>
  );
}

export default App;
