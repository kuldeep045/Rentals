import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loginState, setloginState] = useState('signup');
  const[isLoggedIn, setisLoggedIn] = useState(false)
  const [profileImg, setProfileImg] = useState('')
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const value = {
    loginState, setloginState, //login sign up
    isLoggedIn, setisLoggedIn, //loggedin or logout
    profileImg, setProfileImg, //profileImage
    name, setName, //name
    userName, setUserName, //userName
    email, setEmail,//email
    phone, setPhone, //phone
    address1, setAddress1, //address1
    address2, setAddress2 //address2

  }

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
};
