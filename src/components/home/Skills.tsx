import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  padding: 6rem 4rem;
  background: ${({ theme }) => theme.colors.backgroundGradient};

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 4rem 2rem;
    gap: 3rem;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  display: block;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const SkillsContainer = styled.div`
  flex: 1;
  max-width: 600px;
`;

const SkillBar = styled.div`
  margin-bottom: 2rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const SkillPercentage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)<{ color: string }>`
  height: 100%;
  background: ${({ color }) => color};
  border-radius: 4px;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 500px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  mask-image: url('/mask-bg.png');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Skills = () => {
  const skills = [
    { name: 'Illustrator', percentage: 85, color: '#FF6B6B' },
    { name: 'Photoshop', percentage: 95, color: '#4ECDC4' },
    { name: 'Figma', percentage: 75, color: '#6C5CE7' }
  ];

  return (
    <SkillsSection>
      <ContentContainer>
        <Tag>Design is Life</Tag>
        <Title>
          I Develop Skills Regularly to Keep Me Update
        </Title>
        <Description>
          Most common methods for designing websites that work well on desktop is responsive and adaptive design
        </Description>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillBar key={skill.name}>
              <SkillInfo>
                <SkillName>{skill.name}</SkillName>
                <SkillPercentage>{skill.percentage}%</SkillPercentage>
              </SkillInfo>
              <ProgressBarContainer>
                <ProgressBar
                  color={skill.color}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </ProgressBarContainer>
            </SkillBar>
          ))}
        </SkillsContainer>
      </ContentContainer>
      <ImageContainer
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/images/skills.jpg" alt="Skills" />
      </ImageContainer>
    </SkillsSection>
  );
};

export default Skills; 