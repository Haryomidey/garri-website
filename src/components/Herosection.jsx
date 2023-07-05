import React from 'react';
import HeroImage from '../assets/images/garri-12.jpg';

const Herosection = () => {
  return (
    <div className='w-full h-screen pt-28'>
      {/* <h1 className='text-black font-semibold text-xl text-center'>Welcome to Garri Kindom</h1> */}
      <div className='w-full max-w-[500px] flex items-center mx-auto mt-5 justify-center px-5 mb-5'>
        <div className='w-full flex items-center justify-center rounded-[40px] overflow-hidden px-3 bg-white gap-2 py-2'>
          <i className="fa-solid fa-magnifying-glass text-[#213A5A] cursor-pointer"></i>
          <input type="text" className='w-full px-2 outline-none' placeholder='Search for your favorite Garri...' />
          <span className='material-symbols-outlined border p-2 rounded-full cursor-pointer'>page_info</span>
        </div>
      </div>
      <div className='w-full min-h-[200px] flex items-center justify-center tablet:justify-between flex-wrap tablet:flex-nowrap gap-7 px-5'>
        <div className='w-full tablet:w-1/2 flex flex-col justify-center items-center text-center'>
          <h1>Saving Nigerians since 1929</h1>
          <p>Tasty & Healthy Organic Sapa Battler</p>
        </div>
        <div className='w-full tablet:w-1/2 flex justify-center'>
          <img className='w-full max-w-[400px] hero_garri' src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Herosection;
