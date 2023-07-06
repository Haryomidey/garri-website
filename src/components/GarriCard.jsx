import React from 'react';

const GarriCard = ({ garri, state, faveState, addItemToCart, removeItemFromCart, addToFavorite, removeFromFavorite}) => {

    garri.quantity = 1;

  return (
    <div className='bg-white w-full mobile:w-[80%] ipad:w-[40%] tablet:w-[30%] h-[350px] laptop:w-[25%] desktop:w-[20%] flex flex-col custom_card_shadow relative rounded-md overflow-hidden' key={garri.id}>
        <div className='w-full h-[200px] relative'>
            <img src={garri.image} className='w-full h-full object-cover' alt="" />
            <div className='w-full h-full bg-[#1e1d1d45] absolute top-0'>
                
            </div>
        </div>
        <div className='p-3'>
            <div className='text-[#213A5A]'>
                <h1 className='font-semibold'>{garri.name}</h1>
                <p>Rating: <span className='font-semibold'>({garri.rating})</span></p>
                <p>Price: <span className='font-semibold'>₦{garri.price}</span></p>
                {
                    state.find((e)=> e.id === garri.id) ? (
                        <button className={`text-center w-full bg-[green] text-white mt-2 rounded py-1`} onClick={() => {
                            removeItemFromCart(garri);
                        }}>Remove from cart</button>
                    ) 
                    :
                    (
                        <button className={`text-center w-full bg-[#f76262] text-white mt-2 rounded py-1`} onClick={() => {
                            addItemToCart(garri);
                        }}>Add to cart</button>
                    )
                }
            </div>
        </div>
        {
            faveState.find((e)=> e.id === garri.id) ? (
                <span className={`material-symbols-outlined absolute top-2 right-2 cursor-pointer select-none text-[#dd2626] icon_filled`} onClick={() => {
                    removeFromFavorite(garri);
                }}>favorite</span>
            )
            :
            (
                <span className={`material-symbols-outlined absolute top-2 right-2 cursor-pointer select-none text-[#dd2626]`} onClick={() => {
                    addToFavorite(garri);
                }}>favorite</span>
            )
        }
    </div>
  )
}

export default GarriCard;
