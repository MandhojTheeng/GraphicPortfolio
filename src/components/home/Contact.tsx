import React, { useState } from 'react';
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

const ContactContainer = styled.div`
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  img {
    width: 24px;
    height: 24px;
  }
`;

const InfoContent = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
  }
`;

const ContactForm = styled.form`
  flex: 2;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-top: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Section>
      <SectionHeader>
        <Tag>Contact Me</Tag>
        <Title>I Want To Hear From You</Title>
        <Description>
          Please fill out the form on this section to contact with me. Or call between
          9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </Description>
      </SectionHeader>

      <ContactContainer>
        <ContactInfo>
          <InfoItem>
            <IconContainer>
              <img src="/icons/location.svg" alt="Address" />
            </IconContainer>
            <InfoContent>
              <h3>Address</h3>
              <p>20, Somewhere in world</p>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <IconContainer>
              <img src="/icons/email.svg" alt="Email" />
            </IconContainer>
            <InfoContent>
              <h3>Email</h3>
              <p>hello@dizme.com</p>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <IconContainer>
              <img src="/icons/phone.svg" alt="Phone" />
            </IconContainer>
            <InfoContent>
              <h3>Phone</h3>
              <p>+123 456 7890</p>
            </InfoContent>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormGrid>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormGrid>
          <TextArea
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Now
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </Section>
  );
};

export default Contact; 