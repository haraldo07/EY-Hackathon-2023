// components/Navigation/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PodioLogo from '../components/PodioLogo.png'; 
import styled from 'styled-components';

const BrandLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

const BrandText = styled.span`
  font-weight: bold;
`;

const Navigation = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <StyledNavbar bg="light" expand="lg" collapseOnSelect>
      <BrandNavbarBrand onClick={handleLogoClick}>
        <BrandLogo src={PodioLogo} alt="PodioLogo" />
        <BrandText>Podio</BrandText>
      </BrandNavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <StyledNav className="mr-auto">
          <StyledNavLink href="/pages/features">Features</StyledNavLink>
          <StyledNavLink href="/pages/pricing">Pricing</StyledNavLink>
          <StyledNavLink href="/pages/usecases">Use Case</StyledNavLink>
          <StyledNavDropdown title="More" id="basic-nav-dropdown">
            <StyledDropdownItem href="/pages/support">Support</StyledDropdownItem>
            <StyledDropdownItem href="/pages/partners">Partners</StyledDropdownItem>
          </StyledNavDropdown>
        </StyledNav>
        <RightNav>
          <StyledNavLink href="/pages/login">Login</StyledNavLink>
          <StyledButton href="/pages/signup">Signup</StyledButton>
        </RightNav>
      </NavbarCollapse>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Navbar)`
  padding: 15px 0;
`;

const BrandNavbarBrand = styled(Navbar.Brand)`
  cursor: pointer;
`;

const NavbarToggle = styled(Navbar.Toggle)``;

const NavbarCollapse = styled(Navbar.Collapse)``;

const StyledNav = styled(Nav)``;

const StyledNavLink = styled(Nav.Link)`
  &.active,
  &:hover {
    color: #007bff;
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  & .dropdown-menu {
    background-color: #f8f9fa;
  }
`;

const StyledDropdownItem = styled(NavDropdown.Item)`
  color: #333;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

export default Navigation;
