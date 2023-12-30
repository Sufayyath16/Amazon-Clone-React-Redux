import React, {  useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import './WishList.css'


export default function WishList() {
 
    const[wishData,setWishData]=useState();
    const dispatch=useDispatch();
    const{wishList}=useSelector((state)=>{
        console.log(state)
        return state.carts;
        
    })

    useEffect(()=>{
      console.log("wishlist",wishList);
        setWishData(wishList);
    },[wishList])
    console.log("wishdata",wishData)
  return (
  <>
  
    <div>
        <span style={{fontWeight:"bold",fontSize:"2rem"}}>WhishList</span>
      {wishData?.map((product) => {
        return (
          
          <div key={product.id} className="cart-box">
            
            <div className="cart-img">
              <img src={product.image} />
              <div className="d-flex flex-column">
              <p>{product.title}</p>
              Price:<p>{product.price}</p>
             
              </div>
            </div>
            
            <div>
              <Button className="removebtn" onClick={()=>{dispatch({type:"REMOVE_FROM_WISHLIST",payload:product})}} >
                Remove-from-WishList
              </Button>
            </div>
          </div>
        );
      })}
      
    </div>
    </>
  );
}