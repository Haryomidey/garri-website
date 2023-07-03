import React from 'react';

const HappyClient = () => {


  return (
    
    <div className='w-full min-h-[400px] bg-[#000000bb] flex flex-col items-center justify-center'>
        <h1 className='text-white text-center mt-9 text-xl font-semibold'>Food for Saparians!!!</h1>
        <div className='flex flex-wrap justify-center w-full px-5 gap-x-2'>
            <div className='text-center my-4 w-full ipad:w-1/2 laptop:w-[30%] bg-[#00000055] text-white py-8 rounded-3xl'>
                <p>Number of Consumer</p>
                <p>+500k</p>
            </div>
            <div className='text-center my-4 w-full ipad:w-1/2 laptop:w-[30%] bg-[#00000055] text-white py-8 rounded-3xl'>
                <p>Happy clients</p>
                <p>+500k</p>
            </div>
            <div className='text-center my-4 w-full ipad:w-1/2 laptop:w-[30%] bg-[#00000055] text-white py-8 rounded-3xl'>
                <p>Live Saved</p>
                <p>+500k</p>
            </div>
        </div>
    </div>
  )
}

export default HappyClient;
