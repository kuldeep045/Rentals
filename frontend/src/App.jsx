import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login"
import Otp from "./pages/Otp"




function App() {
  

  return (
  
    <BrowserRouter  future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="verify" element={<Otp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
