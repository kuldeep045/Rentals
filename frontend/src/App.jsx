import { useContext, useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login"
import Otp from "./pages/Otp"
import Buy from "./pages/Buy.jsx"
import { Layout } from "./Layout.jsx"
import Rent from "./pages/Rent.jsx"
import MyProperties from "./components/MyProperties.jsx"
import AddProperty from "./components/AddProperty.jsx"
import MyProfile from "./components/MyProfile.jsx"
import axios from 'axios' 
import { LoginContext } from "./context/LoginContext.jsx"
import Loader from "./components/loader/Loader.jsx"



function App() {
  const [loading, setLoading] = useState(true)

  const {setisLoggedIn, isLoggedIn, setName, setUserName, setEmail, setAddress1, setAddress2, setPhone, setProfileImg} = useContext(LoginContext)

  //check for userLogged In
  async function checkLogin() {
    await axios.get('http://localhost:3000/api/v1/users/checkLoggedIn',{withCredentials: true})
    .then((response)=>{
        const receivedData = response.data.data
        console.log("ReceivedData: ",receivedData.isLoggedIn)
        setName(receivedData.data.name)
        setUserName(receivedData.data.userName)
        setEmail(receivedData.data.email)
        setPhone(receivedData.data.phone)
        setisLoggedIn(receivedData.isLoggedIn)
        setProfileImg(receivedData.data.profileImg)
        setAddress1(receivedData.data.address[0].addressLine1)
        setAddress2(receivedData.data.address[0].addressLine2)
        setLoading(false)
    })
    .catch((err)=>console.log(err))
}
useEffect(() => {
  checkLogin()

}, [])


  const router = createBrowserRouter([
    {
      path: '/',
      element: loading ? <Loader/> : <Layout/>,
      children: [
        {index: true, element:<Home/>},
        {path: 'verify', element:<Otp/>},
        {path: 'buy', element:<Buy/>},
        {path: 'rent', element:<Rent/>},
      ]
    },{
      path: '/login', element:<Login/>,
    },{
      path: '/add-property',  element: <AddProperty/>,
    },{
      path: '/my-properties',  element:<MyProperties/>,
    },{
      path: '/my-profile', element:<MyProfile/>,
    }]
)
  

  return (
  <RouterProvider router={router} />
  )
}

export default App
