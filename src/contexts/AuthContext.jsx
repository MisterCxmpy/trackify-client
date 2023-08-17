import React, { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext  = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  const signup = async (details) => {
    const url = "http://localhost:3000/auth/register";
  
    const requestData = {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    };
  
    const response = await fetch(url, requestData)
    const user = await response.json();

    if (!response.ok) throw new Error(user.message);

    console.log(user);
  }

  const login = async (details) => {
    const url = "http://localhost:3000/auth/login";

    const requestData = {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    };

    const response = await fetch(url, requestData)
    const user = await response.json();

    if (!response.ok) throw new Error(user.message);

    await getUser()
  }

  const getUser = async () => {
    const url = "http://localhost:3000/me";

    const response = await fetch(url, {credentials: "include"})
    const user = await response.json();

    if (!response.ok) throw new Error(user.message);

    saveUser({ ...user })
  }

  useEffect(() => {
    let cached = localStorage.getItem('user');

    if (cached) navigate('/dashboard');

    if (!cached) {
      let cachedUser = JSON.parse(cached)

      if (!user) {
        setUser(cachedUser)
        navigate('/')
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);