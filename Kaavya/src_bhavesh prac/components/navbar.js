import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color:yellow;
    }
    .navbar-brand, .navbar-nav, .navbar-link{
        color:red;

        &.hover{
            color:white;
        }
    }
    .nav-item{
        color:black;
    }
    .nav-link:h
    .dropdown-item:hover{
        background-color:red;
    }
`;

function Navi() {
    return (
        <Styles>
            <Navbar >
                <Navbar.Brand href='/nextpage'>Company</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls='basic-navbr-nav'/> */}
                {/* <Navbar.Collapse> */}
                <Nav className='navi'>
                    <Nav.Item><Nav.Link href='/nextpage'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/nextpage/about'>About</Nav.Link></Nav.Item>
                    <NavDropdown title="contact" id="Dropdown">
                        <NavDropdown.Item  href='/'>Location</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>Phone</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.3'>Address</NavDropdown.Item>

                        {/* <Nav.Item><Nav.Link href='/nextpage/contact'>Contact</Nav.Link></Nav.Item> */}
                    </NavDropdown>

                </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        </Styles>
    )
}

export default Navi;
