import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 1em;
  resize: none;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wygujro', 'template_73nuaff', e.target, 'YIFTUbjHt4302c4I2')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
