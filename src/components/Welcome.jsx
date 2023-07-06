import React from 'react';

const Welcome = ({welcome}) => {
  return (
      <div className={`fixed left-0 transition-all ease duration-300 ${welcome ? 'top-[-100%]' : 'top-0'} w-full min-h-screen bg-[#E3EEFA] flex items-center justify-center flex-col z-[1111]`}>
          <h1 className="my-7 font-semibold text-2xl px-4 text-center text-[#213A5A] uppercase mobile:w-[80%] max-w-[300px]">Welcome to Garri Kingdom</h1>
      <div className='garri_container'>
        <div className='garri'>
            
        </div>
        <div className='garri_bowl'>
            
        </div>
      </div>
    </div>
  )
}

export default Welcome;
