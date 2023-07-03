import React from 'react';
import QoutePic from '../assets/images/for-what.jpg';

const PopularQuote = () => {
  return (
    <div className='w-full min-h-[300px] py-5'>
      <img src={QoutePic} className='w-full max-w-[350px] mx-auto rounded-lg' alt="" />
    </div>
  )
}

export default PopularQuote;
