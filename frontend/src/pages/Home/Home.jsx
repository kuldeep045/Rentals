import React from "react";
import Navbar from "../../components/Navbar.jsx";
import "./Home.css";
import { houses } from "../../assets/app.js";
import { clientOpinion } from "../../assets/app.js";

function Home() {
  return (
    <div className="home min-h-[100vh] w-full relative">
      <Navbar />

      {/* hero */}
      <div className="bg h-screen fixed w-full"></div>
      <div className="w-[80%] flex flex-col gap-3 items-center justify-center h-screen m-auto">
        <h2 className="text-5xl text-white text-center font-bold">Discover your New Home</h2>
        <p className="font-medium text-white text-xl text-center">Helping 100 million renters find their perfect fit</p>
        <div className="flex gap-4">
          <input  className="bg-gray-500 bg-opacity-50 border-none outline-none  px-4 py-3 w-60 rounded-md text-start text-white font-medium" type="text" placeholder="Search by location" />
          <button className='text-black bg-white font-medium px-10 py-2 rounded-3xl text-lg'>Search</button>
          </div>
      </div>


      {/* explore section */}

      <div className="laptop:h-[100vh] w-full bg-[#0B051C] px-[10%] py-5">

        <h1 className="text-center text-3xl text-white font-medium">Explore Rentals in Dayton, TX</h1>
        <div className="flex flex-wrap gap-1 justify-evenly h-[75%] w-full tablet:gap-2">
          {
            houses.map((house) => (
              <div className="bg-[#28223B] cursor-pointer border-b-0 mt-10 h-full w-[90%] tablet:w-[45%] laptop:w-[30%] rounded-lg" key={house.id}>
                <img className="h-[60%] object-cover w-full" src={house.image} alt="" />
                <div className="flex py-2 flex-col items-center">
                <p className="text-xl text-white mb-3">{house.name}</p>
                <div className="text-sm font-light text-center mb-2">
                  <p className="text-white">{house.address.address1}</p>
                  <p className="text-white">{house.address.address2}</p>
                </div>
                <div className="font-normal text-white"><span className="text-white">{house.numbeds}</span> | <span className="text-white">{house.price}</span></div>
                </div>
              </div>
            ))

          }
        </div>


      </div>
             {/*client Opinion */}
      <div className="laptop:h-[100vh] w-full bg-[#0B051C] px-[10%] py-5">
        <h1 className="text-center text-3xl text-white font-medium">What out Client Says</h1>

        <div  className="flex flex-wrap gap-1  justify-evenly h-[75%] w-full tablet:gap-2">
          {
            clientOpinion.map( (client) => (
              <div className="bg-[#28223B] text-white cursor-pointer border-b-0 mt-10 h-full w-[90%] tablet:w-[45%] laptop:w-[30%] rounded-lg" key={client.clientId}>
                <div className="h-[60%]">
                  <img className=" h-full w-full object-cover" src={client.image} alt="" />
                </div>
                <div className="px-4 text-sm py-6">
                  <p className="text-left text-white">{client.comment}</p>
                  <p className="text-right text-white mt-6">{client.clientName}</p>
                </div>

              </div>
            ))

          }
        </div>



      </div>
    </div> 
  );
}

export default Home;
