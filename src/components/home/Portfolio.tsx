import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Services from './Services';

const PortfolioSection = styled.section`
  padding: 6rem 4rem;
  background: ${({ theme }) => theme.colors.backgroundGradient};

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.text};
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${({ theme }) => theme.transitions.default};
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Youtube', 'Vimeo', 'Soundcloud', 'Popup', 'Detail'];

  const portfolioItems = [
    { id: 1, category: 'Youtube', image: '/portfolio/eth.jpg' },
    { id: 2, category: 'Vimeo', image: '/portfolio/sphere.jpg' },
    { id: 3, category: 'Soundcloud', image: '/portfolio/abstract.jpg' },
    { id: 4, category: 'Popup', image: '/portfolio/head.jpg' },
    { id: 5, category: 'Detail', image: '/portfolio/ball.jpg' },
    { id: 6, category: 'Youtube', image: '/portfolio/purple.jpg' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <PortfolioSection>
      <Services />
      
      <SectionTitle>
        <Stats>
          <span>18</span> Years of Success
          <span>9K</span> Total Projects
        </Stats>
        <Title>Hey There!</Title>
        <Title>I Can Design Anything You Want</Title>
        <Subtitle>
          Most common methods for designing websites that work well on desktop is responsive and adaptive design
        </Subtitle>
      </SectionTitle>

      <FilterContainer>
        {filters.map(filter => (
          <FilterButton
            key={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterContainer>

      <PortfolioGrid>
        {filteredItems.map((item, index) => (
          <PortfolioItem
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={item.image} alt={`Portfolio item ${item.id}`} />
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </PortfolioSection>
  );
};

export default Portfolio; 