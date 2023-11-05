import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import download from "./download.png";
const Styles=styled.div`
    .navbar{
        background-color:blue;
    }
    .navbar-nav,.navbar-link{
        color:yellow;
        
        &.hover{
            color:white;
        }
    }
    .nav-item{
        color:yellow;
    }
    .dropdown-item:hover{
        background-color:yellow;
    }

`;

function NavBar(){
    return(
        <div>
        <Styles>
            <Navbar>
                <Navbar.Brand>
                    <img src={download} width='20' height='30' />
                </Navbar.Brand>
                <Nav className='nav'>
                    <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                    <NavDropdown title="Contact" id='dropdown'>
                    <NavDropdown.Item href='/contact'>Contact</NavDropdown.Item>
                        <NavDropdown.Item href='/contact/address'>Location</NavDropdown.Item>
                        <NavDropdown.Item href='/contact/phone'>Phone</NavDropdown.Item>
                        <NavDropdown.Item href='/contact/emailid'>Emailid</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </Styles>
        </div>
    )
}

export default NavBar;