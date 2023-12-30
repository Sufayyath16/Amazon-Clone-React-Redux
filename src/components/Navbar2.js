
import React, { useContext } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Navbar2(props) {
    const navLinks= [
        {
            text:"Home",
            link:"/",
        },
        {
            text:"All",
            link:"/products",
        },
        {
            text:"Best Sellers",
            link:"/best-sellers",
        },
        {
            text:"Today's Deals",
            link:"/todays-deal",
        },
        {
            text:"Mobiles",
            link:"/products/mobiles",
        },
        {
            text:"Books",
            link:"/books",
        },
        {
            text:"Customer Service",
            link:"/customer-service",
        },
        {
            text:"Electronics",
            link:"/electronics",
        },
        {
            text:"Prime",
            link:"/prime",
        },
        {
            text:"Fashion",
            link:"/fashion",
        },
        {
            text:"New Releases",
            link:"/new-releases",
        },
    ];
    return (
        <>
          <div >
            
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home" className="nav">
                  
                </Navbar.Brand>
                <Nav className="me-auto ">
                  {navLinks.map((nav) => {
    
                    return (
                      <Nav.Link className="clr" href={nav.link}>
                        {nav.text}
                      </Nav.Link>
                    );
                  })}
                </Nav>
                <img className="navimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"/>
              </Container>
            </Navbar>
          </div>
        </>
      );
}

export default Navbar2