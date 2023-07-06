import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className='w-full min-h-screen text-[#213A5A] flex flex-col items-center px-8 py-5'>
        <h1 className='pt-8 font-semibold text-xl mobile:text-2xl tablet:text-3xl pb-6'>GARRI KINGDOM</h1>
        <p className='text-center mb-4'>Please kindly fill your details in the form below to login.</p>
        <div className='w-full max-w-[400px]'>
            <div className='w-[80px] py-2 bg-[#00ABE4] rounded-tl-xl rounded-tr-xl text-center font-semibold text-white'>Login</div>
        </div>
        <form className='border border-[#213A5A] w-full max-w-[400px] min-h-[300px] p-5'>
            {/* <div className='flex flex-col gap-y-1 mb-3'>
                <label htmlFor="username" className='font-semibold text-[#213A5A]'>Username: </label>
                <input type="text" className='outline-none py-3 px-2' id='username' placeholder='Enter your username' />
            </div> */}
            <div className='flex flex-col gap-y-1 mb-3'>
                <label htmlFor="email" className='font-semibold'>Email: </label>
                <input type="email" className='outline-none py-3 px-2' id='email' placeholder='Enter your email' />
            </div>
            <div className='flex flex-col gap-y-1'>
                <label htmlFor="password" className='font-semibold'>Password: </label>
                <input type="password" className='outline-none py-3 px-2' id='password' placeholder='********' />
            </div>
            <p className='pt-5 flex items-center text-[13px] mobile:text-[15px] gap-3 ipad:gap-5'>You don't have an account? <Link to="/sign-up" className='border-[#213A5A] border-b font-semibold py-1 text-center w-[70px] mobile:w-[100px]'>Sign up</Link></p>
            <Link to="/">
                <button className='text-white bg-[#00ABE4] w-full mt-5 py-2'>LOGIN</button>
            </Link>
        </form>
    </div>
  )
}

export default Login;
