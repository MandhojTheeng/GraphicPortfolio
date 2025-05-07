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
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 20px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const BlogImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const DateBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #4CAF50;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`;

const BlogTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  margin-bottom: 1rem;
  line-height: 1.4;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      image: '/blog/web-dev.jpg',
      date: '23 Dec',
      category: 'Web Development',
      title: 'Jim Morisson Says when the musics over turn off the light'
    },
    {
      image: '/blog/branding.jpg',
      date: '23 Dec',
      category: 'Branding',
      title: 'How to be appreciated for your hard work as a developer'
    },
    {
      image: '/blog/social.jpg',
      date: '23 Dec',
      category: 'Social Media',
      title: 'How designers and developers can collaborate better'
    }
  ];

  return (
    <Section>
      <SectionHeader>
        <Tag>From My Blog</Tag>
        <Title>
          Our Recent Updates, Blog,
          <br />
          Tips, Tricks & More
        </Title>
      </SectionHeader>

      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogImage>
              <img src={post.image} alt={post.title} />
              <DateBadge>{post.date}</DateBadge>
            </BlogImage>
            <BlogContent>
              <Category>{post.category}</Category>
              <BlogTitle>{post.title}</BlogTitle>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Section>
  );
};

export default Blog; 