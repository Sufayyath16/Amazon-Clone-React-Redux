import React, { useState,useEffect } from 'react'
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../actions/ProductAction';


function Products() {
    const [productList1,setProductList1] =useState([]);
    const {productList,searchText,dept}=useSelector((state)=>{
      return state.products;
    })
    const dispatch=useDispatch();
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")?.then(async (response) => {
              const data = await response.json();
        // setProductList1(data)
        dispatch(setProducts(data));
        });
        },[])

        useEffect(()=>{
          setProductList1(productList);
        },[productList]);

        useEffect(()=>{
          if (searchText){
            const filteredProds= productList?.filter((p)=>{
              return p.title?.toLowerCase().indexOf(searchText?.toLowerCase()) > -1;
            })
            setProductList1(filteredProds)
          }
        },[searchText]);

        useEffect(()=>{
          if(dept){
            const filteredDept = productList?.filter((d)=>{
              return d.category === dept;
            });
            setProductList1(filteredDept);
          }
        },[dept]);
        console.log(productList1)

       
        
  return (
    <div className='d-flex flex-wrap'>
       {productList1.map((p)=>{
return<ProductCard product ={p}/>
})}

    </div>
  )
}

export default Products