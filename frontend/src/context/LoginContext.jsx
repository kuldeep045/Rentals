import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loginState, setloginState] = useState('signup');
  const[isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <LoginContext.Provider value={{ loginState, setloginState, isLoggedIn, setisLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
