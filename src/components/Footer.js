import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #f1f1f1;
  border-top: 1px solid #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 MY SHOP. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
