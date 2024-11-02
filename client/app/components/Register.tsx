"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import { useRouter } from 'next/navigation';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #4e54c8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4348b5;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
`;

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    useEffect(() => {
        // Redirect to the home page if a token is present
        if (token) {
          router.push('/');
        }
      }, [token, router]);
    try {
      const response = await fetch('http://localhost:5173/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setMessage("Registration successful! You can now log in.");
      } else {
        const data = await response.json();
        setMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };
   
if (token) return null;

  return (
    <Container>
      <Title>Library Register</Title>
      <Form onSubmit={handleSubmit}>
        {!loading ? (
          <>
            <Input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              required
              value={user.username}
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
              value={user.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              value={user.password}
              onChange={handleChange}
            />
            <Button type="submit">Register</Button>
          </>
        ) : (
          <Loader />
        )}
      </Form>
      {message && <p style={{ color: "white", marginTop: "1rem" }}>{message}</p>}
    </Container>
  );
  
};

export default Register;
