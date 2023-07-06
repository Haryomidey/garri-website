import React, { useState, useContext, useRef, useEffect } from 'react';
import { Context } from '../../Context';
import EmptyCart from '../assets/images/empty-cart.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const { state, dispatch, faveState } = useContext(Context);
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState(false);

    const containerRef = useRef(null);

    useEffect(() => {
        const menuOutsideClick = (e) => {
            if (!containerRef.current.contains(e.target)) {
                setCart(false);
            }
            else {
                setCart(true);
            }
        }

        document.addEventListener('mousedown', menuOutsideClick);

        return () => {
            document.removeEventListener('mousedown', menuOutsideClick);
        }
        
    }, []);

    const handleMenu = () => {
        setMenu(!menu);
    }

    const handleCart = () => {
        setCart(!cart);
    }

    const total = state.reduce((total, item) => {
        return (total + item.price * item.quantity);
    }, 0);

  return (
    <header className='fixed top-0 mt-[-1px] left-0 h-[60px] mobile:h-[100px] w-full bg-[#00ABE4] flex items-center justify-between z-50 shadow-lg px-4 tablet:px-20'>
        <div className='flex items-center justify-between laptop:w-[50%]'>
            <Link to='/'><h1 className='text-sm mobile:text-xl flex flex-col items-center justify-center px-3 mobile:py-1 drop-shadow-md bg-white text-[#213A5A] font-bold rounded-lg'><span>Garri</span><span>Kingdom</span></h1></Link>
            <nav className='hidden laptop:block'>
                <ul className='flex text-white gap-7 pr-20'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        <div className='flex items-center gap-2'>
            <div className='relative flex items-center'>
                <span className='material-symbols-outlined text-white pt-1'><Link to='/favorite'>favorite</Link></span>
                <span className='absolute left-[9px] top-[-4px] text-[11px] font-semibold rounded-full px-1 bg-[#f76262] text-white cursor-pointer'>
                    {faveState.length}
                </span>
            </div>
            <div className='relative' onClick={handleCart}>
                <i className="fa-solid fa-cart-shopping text-[white]"></i>
                <span className='absolute left-[9px] top-[-7px] text-[11px] font-semibold rounded-full px-1 bg-[#f76262] text-white cursor-pointer'>
                    {state.length}
                </span>
            </div>
            <span className={`material-symbols-outlined z-10 laptop:hidden cursor-pointer select-none text-white`} onClick={handleMenu}>{menu ? 'close' : 'menu'}</span>
            <div className='hidden laptop:flex items-center ml-4 text-[white] gap-x-4'>
                <Link to='/login'><button className='px-5 py-2'>Login</button></Link>
                <Link to='/sign-up'><button className='px-5 py-2 bg-[#213A5A] rounded-full'>Sign up</button></Link>
            </div>
        </div>
        <div className={`fixed top-0 transition-all ease duration-300 ${menu ? 'left-0' : 'left-[-100%]'} h-screen w-full bg-[#213A5A]`}>
            <ul className='text-white w-full h-full flex items-center mt-20 gap-y-10 flex-col text-xl'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li>About Us</li>
                <li>Contact Us</li>
                <Link to='/login'><button className=''>Login</button></Link>
                <Link to='/sign-up'><button className='px-5 bg-[#213A5A] rounded-full'>Sign up</button></Link>
            </ul>
        </div>
        {/* Cart Div */}
        <div ref={containerRef} className={`fixed top-0 transition-all ease duration-300 ${cart ? 'left-0' : 'left-[-100%]'} h-screen overflow-y-scroll cart_scrollbar w-[70%] max-w-[300px] bg-[#213A5A] text-white pt-20 tablet:pt-28 flex flex-col items-center px-2 pb-5`}>
            <p className='px-3 text-center mb-5 text-sm font-light'>Nah the page where you fit see the Garri wey you don select be this</p>
            {
                state.map((item) => (
                    <div className='w-full px-5 py-6 cart_border relative'>
                        <img src={item.image} className='w-full' alt="" />
                        <p className='pt-2'>{item.name}</p>
                        <p>Price: <span className='font-semibold'>₦{item.price}</span></p>
                        <p className='absolute top-[30px] right-[30px] bg-[#213A5A] w-[25px] h-[25px] rounded-full pb-1 cursor-pointer drop-shadow-lg flex items-center justify-center' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>x</p>
                    </div>
                ))
            }
            {state.length < 1 && (
                <div className='mt-1 relative w-full text-center'>
                    <p className='absolute translate-x-[-50%] left-[50%] bottom-0 rounded-3xl  text-white py-2 w-[85%] '>Your cart is <span className='text-[#F23129]'>Empty!</span></p>
                    <img src={EmptyCart} className='w-full' alt="" />
                    {/* <span className="material-symbols-outlined absolute top-[40px] text-[60px] rotate-[0deg] text-[#cc720a] icon_filled">
                        warning
                    </span> */}
                </div>
            )}
            {state.length > 0 && <div className='my-5 w-full flex items-center justify-end px-1'>Total: <span className='font-semibold'>₦{total}</span></div>}
            <Link to='/cart'>
                <button className='mt-2 bg-[#F23129] px-7 py-2'>View Cart Details</button>
            </Link>
        </div>
    </header>
  )
}

export default Navbar;
