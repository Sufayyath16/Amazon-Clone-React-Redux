import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {FaSearch} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { setProdSearchText } from '../actions/ProductAction';


export default function Searchbar() {
  const dispatch=useDispatch();

  const onSearchTextChange=(event)=>{
    dispatch(setProdSearchText(event.target.value))
  }

  
   return (
    <div className='searchtext'>
      <InputGroup className="mb-3 ">
      <DropdownButton
            id="dropdown-basic-button"
            title="All"
            className="dropall"
          >
            <Dropdown.Item href="#/action-1">All Categories</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Amazon Devices</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Gift Cards</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Furnitures</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Beauty</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Jwellery</Dropdown.Item>
            <Dropdown.Item href="#/action-8">Apps & Games</Dropdown.Item>
            <Dropdown.Item href="#/action-9">Car & Motor Bikes</Dropdown.Item>
          </DropdownButton>
          <Form.Control type="text"  placeholder="Search..." onChange={onSearchTextChange}/>
          <Button
            className="searchtext-btn"
            type="submit"
          >
           <FaSearch/>
          </Button>
      </InputGroup>
    </div>
  )
}