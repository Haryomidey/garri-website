import React from 'react';

const Footer = () => {
  return (
    <div className='w-full min-h-[60vh] bg-[#213A5A] text-white px-3 pt-7'>
      <ul className='w-full h-full flex flex-wrap gap-x-4 gap-y-5 mobile:gap-x-16'>
        <li className='w-full  mobile:w-[40%]'>
            <h1 className='font-semibold text-xl'>Garri Kingdom</h1>
            <p className='font-light mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa veritatis quia eos quae accusamus consequuntur.</p>
        </li>
        <li className='w-full mobile:w-[40%]'>
            <ul className='w-full flex flex-col gap-y-2'>
                <li className='font-light'>Home</li>
                <li className='font-light'>About Us</li>
                <li className='font-light'>Contact Us</li>
            </ul>
        </li>
        <li className='w-full mobile:w-[40%]'>
            <h1 className='font-semibold mb-2'>About Us</h1>
            <ul className='w-full flex flex-col gap-y-2'>
                <li className='font-light'>Our Mission</li>
                <li className='font-light'>Our Vision</li>
                <li className='font-light'>Code of Ethics</li>
            </ul>
        </li>
        <li className='w-full mobile:w-[40%]'>
            <h1 className='font-semibold mb-2'>Social</h1>
            <ul className='w-full flex flex-col gap-y-2'>
                <li className='font-light'>Email</li>
                <li className='font-light'>Facebook</li>
                <li className='font-light'>Whatsapp</li>
            </ul>
        </li>
      </ul>
      <div className='w-full bg-[#ffffffbe] mt-4 text-[#213A5A] py-3 px-3 ipad:text-[15px] flex items-center '>&copy; Oladiipo Ayanlekan Ayomide 2023.</div>
    </div>
  )
}

export default Footer;
