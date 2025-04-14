// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  background: #ffffffcc;
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #111;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 640px) {
    gap: 1rem;
    font-size: 0.9rem;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #111;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }

  &.active {
    font-weight: 700;
    color: #000;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavInner>
        <LogoLink to="/">My Portfolio</LogoLink>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavLinks>
      </NavInner>
    </Nav>
  );
}




