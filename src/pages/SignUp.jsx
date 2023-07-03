import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [eye, setEye] = useState(false);
    const eyeRefOne = useRef();
    const eyeRefTwo = useRef();

    const handleEye = () => {
        if (eye) {
            setEye(false);
            eyeRefOne.current.type = 'text';
            eyeRefTwo.current.type = 'text';
        }
        else {
            setEye(true);
            eyeRefOne.current.type = 'password';
            eyeRefTwo.current.type = 'password';
        }
    }


    const handlePageLoad = () => {
        setTimeout(() => {
            setWelcome(true);
        }, 2000);
    };

  useEffect(() => {
    handlePageLoad();
  }, []);

  return (
    <div className='w-full min-h-screen text-[#213A5A] flex flex-col items-center px-3 py-5'>
        <h1 className='pt-8 font-semibold text-xl mobile:text-2xl tablet:text-3xl pb-6'>GARRI KINGDOM</h1>
        <p className='text-center mb-4'>Please kindly fill your details in the form below to sign up.</p>
        <div className='w-full max-w-[400px]'>
            <div className='w-[80px] py-2 bg-[#00ABE4] rounded-tl-xl rounded-tr-xl text-center font-semibold text-white'>Sign up</div>
        </div>
        <form className='border border-[#213A5A] w-full max-w-[400px] min-h-[300px] p-5'>
            <div className='flex flex-col gap-y-1 mb-3'>
                <label htmlFor="username" className='font-semibold text-[#213A5A]'>Username: </label>
                <input type="text" className='outline-none py-3 px-2' id='username' placeholder='Enter your username' />
            </div>
            <div className='flex flex-col gap-y-1 mb-3'>
                <label htmlFor="email" className='font-semibold'>Email: </label>
                <input type="email" className='outline-none py-3 px-2' id='email' placeholder='Enter your email' />
            </div>
            <div className='flex flex-col gap-y-1'>
                <label htmlFor="password" className='font-semibold'>Password: </label>
               <div className='w-full flex'>
                    <input type="password" ref={eyeRefOne} className='outline-none w-[90%] py-3 px-2' id='password' placeholder='********' maxlength='8' />
                    <span className="material-symbols-outlined w-[10%] bg-white h-full flex items-center py-3 text-lg mobile:text-xl cursor-pointer select-none" onClick={handleEye}>
                    {eye ? 'visibility': 'visibility_off'}
                    </span>
               </div>
            </div>
            <div className='flex flex-col gap-y-1 mt-2'>
                <label htmlFor="password" className='font-semibold'>Confirm password: </label>
                <input type="password" ref={eyeRefTwo} className='outline-none py-3 px-2' id='password' placeholder='*******' maxlength='8' />
            </div>
            <p className='pt-5 flex items-center text-[13px] mobile:text-[15px] gap-3 ipad:gap-5'>You already have an account? <Link to="/login" className='border-[#213A5A] border-b font-semibold py-1 text-center w-[70px] mobile:w-[100px]'>Login</Link></p>
            <Link to="/login">
                <button className='text-white bg-[#00ABE4] w-full mt-5 py-2'>SIGN UP</button>
            </Link>
        </form>
    </div>
  )
}

export default SignUp;
