import React, {useState, useContext} from 'react';
import Navbar from '../components/Navbar';
import GarriCard from '../components/GarriCard';
import GarriDb from '../../GarriDb/GarriDb';
import { Context } from '../../Context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavoritePage = () => {
     const { state, dispatch, faveState } = useContext(Context);
    const [toastifyVal, setToastifyVal] = useState(false);
    
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
        <h1 className='pt-36 text-center text-2xl font-semibold'>Favorite Garri</h1>
        <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6 py-4'>
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
        
        <ToastContainer />
    </div>
  )
}

export default FavoritePage;
