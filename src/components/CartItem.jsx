import React from 'react';

const CartItem = ({garri, increaseItemInCart, decreaseItemInCart, removeItemFromCart}) => {
  return (
    <div className='flex items-center text-[#213A5A] justify-between  px-3'>
      <div className='w-[30%]'>
        <p className='text-center pb-2'>{garri.name}</p>
        <img src={garri.image} className='w-full rounded-lg' alt="" />
      </div>
      <p className='font-semibold'>₦{garri.price * garri.quantity}</p>
      <div className='flex items-center gap-2'>
        <button className='px-3 py-1 bg-white cart_button_shadow rounded-md font-bold' onClick={()=> {
          if(garri.quantity > 1){
            decreaseItemInCart(garri);
          }
        }}>-</button>
        <p className='font-semibold'>{garri.quantity}</p>
        <button className='px-3 py-1 bg-white cart_button_shadow rounded-md font-bold' onClick={() => increaseItemInCart(garri)}>+</button>
      </div>
      <div className='font-bold cursor-pointer' onClick={() => removeItemFromCart(garri)}>X</div>
    </div>
  )
}

export default CartItem;
