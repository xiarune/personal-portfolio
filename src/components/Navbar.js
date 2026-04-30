// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: #ffffffcc;
  backdrop-filter: blur(8px);
  position: fixed;
  z-index: 1000;
  transition: all 0.3s ease;

  ${({ $scrolled }) =>
    $scrolled
      ? `
    top: 0;
    left: 0;
    width: auto;
    height: 100vh;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  `
      : `
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  `}
`;

const NavInner = styled.div`
  transition: all 0.3s ease;

  ${({ $scrolled }) =>
    $scrolled
      ? `
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  `
      : `
    width: 100%;
    max-width: 1200px;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

const LogoLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: ${({ $scrolled }) => ($scrolled ? '1rem' : '1.5rem')};
  color: #111;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
  }
`;

const NavLinks = styled.div`
  display: flex;
  transition: all 0.3s ease;

  ${({ $scrolled }) =>
    $scrolled
      ? `
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
    align-items: center;
  `
      : `
    gap: 2rem;

    @media (max-width: 640px) {
      gap: 1rem;
      font-size: 0.9rem;
    }
  `}
`;

const StyledLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: ${({ $scrolled }) => ($scrolled ? '0.9rem' : '1rem')};
  color: #111;
  text-decoration: none;
  transition: color 0.3s ease, font-size 0.3s ease;

  &:hover {
    color: #555;
  }

  &.active {
    font-weight: 700;
    color: #000;
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <NavInner $scrolled={scrolled}>
        <LogoLink to="/" $scrolled={scrolled}>Caroline Clark</LogoLink>
        <NavLinks $scrolled={scrolled}>
          <StyledLink to="/" $scrolled={scrolled}>Home</StyledLink>
          <StyledLink to="/about" $scrolled={scrolled}>About</StyledLink>
          <StyledLink to="/projects" $scrolled={scrolled}>Projects</StyledLink>
          <StyledLink to="/contact" $scrolled={scrolled}>Contact</StyledLink>
        </NavLinks>
      </NavInner>
    </Nav>
  );
}




