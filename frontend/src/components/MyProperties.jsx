import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { icons, hou } from '../assets/app.js';
import { useNavigate } from 'react-router';



function MyProperties() {
    const navigate = useNavigate()


    return (
        <div className='bg-[#0B051C] min-h-screen px-[10%] pb-10'>
            <div className='flex justify-between items-center pt-12'>
                <FiArrowLeft onClick={() => navigate('/')} className='text-white cursor-pointer text-2xl' />
                <p className='text-white text-2xl'>My Properties</p>
                <img className='bg-white rounded-full h-8 cursor-pointer' src={icons.user_icon} alt="" />

            </div>

            <div className=' mt-8'>
                <div className='flex justify-between items-center'>

                    <p className='text-white'>For Sale</p>
                    <button onClick={() => navigate('/add-property')} className='text-black max-laptop:px-4 max-tablet:text-sm bg-white font-medium px-10 py-2 max-tablet:hidden rounded-3xl text-lg'>Add Property</button>

                </div>
                {
                    hou.map((item) => (
                        item.owner === 'Elite Properties' &&
                        <div className="bg-[#28223B] client cursor-pointer border-b-0 mt-4 h-full w-[90%] tablet:w-[45%] laptop:w-[30%] rounded-lg" key={item.id}>
                            <img className="h-[60%] object-cover w-full" src={item.image} alt="" />
                            <div className="flex py-2 flex-col items-center">
                                <p className="text-xl text-white mb-3">{item.name}</p>
                                <div className="text-sm font-light text-center mb-2">
                                    <p className="text-white">{item.address.address1}</p>
                                    <p className="text-white">{item.address.address2}</p>
                                </div>
                                <div className="font-normal text-white"><span className="text-white">{item.numbeds}</span> | <span className="text-white">{item.price}</span></div>
                            </div>
                        </div>
                    ))
                }


            </div>
            <div className=' mt-8'>
                <p className='text-white'>For Rent</p>
                {
                    hou.map((item) => (
                        item.owner === 'Elite Properties' &&
                        <div className="bg-[#28223B] client cursor-pointer border-b-0 mt-4 h-full w-[90%] tablet:w-[45%] laptop:w-[30%] rounded-lg" key={item.id}>
                            <img className="h-[60%] object-cover w-full" src={item.image} alt="" />
                            <div className="flex py-2 flex-col items-center">
                                <p className="text-xl text-white mb-3">{item.name}</p>
                                <div className="text-sm font-light text-center mb-2">
                                    <p className="text-white">{item.address.address1}</p>
                                    <p className="text-white">{item.address.address2}</p>
                                </div>
                                <div className="font-normal text-white"><span className="text-white">{item.numbeds}</span> | <span className="text-white">{item.price}</span></div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default MyProperties