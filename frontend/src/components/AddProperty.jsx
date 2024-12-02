import React,{useContext} from 'react'
import { FiArrowLeft } from "react-icons/fi";

import { icons } from '../assets/app.js'
import { useNavigate } from 'react-router';

import { LoginContext } from '../context/LoginContext.jsx';

function AddProperty() {
  const navigate = useNavigate()
  const {profileImg} = useContext(LoginContext)
  return (
    <div className='bg-[#0B051C] min-h-screen px-[10%] pb-10 text-white pt-10'>
      
        <div className='flex justify-between items-center mt-8 '>
            <p><FiArrowLeft onClick={() => navigate('/my-properties')} className='text-2xl cursor-pointer' /></p>
            <p className='font-medium text-2xl'>Add new Property</p>
            <img className='bg-white h-10 w-10 object-cover rounded-full' src={profileImg ? profileImg : icons.user_icon} alt="" />
        </div> 
        
        

    </div>
  )
}

export default AddProperty