import { useReducer } from "react";
import reducer from "../reducer/cartreducer"
const { createContext,useContext} = require("react");

const CartContext=createContext();

const initialstate={
    cart:[],
    totalItem:"",
    totalamount:""

};
const CartProvider=({children})=>
{

    const [state,dispatch]=useReducer(reducer,initialstate);

    const addToCart=(id,image,category,name,description,price,qty)=>{
        dispatch({ type:"ADD",payload:{id,image,category,name,description,price,qty}})
    };
    
    const handleRemoveItem=(itemID)=>{
        dispatch({type:"REMOVE",payload:itemID})
    }

    return (<CartContext.Provider value={{...state,addToCart,handleRemoveItem}}>{children}</CartContext.Provider>);
};
const useCartContext=()=>{
    return  useContext(CartContext);
}

export {CartProvider,useCartContext};
