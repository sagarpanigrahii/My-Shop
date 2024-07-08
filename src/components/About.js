import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 40px;
`;

const TeamSection = styled.div`
  margin-top: 40px;
`;

const TeamTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TeamMember = styled.li`
  margin: 10px 0;
  font-size: 1.1em;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Description>
        Welcome to MY SHOP! We are a passionate team dedicated to bringing you the best products. 
        Our mission is to provide high-quality items that inspire creativity and individuality.
        We believe in the power of originality and strive to offer products that reflect that belief.
      </Description>
      <TeamSection>
        <TeamTitle>Our Team</TeamTitle>
        <TeamList>
          <TeamMember>Sagar Panigrahi - Founder & CEO</TeamMember>
          <TeamMember>Amit - Chief Marketing Officer</TeamMember>
          <TeamMember>Sagar Panigrahi - Lead Developer</TeamMember>
          <TeamMember>Nobita - Product Designer</TeamMember>
        </TeamList>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;
