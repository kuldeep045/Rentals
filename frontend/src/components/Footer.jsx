import React from 'react'
import { icons } from '../assets/app.js'

function Footer() {
    const openFb = () => {
        window.open("https://www.facebook.com/cooldeep45/", "_blank");
    };
    const openinsta = () => {
        window.open("https://www.instagram.com/cooldeep_45/", "_blank");
    };
    const openTiktok = () => {
        window.open("https://www.tiktok.com/@cooldeep_45", "_blank");
    };
  return (
    <div className="w-full px-[10%]  text-center pt-6 border-none outline-none  m-auto bg-[#0B051C]">
        
        <div className='flex flex-col items-center client gap-12 py-8 '>
            <div className='flex gap-10 max-tablet:flex max-tablet:flex-wrap max-tablet:justify-center'>
                <div className='text-start max-tablet:text-center'>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>About Us</p>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>Contact Us</p>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>Legal notices</p>
                </div>
                <div className='text-start max-tablet:text-center'>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>New York</p>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>Texas</p>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>Washington</p>
                </div>
                <div className='text-start max-tablet:text-center'>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>Terms and Condition</p>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>Advertise</p>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>For rent</p>
                </div>
                <div className='text-start max-tablet:text-center'>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>Careers</p>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>For sale</p>
                    <p className='text-white underline text-sm m-5 cursor-pointer'>Visit us</p>
                </div>
            </div>
            <p className='text-white'>Follow us on: </p>
            <div className='flex gap-3 items-center justify-center'>
                <img onClick={openFb} className='h-10 rounded-[1000px] cursor-pointer' src={icons.facebook} alt="" />
                <img onClick={openinsta} className='h-10 rounded-[1000px] cursor-pointer' src={icons.insta} alt="" />
                <img onClick={openTiktok} className='h-10 rounded-[1000px] cursor-pointer' src={icons.tiktok} alt="" />
            </div>
        </div>
        <div className='text-white py-8'>&copy; Kuldeep Kumar Mahato</div>


    </div>
  )
}

export default Footer