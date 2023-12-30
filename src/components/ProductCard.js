import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/ProductAction';


function ProductCard(props) {
    const product=props.product
    const dispatch=useDispatch();
    // console.log(product)
    const navigate= useNavigate();

    const onAddToCart = (product) =>{
      product.qty=1;
      dispatch(addToCart(product));
      console.log("productqty",product.qty)
      alert("Item added to Cart")
    }
    

  return (
    <>
     <div style={{ marginBottom: "50px" }} className="shadowcard" >
        <Card
          key={product.id}
          className="card h-100 text-center p-3 m-2"
          style={{ width: "18rem" }}
          onClick={()=>navigate("/products/"+product.id)}
          
        >
          <Card.Img
            variant="top"
            className="cardimg"
            src={product.image}
            height250px
          />
          <Card.Body className="card-body">
            <div className=" text-center cardtxt">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="card-text lead fw-bold">
                {product.price}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <div className="addcartbtn" >
       <Button className="btn btn-outline-warning " onClick={()=>{onAddToCart(product)}} >  
           Add to Cart
        </Button>
      </div>
      </div>
  
    </>
  )
}

export default ProductCard