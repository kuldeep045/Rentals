import React, {useState} from 'react'
import { hou } from '../assets/app.js'

function Buy() {
  const [selectedOption, setSelectedOption] = useState("");
  
  
  const handleChange = (e) => (
    setSelectedOption(e.target.value)
  )

  return (
    <div className='min-h-screen bg-[#0B051C] pt-20 px-[10%] text-white '>
      
        <div className='flex justify-between  max-tablet:flex-wrap'>
            <div className='max-tablet:mb-4'>
            <input className='font-md rounded-lg px-3 py-1 mr-5 text-md outline-none bg-white text-black' type="text" placeholder='Location'/>
            <button className='text-black ml-5 bg-green-600 font-medium px-10 py-1 rounded-3xl text-lg'>Search</button>
            </div>
            <div className='flex items-center py-1 px-3 gap-10'>
                <p>Sort by</p>
                <select className='text-black w-22 px-3 py-1 border-none text-md p-1 outline-none rounded' 
                
                id="options"
                value={selectedOption}
                onChange={handleChange}
                >                
                  <option  value="Price">Price</option>
                  <option  value="Latest">Latest</option>
                </select>
            </div>
        </div>

        <div className='mt-4'>
          <p className='leading-5'>Homes for sale</p>
          <p>211 results</p>
        </div>
        <div className="flex flex-wrap gap-1 justify-between h-[75%] w-full tablet:gap-2">
          {
            hou.map((item) => (
              item.status === 'sale' && 
              <div className="bg-[#28223B] client cursor-pointer border-b-0 mt-10 h-full w-[90%] tablet:w-[45%] laptop:w-[30%] rounded-lg" key={item.id}>
                <div className='object-cover w-ful h-60'><img  className=" h-full w-full object-cover" src={item.image} alt="" /></div>
                <div className="px-1 text-sm py-6">
                <p className='text-md mb-1'>$ {item.price}</p>
                <div className='text-md mb-1'><span >{item.numbeds}bds | </span><span>{item.numBaths}ba | </span><span>{item.area} | </span><span>Houser for {item.status}</span></div>
                <p className='text-md'><span>{item.address.address1}, </span><span>{item.address.address2}</span></p>
                </div>
              </div>
            ))
          }
        </div>
        
    </div>
  )
}

export default Buy