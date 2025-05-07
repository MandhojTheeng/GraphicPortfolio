import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem 4rem 5rem 4rem;
  background: ${({ theme }) => theme.colors.backgroundGradient};
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
  position: relative;
  z-index: 1;
  gap: 3rem;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MaskedImageWrapper = styled.div`
  position: relative;
  width: 450px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 320px;
    height: 350px;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const MaskedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Remove mask-image if not needed, or use a proper mask image */
  /* -webkit-mask-image: url('/path/to/mask.png'); */
  /* mask-image: url('/path/to/mask.png'); */
  /* -webkit-mask-size: cover; */
  /* mask-size: cover; */
  /* -webkit-mask-repeat: no-repeat; */
  /* mask-repeat: no-repeat; */
  /* -webkit-mask-position: center; */
  /* mask-position: center; */
`;

const StatCard = styled.div<{ top?: string; left?: string; right?: string; bottom?: string }>`
  position: absolute;
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  padding: 1.5rem 2.5rem 1.5rem 2rem;
  display: flex;
  align-items: center;
  min-width: 180px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  z-index: 2;
  margin: 0.5rem;

  @media (max-width: 768px) {
    min-width: 120px;
    padding: 1rem 1.5rem 1rem 1rem;
    margin: 0.25rem;
  }
`;

const StatNumber = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  color: #3ed16f;
  margin-right: 1rem;
`;

const StatNumberPurple = styled(StatNumber)`
  color: #7b61ff;
`;

const StatText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  font-weight: 400;
`;

const AboutContent = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
  }
`;

const Subtitle = styled.h3`
  color: ${({ theme }) =>
    theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;
  margin-bottom: 2.5rem;
  max-width: 500px;
  line-height: 1.7;
`;

const HireButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.button.text};
  border: none;
  padding: 0.9rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.button.hover};
    transform: translateY(-3px);
  }
`;

const About = () => (
  <AboutSection id="about">
    <ContentWrapper>
      <ImageArea>
        <MaskedImageWrapper>
          <MaskedImage src="/images/about.jpg" alt="About" />
          <StatCard top="10%" left="-15%">
            <StatNumber>18</StatNumber>
            <StatText>Years of<br />Success</StatText>
          </StatCard>
          <StatCard bottom="10%" right="-15%">
            <StatNumberPurple>9K</StatNumberPurple>
            <StatText>Total<br />Projects</StatText>
          </StatCard>
        </MaskedImageWrapper>
      </ImageArea>
      <AboutContent>
        <Subtitle>I'm a Designer</Subtitle>
        <Title>I Can Design Anything<br />You Want</Title>
        <Description>
          Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
        </Description>
        <HireButton>Hire Me</HireButton>
      </AboutContent>
    </ContentWrapper>
  </AboutSection>
);

export default About;