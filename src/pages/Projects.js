// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import backgroundProjects from '../assets/images/background-projects.jpg';

// Project images
import quizImg from '../assets/images/projects/quiz-app.png';
import filmImg from '../assets/images/projects/film.png'; //
import animImg from '../assets/images/projects/animation.png'; //
import novaImg from '../assets/images/projects/nova.png'; //
import litImg from '../assets/images/projects/literature.png'; //
import portImg from '../assets/images/projects/portfolio.png';

const Wrapper = styled.section`
  background-image: url(${backgroundProjects});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  color: #eee;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Card = styled.div`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 240px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  margin-top: 0;
  font-size: 1.2rem;
`;

const ProjectDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;
`;

const ProjectImage = styled.img`
  margin-top: 1rem;
  width: 160px;
  height: auto;
  object-fit: contain;
  align-self: center;
`;

export default function Projects() {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal site to showcase my work and background.',
      image: portImg,
    },
    {
      title: 'Interactive Quiz App',
      description: 'Built in React Native with multiple question types.',
      link: 'https://github.com/xiarune/quiz-app.git',
      image: quizImg,
    },
    {
      title: 'Film Showcase',
      description: 'Short and feature length films.',
      link: 'https://xiarune.github.io/clark-studio-films/',
      image: filmImg,
    },
    {
      title: 'Animation',
      description: 'Animations ranging from stop motion to 2D.',
      link: 'https://youtu.be/yKsEm43xkSY?si=ebJelJzVLHPlP1OJ',
      image: animImg,
    },
    {
      title: 'UI Design with Figma: NOVA',
      description: 'Custom-built Figma prototype for a mobile application.',
      link: 'https://www.figma.com/proto/pvEbgihg6WgiIZUZietXkV/Nova?node-id=77-146&t=fGSTFnieci0WZUDY-1',
      image: novaImg,
    },
    {
      title: 'Literature',
      description: 'Lore-based driven storytelling with poetic prose.',
      link: 'https://xiarune.github.io/finding-celestia/',
      image: litImg,
    },
  ];

  return (
    <Wrapper>
      <Overlay />
      <Content>
        <Title>My Projects</Title>
        <Description>Here are some of the things I’ve built recently.</Description>
        <Grid>
          {projectData.map((project, index) => {
            const isExternal = project.link?.startsWith('http');

            const cardContent = (
              <Card>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.image && <ProjectImage src={project.image} alt={project.title} />}
              </Card>
            );

            return project.link ? (
              <CardLink
                key={index}
                href={project.link}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {cardContent}
              </CardLink>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </Grid>
      </Content>
    </Wrapper>
  );
}







  