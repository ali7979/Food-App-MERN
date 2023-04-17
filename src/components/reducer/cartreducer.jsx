
const cartreducer = (state,action) => {
  
  
  if(action.type ==='ADD')
  {
    let {id,image,category,name,description,price,qty}=action.payload;
    console.log(action.payload);
  
    let cartProduct;

cartProduct  ={
  id,
  name,
  category,
  image,
  description
  ,price,
  qty

};



  return {

    ...state,
    cart:[...state.cart,cartProduct],

  };
  
  }
  if(action.type ==='REMOVE')
{
  console.log(action.payload)
  let updatedcart=state.cart.filter((item)=>item.id!=action.payload);
  return{
    ...state,cart:updatedcart,
  }
}

  
  return state;
};


export default cartreducer;
