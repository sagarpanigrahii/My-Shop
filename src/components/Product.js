import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  margin: 1rem;
  padding: 1rem;
  width: 200px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const Product = ({ product }) => {
  return (
    <ProductCard>
      <ProductImage src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </ProductCard>
  );
};

export default Product;
