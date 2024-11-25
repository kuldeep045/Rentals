import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loginState, setloginState] = useState('signup');

  return (
    <LoginContext.Provider value={{ loginState, setloginState }}>
      {children}
    </LoginContext.Provider>
  );
};
