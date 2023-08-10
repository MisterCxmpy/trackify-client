import React, { useState, useContext, createContext } from 'react';

const AuthContext  = createContext();

export const AuthProvider = ({ children }) => {

  function login({ details }) {

  }

  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);