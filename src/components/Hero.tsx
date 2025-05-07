import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  background: linear-gradient(135deg, #2A2D3E 0%, #1F2235 100%);
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  flex: 1;
  color: #fff;
`;

const Greeting = styled.h3`
  color: #ff5722;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Role = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  
  span {
    color: #4CAF50;
    margin-right: 0.5rem;
  }
  
  .location {
    color: #9C27B0;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const AboutButton = styled(motion.button)`
  background: #ff5722;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImage = styled(motion.img)`
  max-width: 400px;
  border-radius: 30px;
  position: relative;
  z-index: 1;
`;

const ToolIcon = styled(motion.img)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <ContentWrapper>
        <TextContent>
          <Greeting>Hello, I'm</Greeting>
          <Name>Mandhoj Theeng</Name>
          <Role>
            <span>A Creative Designer</span>
            From <span className="location">Kathmandu</span>
          </Role>
          <Description>
            I'm creative designer based in Kathmandu, and I'm very passionate and
            dedicated to my work.
          </Description>
          <AboutButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </AboutButton>
          <SocialLinks>
            <SocialIcon href="#" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <i className="fab fa-behance"></i>
            </SocialIcon>
          </SocialLinks>
        </TextContent>
        <ImageSection>
          <ProfileImage
            src="/profile.jpg"
            alt="James Smith"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <ToolIcon
            src="/ai-icon.png"
            alt="Adobe Illustrator"
            style={{ top: '10%', right: '20%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          />
          <ToolIcon
            src="/ps-icon.png"
            alt="Adobe Photoshop"
            style={{ bottom: '20%', right: '10%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <ToolIcon
            src="/figma-icon.png"
            alt="Figma"
            style={{ bottom: '30%', left: '10%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          />
        </ImageSection>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero; 