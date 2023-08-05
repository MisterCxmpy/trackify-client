import React, { useState, useContext, createContext } from 'react';

const FormContext  = createContext();

export const FormProvider = ({ children }) => {
  const [formType, setFormType] = useState("");
  const [formActive, setFormActive] = useState(false);

  return (
    <FormContext.Provider value={{ formType, setFormType, formActive, setFormActive }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);