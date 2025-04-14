// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import contactBg from '../assets/images/background-contacts.jpg';

const Wrapper = styled.section`
  background-image: url(${contactBg});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid ${props => props.error ? '#ff4d4f' : '#ccc'};
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #66b2ff;
  }
`;

const TextArea = styled.textarea`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid ${props => props.error ? '#ff4d4f' : '#ccc'};
  border-radius: 6px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #66b2ff;
  }
`;

const ErrorMsg = styled.p`
  font-family: 'Inter', sans-serif;
  color: #ff4d4f;
  margin: -0.8rem 0 0.5rem;
  font-size: 0.9rem;
`;

const SuccessMsg = styled.p`
  font-family: 'Inter', sans-serif;
  color: #1c9c61;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #111;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      console.log('Form Submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <Wrapper>
      <Overlay />
      <FormContainer>
        <Title>Contact Me</Title>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          </div>
          <div>
            <TextArea
              name="message"
              rows="6"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />
            {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
          </div>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </StyledForm>
        {submitted && <SuccessMsg>Your message was sent successfully!</SuccessMsg>}
      </FormContainer>
    </Wrapper>
  );
}






  