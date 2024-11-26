import React, { useEffect, useRef, useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { otpContext } from '../context/otpContext.jsx'
import { toast, ToastContainer } from 'react-toastify'
import { LoginContext } from '../context/LoginContext.jsx'


function Otp() {
  const navigate = useNavigate()
  const {data, setData} = useContext(otpContext)
  const {loginState, setloginState } = useContext(LoginContext)

  

  
  
  const [oldOtp, setoldOtp] = useState(new Array(6).fill(""))
  
  

  const inputref = useRef([])

  useEffect(() => {
    if(inputref.current[0]){
      inputref.current[0].focus()
    }
  }, [])
  

  

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    

    try {
      const otp = oldOtp.join("")


      if(!otp || otp.length < 6){
        toast.error("Please enter a valid otp")
        return
      }
      
      const res = await axios.post('http://localhost:3000/api/v1/users/auth', {
        email: data,
        otp: otp
      })
      
      console.log("auth result: ", res.data)
      if(res.data.success){
        toast.success(res.data.message)
        setloginState("login")
        navigate('/')
      }


    } catch (error) {
      toast.error(error.response.data.message)
      setoldOtp(new Array(6).fill(""));
      
    }
  }
  const onchangeHandler = (index, e) => {
    const value = e.target.value;
    
    if(isNaN(value)) return

    const newOtp = [...oldOtp]

    newOtp[index] = value.substring(value.length - 1)
    setoldOtp(newOtp);

    


    if(value && index < 5 && inputref.current[index + 1]){

      inputref.current[index + 1].focus()

    }
    
  }
  const handlekeyDown = (index, e) => {
    if(e.key == 'Backspace' && !oldOtp[index] && index > 0 && inputref.current[index -1]){
      inputref.current[index - 1].focus()

    }
    if(e.key == 'ArrowRight' && index < 5){
      inputref.current[index + 1].focus()
    }

    if(e.key == 'ArrowLeft' && index > 0){
      
      inputref.current[index - 1].focus()

    }

  }

  const onClickHandler = (index) => {

    inputref.current[index].setSelectionRange(1, 1)
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[100vh] bg-[#0B051C] w-full flex justify-center items-center'>
      <ToastContainer autoClose={2000} />
      <div className='bg-[#001727]  text-white flex items-center flex-col gap-4 px-4 py-3 rounded-lg'>
        <h3 className='text-white text-xl font:md'>Verify OTP</h3>
        <div className='flex gap-4 row '>
          {
            oldOtp.map( (item, index) => {
              return <input 
              key={index}
              type='text'
              ref={(input) => (inputref.current[index] = input)}
              onChange={(e) => onchangeHandler(index, e)}
              onClick={() => onClickHandler(index)}
              onKeyDown={(e) => handlekeyDown(index, e)}
              value={item}

              className='w-10 h-10 outline-none text-black text-center rounded-lg'
              />
            })




          }


        </div>
        <button type='submit' className='bg-green-600 px-5 py-2 rounded-lg mx-auto text-white'>Verify</button>


        <p className='text-white'>Resend code in: <span className='text-blue-600 underline'> 0:00</span></p>
      </div>

    </form>
  )
}

export default Otp