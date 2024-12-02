import React from 'react'
import { FiArrowLeft } from "react-icons/fi";

import { icons } from '../assets/app'
import { useNavigate } from 'react-router';

function AddProperty() {
  const navigate = useNavigate()
  return (
    <div className='bg-[#0B051C] min-h-screen px-[10%] pb-10 text-white pt-10'>
      
        <div className='flex justify-between items-center mt-8 '>
            <p><FiArrowLeft onClick={() => navigate('/my-properties')} className='text-2xl cursor-pointer' /></p>
            <p className='font-medium text-2xl'>Add new Property</p>
            <img className='bg-white h-8 rounded-full' src={icons.user_icon} alt="" />
        </div>
        
        

    </div>
  )
}

export default AddProperty