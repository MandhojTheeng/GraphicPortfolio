import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 4rem;
  background: ${({ theme }) => theme.colors.backgroundGradient};
  position: relative;
  overflow: hidden;

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

const TestimonialContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const TestimonialContent = styled(motion.div)`
  margin-bottom: 2rem;
`;

const Quote = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

const AuthorTitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.border};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const FloatingAvatar = styled(motion.div)<{ top: string; left: string }>`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.",
      author: "Mike Anderson",
      title: "Vivaco Studio",
      image: "/testimonials/author1.jpg"
    },
    {
      quote: "The team went above and beyond with our project. Their attention to detail and creative solutions exceeded our expectations.",
      author: "Sarah Johnson",
      title: "Design Lead",
      image: "/testimonials/author2.jpg"
    },
    {
      quote: "Working with them was a game-changer for our business. The results speak for themselves.",
      author: "David Chen",
      title: "CEO, TechStart",
      image: "/testimonials/author3.jpg"
    }
  ];

  const floatingAvatars = [
    { top: '20%', left: '10%', image: '/testimonials/avatar1.jpg' },
    { top: '60%', left: '5%', image: '/testimonials/avatar2.jpg' },
    { top: '30%', left: '85%', image: '/testimonials/avatar3.jpg' },
    { top: '70%', left: '90%', image: '/testimonials/avatar4.jpg' },
  ];

  return (
    <Section>
      {floatingAvatars.map((avatar, index) => (
        <FloatingAvatar
          key={index}
          top={avatar.top}
          left={avatar.left}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={avatar.image} alt="Client" />
        </FloatingAvatar>
      ))}

      <SectionHeader>
        <Tag>Testimonials</Tag>
        <Title>What My Clients Say</Title>
        <Description>
          Most common methods for designing websites that work well on desktop is
          responsive and adaptive design
        </Description>
      </SectionHeader>

      <TestimonialContainer>
        <AnimatePresence mode="wait">
          <TestimonialContent
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Quote>{testimonials[currentTestimonial].quote}</Quote>
            <Author>
              <AuthorImage>
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].author} 
                />
              </AuthorImage>
              <AuthorInfo>
                <AuthorName>{testimonials[currentTestimonial].author}</AuthorName>
                <AuthorTitle>{testimonials[currentTestimonial].title}</AuthorTitle>
              </AuthorInfo>
            </Author>
          </TestimonialContent>
        </AnimatePresence>

        <Dots>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={currentTestimonial === index}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </Dots>
      </TestimonialContainer>
    </Section>
  );
};

export default Testimonials; 