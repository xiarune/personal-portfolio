// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/background-home-2.jpg';

const HomeWrapper = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  max-width: 700px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Overlay />
      <Content>
        <Title>Welcome to My Portfolio</Title>
        <Paragraph>
          I’m Caroline — a digital creative blending logic, storytelling, and code.
          Explore my work, learn more about me, or get in touch.
        </Paragraph>
      </Content>
    </HomeWrapper>
  );
}


