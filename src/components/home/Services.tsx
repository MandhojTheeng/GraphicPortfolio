import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-width: 300px;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      icon: '/icons/pixel-perfect.svg',
      title: 'Pixel Perfect',
      description: 'Most common methods for designing websites that work well on desktop is responsive and adaptive design.'
    },
    {
      icon: '/icons/high-quality.svg',
      title: 'High Quality',
      description: 'Most common methods for designing websites that work well on desktop is responsive and adaptive design.'
    },
    {
      icon: '/icons/awesome-ideas.svg',
      title: 'Awesome Ideas',
      description: 'Most common methods for designing websites that work well on desktop is responsive and adaptive design.'
    }
  ];

  return (
    <ServicesContainer>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <IconWrapper>
            <img src={service.icon} alt={service.title} />
          </IconWrapper>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCard>
      ))}
    </ServicesContainer>
  );
};

export default Services; 