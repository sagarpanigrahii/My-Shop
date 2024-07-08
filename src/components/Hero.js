import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/hero-image-feature-img.jpg';

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${heroImage});
`;

const HeroContent = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>ALWAYS BE ORIGINAL</h1>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
