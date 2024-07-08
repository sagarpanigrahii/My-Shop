import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #555;
    }
  }
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    width: 100%;
  }
`;

const Navbar = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Nav>
      <Logo>
        <Link to="/">MY SHOP</Link>
      </Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </NavLinks>
      <SearchBar
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />
    </Nav>
  );
};

export default Navbar;
