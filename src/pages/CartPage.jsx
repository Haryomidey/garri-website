import React, {useState, useContext} from 'react';
import { Context } from '../../Context';
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';


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

  return (
    <div>
        <Navbar />
        <h1 className='pb-2 text-center text-[#213A5A] font-semibold text-xl mobile:text-2xl pt-28'>Cart Page</h1>
        <div className='px-3 min-h-[500px] flex flex-col gap-10 pb-4'>
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
    </div>
  )
}

export default CartPage;
