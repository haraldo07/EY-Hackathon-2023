import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation(){
    return(
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ashvanth.S</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/essays">Essay</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">Summa da</Nav.Link></Nav.Item>
        </Nav>
    </Navbar>
    <br />
    </>
    );
}

export default Navigation;