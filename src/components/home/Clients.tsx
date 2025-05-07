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

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ClientCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};

  img {
    max-width: 150px;
    height: auto;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const Clients = () => {
  const clients = [
    {
      name: 'Avant Garde',
      logo: 'https://placehold.co/200x80/2a2a2a/white?text=Avant+Garde'
    },
    {
      name: "Lily's Flowers",
      logo: 'https://placehold.co/200x80/2a2a2a/white?text=Lily\'s+Flowers'
    },
    {
      name: 'Cara Indoors',
      logo: 'https://placehold.co/200x80/2a2a2a/white?text=Cara+Indoors'
    },
    {
      name: 'Business',
      logo: 'https://placehold.co/200x80/2a2a2a/white?text=Business'
    },
    {
      name: 'Some Business',
      logo: 'https://placehold.co/200x80/2a2a2a/white?text=Some+Business'
    },
    {
      name: 'Travel Lookbook',
      logo: 'https://placehold.co/200x80/2a2a2a/white?text=Travel+Lookbook'
    },
    {
      name: 'Leaves & Co',
      logo: 'https://placehold.co/200x80/2a2a2a/white?text=Leaves+%26+Co'
    },
    {
      name: 'Sushi Express',
      logo: 'https://placehold.co/200x80/2a2a2a/white?text=Sushi+Express'
    }
  ];

  return (
    <Section>
      <ClientsGrid>
        {clients.map((client, index) => (
          <ClientCard
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={client.logo} alt={client.name} />
          </ClientCard>
        ))}
      </ClientsGrid>
    </Section>
  );
};

export default Clients; 