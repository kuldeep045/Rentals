import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login"
import Otp from "./pages/Otp"
import Buy from "./pages/Buy.jsx"
import { Layout } from "./Layout.jsx"
import Rent from "./pages/Rent.jsx"




function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {index: true, element:<Home/>},
        {path: 'verify', element:<Otp/>},
        {path: 'buy', element:<Buy/>},
        {path: 'rent', element:<Rent/>},
      ]
    },{
      path: '/login', element:<Login/>,
    }
  ]
)
  

  return (
  <RouterProvider router={router} />
  )
}

export default App
