import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 4rem;
  background: ${({ theme }) => theme.colors.backgroundGradient};

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 20px;
  padding: 2rem;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PriceTag = styled.div`
  margin-bottom: 1rem;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ServicesSection = () => {
  const services = [
    {
      icon: '/icons/creative.svg',
      iconBg: '#FFE6E6',
      title: 'Creative Design',
      price: 99,
      description: 'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development'
    },
    {
      icon: '/icons/graphic.svg',
      iconBg: '#E6FFE6',
      title: 'Graphic Design',
      price: 199,
      description: 'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development'
    },
    {
      icon: '/icons/ui-ux.svg',
      iconBg: '#E6E6FF',
      title: 'UI/UX Design',
      price: 299,
      description: 'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development'
    },
    {
      icon: '/icons/web.svg',
      iconBg: '#FFF3E6',
      title: 'Web Design',
      price: 399,
      description: 'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development'
    }
  ];

  return (
    <Section>
      <SectionHeader>
        <Tag>Services</Tag>
        <Title>What I Do for Clients</Title>
        <Description>
          Most common methods for designing websites that work well on desktop is
          responsive and adaptive design
        </Description>
      </SectionHeader>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <IconContainer style={{ background: service.iconBg }}>
              <img src={service.icon} alt={service.title} />
            </IconContainer>
            <ServiceTitle>{service.title}</ServiceTitle>
            <PriceTag>
              Starts from <span>${service.price}</span>
            </PriceTag>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Section>
  );
};

export default ServicesSection; 