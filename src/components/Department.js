import React from "react";
import { setDepartment } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

export default function Department() {
  const dispatch = useDispatch()
  const {productList}=useSelector((state)=>{
    return state.products
  })

  const onDeptClick = (event)=>{
    dispatch(setDepartment(event));
  };
  
  
  

  
  return (
    <>
      <div style={{ marginleft: "50px" }}>
        <b style={{paddingleft:"30px"}}>Department</b>
        <br />
        <div >
          <button
            className="btn btn-link dept"
            onClick={()=>{
              onDeptClick("men's clothing")
            }}
            
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-link dept"
            onClick={()=>{
              onDeptClick("women's clothing")
            }}

           
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-link dept"
            onClick={()=>{
              onDeptClick("jewelery");

            }}
           
          >
            Jewellery
          </button>
          <button
            className="btn btn-link dept"
            onClick={()=>{
              onDeptClick("electronics");
            }}
            
          >
            Electronics
          </button>
        </div>
      </div>
    </>
  );

 
}