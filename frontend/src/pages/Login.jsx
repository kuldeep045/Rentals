import React, { useState, useContext } from 'react'
import axios from 'axios'
import { ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import {otpContext} from '../context/otpContext.jsx'
import Loader from '../components/loader/Loader.jsx';
import { LoginContext } from '../context/LoginContext.jsx';



function Login() {

    // const [loginState, setLoginState] = useState('signup')
    const {loginState, setloginState} = useContext(LoginContext)
    
    

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {data, setData} = useContext(otpContext)
    const [loading, setloading] = useState(false)


    const submitHandler = async (e) => {
        e.preventDefault();
        
    console.log("loginState", loginState);

        if(loginState === 'signup'){
            const datas = {
                email, userName, password, name
                
            }
            if(!email){
                toast.error("email required")
                return
            }
            if(!name){
                toast.error("name required")
                return
            }
            if(!userName){
                toast.error("UserName required")
                return
            }
            if(!password){
                toast.error("Password required")
                return
            }
            setloading(true)

            await axios.post('http://localhost:3000/api/v1/users/register', datas)
            .then((response) =>{
                console.log(response)
                toast.success(response.data?.message, {
                    style: { color: 'black' }

                })
                
                setData(email)
                //
                navigate('/verify')
                
            })
            .catch((err) => {
                console.error(err)
                toast.error(err)
                setloading(false)
            })


        }else{

            const loginData = {
                userName,
                email,
                password
            }
            
            axios.post('http://localhost:3000/api/v1/users/login', loginData)
            .then((response) => {
                console.log(response)
                navigate('/')
            })
            .catch((err) => console.log("loginerr: ", err))

        }





        setEmail('')
        setUserName('')
        setPassword('')
        setName('')
    }


    return (
        <div className='bg-[#0B051C] min-h-[100vh] w-screen flex items-center justify-center'>
            <ToastContainer autoClose={2000} />
            {
                loading ? <Loader/> : 
                <form onSubmit={submitHandler} className='bg-[#001727]   flex flex-col max-tablet:px-2 px-10 py-9 rounded-md'>
                <h2 className='text-center text-white mb-4 text-xl'>{loginState === 'login' ? 'Login' : 'Create Account'}</h2>

                <div className={`flex justify-between gap-2 mt-4 ${loginState === 'login' ? 'hidden' : ''}`}>
                    <p className='text-lg text-white'>Name: </p>
                    <input name='name' value={name} onChange={(e) => setName(e.target.value)} className='rounded-sm outline-none text-black px-3 py-1'  type="text" />
                </div>
                <div className={`flex justify-between gap-2 mt-4 ${loginState === 'login' ? 'hidden' : ''}`}>
                    <p className='text-lg text-white'>UserName: </p>
                    <input name='userName' value={userName} onChange={(e) => setUserName(e.target.value)} className='rounded-sm outline-none text-black px-3 py-1' type="text" />
                </div>
                <div className='flex justify-between gap-2 mt-4'>
                    <p className='text-lg text-white'>Email: </p>
                    <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-sm outline-none text-black px-3 py-1' required type="email" />
                </div>
                <div className='flex justify-between gap-2 mt-4'>
                    <p className='text-lg text-white'>Password: </p>
                    <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-sm outline-none text-black px-3 py-1' required type="password" />
                </div>
                <button type="submit" className="bg-green-500 text-white inline-block px-8 py-2 mt-5 text-lg m-auto text-center rounded-md">
                    {loginState === 'login' ? 'Log in' : 'Sign up'}
                </button>
                {
                    loginState === 'login' ? <p className=' mt-4 text-white'>Don't have an account ?<span className='text-blue-500 cursor-pointer underline' onClick={() => setloginState('signup')}>Click here</span></p>
                        : <p className=' mt-4 text-white'>Already have an account ? <span className='underline cursor-pointer text-blue-500' onClick={() => setloginState('login')}>Click here</span></p>
                }
            </form>
            }
            
        </div>
    )
}

export default Login