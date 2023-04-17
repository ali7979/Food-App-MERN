import React from 'react'
import SearchComponent from "react-material-ui-searchbar";
import { view } from '@risingstack/react-easy-state';
import LinearProgress from '@mui/material/LinearProgress';
export default function Searchbar() {
  return (
    <div class="search-box">
    <button class="btn-search"><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."/>
  </div>
  )
}
