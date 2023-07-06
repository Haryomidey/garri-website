import React from 'react';
import HeroImage from '../assets/images/garri-12.jpg';
import HeroImageTwo from '../assets/images/garri-14.jpg';
import HeroImageThree from '../assets/images/garri-23.jpg';

const Herosection = () => {
  return (
    <div className='w-full relative min-h-screen bg-[#00ABE4] pb-16 pt-28'>
      {/* <h1 className='text-black font-semibold text-xl text-center'>Welcome to Garri Kindom</h1> */}
      <div className='w-full max-w-[500px] flex items-center mx-auto mt-5 justify-center px-5 mb-9'>
        <div className='w-full flex items-center justify-center rounded-[40px] shadow-md overflow-hidden px-3 bg-white gap-2 py-2'>
          <i className="fa-solid fa-magnifying-glass text-[#213A5A] cursor-pointer"></i>
          <input type="text" className='w-full text-[13px] mobile:text-sm px-2 outline-none' placeholder='Search for your favorite Garri...' />
          <span className='material-symbols-outlined border p-2 rounded-full cursor-pointer'>page_info</span>
        </div>
      </div>
      <div className='w-full min-h-[200px] flex items-center justify-center tablet:justify-between flex-wrap tablet:flex-nowrap gap-x-7 gap-y-[100px] px-5 pt-6'>
        <div className='w-full tablet:w-[33%] flex flex-col justify-center items-center text-center'>
          <h1 className='text-2xl mobile:text-4xl font-bold text-[#213A5A]'>Saving Nigerians since 1929</h1>
          <p className='text-[#213A5A] mt-3'>Tasty & Healthy Organic Sapa Fighter</p>
          <div className='w-full mt-4'>
            <button className='bg-[#213A5A] text-white px-5 py-2 rounded-3xl'>GET STARTED</button>
          </div>
        </div>
        <div className='w-full tablet:w-2/3 h-full flex justify-center relative'>
          <img className='w-full laptop:max-w-[50%] h-full hero_garri z-10' src={HeroImage} alt="" />
          <div className='absolute w-[25%] top-[-40px] rotate-[-20deg] tablet:rotate-[20deg] left-[5px] tablet:left-[70%] laptop:left-[60%]'>
            <img src={HeroImageTwo} className='w-full hero_garri_two' alt="" />
            <div className=''></div>
          </div>
        </div>
      </div>
      <img src={HeroImageThree} className='absolute bottom-[40px] w-[80px] rotate-[-70deg] right-[-30px] blur_image' alt="" />
    </div>
  )
}

export default Herosection;
