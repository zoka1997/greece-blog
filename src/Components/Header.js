import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Navbar, Nav, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
      <div className="container-fluid header-page-part">
        <Navbar collapseOnSelect expand="lg">
                 <Navbar.Brand href="#logoo"><Image className="logo-image-png" src="imagesss/logo-greece.png" alt="logo" /></Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto">
                        <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/place">
                        <Nav.Link>Places</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                        <Nav.Link>Contact us</Nav.Link>
                        </LinkContainer>
                 </Nav>

                 <Nav className="icons-group">
                    <FaFacebookSquare className="icons" color="darkblue" fontSize="25px" />
                    <FaInstagramSquare className="icons" color="darkblue" fontSize="25px" />
                    <FaLinkedin className="icons" color="darkblue" fontSize="25px" />
                 </Nav>
                 </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
  
  export default Header