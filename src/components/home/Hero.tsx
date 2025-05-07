import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  background: ${({ theme }) => theme.colors.backgroundGradient};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.name === 'dark'
      ? 'radial-gradient(circle at 20% 50%, rgba(76, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(76, 255, 0, 0.05) 0%, transparent 50%)'
      : 'radial-gradient(circle at 20% 50%, rgba(108, 108, 229, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 76, 96, 0.05) 0%, transparent 50%)'};
    top: 0;
    left: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  padding-right: 4rem;

  @media (max-width: 968px) {
    padding-right: 0;
  }
`;

const Greeting = styled(motion.h3)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const RoleWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.25rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const RoleText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
`;

const LocationText = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 500;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textLight};
`;

const AboutButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.primaryHover};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};
  background: ${({ theme }) => theme.colors.border};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ImageSection = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 968px) {
    margin-bottom: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 450px;
  height: 450px;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  position: relative;
  z-index: 1;
`;

const ImageMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/mask-bg.png') no-repeat center/contain;
  z-index: 2;
`;

const FloatingIcon = styled(motion.div)<{ top?: string; left?: string; right?: string; bottom?: string }>`
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.cardBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.card};
  z-index: 3;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};

  img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <ContentWrapper>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </Greeting>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mandhoj
          </Name>
          <RoleWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RoleText>A Creative Designer</RoleText>
            From <LocationText>Kathmandu</LocationText>
          </RoleWrapper>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm creative designer based in Kathmandu, and I'm very passionate and
            dedicated to my work.
          </Description>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <AboutButton
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              About Me
            </AboutButton>
          </motion.div>
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <SocialIcon href="#" target="_blank">
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
          </SocialLinks>
        </TextContent>
        <ImageSection
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ImageWrapper>
            <ProfileImage src="/images/profile.jpg" alt="Profile" />
            <ImageMask />
            <FloatingIcon top="10%" left="10%">
              <img src="/icons/react.svg" alt="React" />
            </FloatingIcon>
            <FloatingIcon top="20%" right="15%">
              <img src="/icons/typescript.svg" alt="TypeScript" />
            </FloatingIcon>
            <FloatingIcon bottom="15%" left="15%">
              <img src="/icons/nodejs.svg" alt="Node.js" />
            </FloatingIcon>
          </ImageWrapper>
        </ImageSection>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero; 