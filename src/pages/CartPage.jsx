import React, {useContext} from 'react';
import { Context } from '../../Context';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';

import EmptyCart from '../assets/images/empty-cart.png';


const CartPage = () => {
    const { state, dispatch } = useContext(Context);

    const increaseItemInCart = (item) => {
        dispatch({ type: 'INCREASE_ITEM', payload: item });
    };
    const decreaseItemInCart = (item) => {
        dispatch({ type: 'DECREASE_ITEM', payload: item });
    };
    const removeItemFromCart = (item) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    };

    console.log(state)

  return (
    <div>
        <Navbar />
        <h1 className='pb-2 text-center text-[#213A5A] font-semibold text-xl mobile:text-2xl pt-28'>Cart Page</h1>
        <div className='px-3 min-h-[500px] w-full flex justify-center max-w-[600px] flex-col gap-10 pb-4 mx-auto'>
            {state.length < 1 && (
                <div className='flex flex-col items-center'>
                    <p className='text-xl mt-5 font-semibold text-[#213A5A]'>Your cart is empty!!!</p>
                    <img src={EmptyCart} alt="" />
                </div>
            )}
            {
            state.map(garri => (
                <CartItem 
                    garri={garri}
                    increaseItemInCart={increaseItemInCart}
                    decreaseItemInCart={decreaseItemInCart}
                    removeItemFromCart={removeItemFromCart}
                />
            ))
        }
        </div>
        <div className=''>
            
        </div>
        <Footer />
    </div>
  )
}

export default CartPage;
