import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Brand from "./Brand";
import Department from "./Department";
import Rating from "./Rating";

export default function Productfilter(props) {
  return (
    <>
      <div>
        <div className="col-lg-3">
          <Department />
          <Rating />
          <Brand />

          <b>Price</b>
          <p>Under &#x20b9;300</p>
          <p>&#x20b9;300-&#x20b9;500</p>
          <p>&#x20b9;500-&#x20b9;1000</p>
          <p>&#x20b9;1000-&#x20b9;1500</p>
          <p>Over &#x20b9;1500</p>
          <div className="d-flex">
            <Form.Control
              size="sm"
              type="text"
              placeholder="&#x20b9;Max"
              className="txt "
            ></Form.Control>
            <Form.Control
              size="sm"
              type="text"
              placeholder="&#x20b9;Min"
              className="txt"
            ></Form.Control>
            <Button variant="outline-dark" className="btn">
              Go
            </Button>
          </div>

          <div>
            <b>Size</b>
            <div className="d-flex">
              <button varient="outline-light" className="btn mb-4 sizebtn">
                XS
              </button>
              <button varient="outline-light" className="btn mb-4 sizebtn">
                S
              </button>
              <button varient="outline-light" className="btn mb-4 sizebtn">
                L
              </button>
              <button varient="outline-dark" className="btn mb-4 sizebtn">
                XL
              </button>
              <button varient="outline-dark" className="btn mb-4 sizebtn">
                2XL
              </button>
              <button varient="outline-light" className="btn mb-4 sizebtn">
                3XL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}