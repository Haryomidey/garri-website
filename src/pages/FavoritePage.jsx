import React, {useContext} from 'react';
import Navbar from '../components/Navbar';
import GarriCard from '../components/GarriCard';
import { Context } from '../../Context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorite from '../assets/images/favorite-image.png';
import Footer from '../components/Footer';

const FavoritePage = () => {
     const { state, dispatch, faveState } = useContext(Context);
    
    const addItemToCart = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
        toast.success("Item Added To Cart !", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
        });
    };
    
    const removeItemFromCart = (item) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
         toast.error("Item Remove From Cart !", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
        });
    };

  return (
    <div className='w-full min-h-screen'>
        <Navbar />
        <h1 className='pt-36 text-center text-2xl font-semibold text-[#213A5A]'>Favorite Garri</h1>
        <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6 py-4 pb-20'>
            {faveState.map((garri) => (
                <GarriCard
                    garri={garri}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    state={state}
                    favoritePage = 'Yes'
                />
            ))}
        </div>
        {faveState.length < 1 && (
            <div className='flex flex-col gap-y-6 items-center pb-20'>
                <img src={Favorite} alt="" />
                <p className='font-semibold text-xl text-[#213A5A]'>No Favorite Garri Yet!!!</p>
            </div>
        )}
        <ToastContainer />
        <Footer />
    </div>
  )
}

export default FavoritePage;
