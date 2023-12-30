import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Navbar.css";
import Searchbar from "./Searchbar";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { Badge } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Navbar1() {
  const navigate=useNavigate();
  const {cartList,wishList}=useSelector((state)=>{
    return state.carts;
  })
    
    
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex ">
              <img
                alt=""
                src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?fit=636%2C193&ssl=1"
                width="30"
                height="30"
                className="d-inline-block align-top iconimg"
              />
            </div>
          </Navbar.Brand>

          <Navbar.Text className="text-white navtop">
            Hello <br />
            <HiOutlineLocationMarker/>
            Select your adress
          </Navbar.Text>
          <Searchbar />
          <div className="drop">
            <DropdownButton
              id="dropdown-basic-button"
              variant="dark"
              title={
                <img
                  src="https://icon-library.com/images/india-flag-icon/india-flag-icon-13.jpg"
                  width="35px"
                  height="25px"
                  margin-left="-8px"
                  className="d-inline-block align-top "
                  alt="National logo"
                />
              }
            >
              <Dropdown.Item href="#/action-1">
                हिन्दी - HI - अनुवाद
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                தமிழ் - TA - மொழிபெயர்ப்பு
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                తెలుగు - TE - అనువాదం
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                ಕನ್ನಡ - KN - ಭಾಷಾಂತರ
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                മലയാളം - ML - വിവർത്തനം
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                বাংলা - BN - অনুবাদ
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                मराठी - MR - भाषांतर
              </Dropdown.Item>
            </DropdownButton>
          </div>

          <Navbar.Text className="text-white">
            Hello, signin <br />
            Accounts & Lists
          </Navbar.Text>
          <Navbar.Text className="text-white">Returns<br/> & Orders</Navbar.Text>
          {/* <Button style={{width:150}} onClick={()=>navigate("/wishlist")}> */}
          <div className="d-flex flex-column">
              <Badge onClick={()=>navigate('/wishlist')}>
                WishList {wishList.length}  
              </Badge>
            </div>
          <Nav style={{ marginRight: -35 }}>
            <Dropdown alignright>
              <Dropdown.Toggle
                variant="success"
                style={{ width: "Auto" }}
                onClick={()=>navigate('/cart')}
                
              >
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cartList?.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
            }

   

    
  

export default Navbar1