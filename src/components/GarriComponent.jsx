import React, { useContext} from 'react';
import GarriCard from './GarriCard';
import GarriDb from '../../GarriDb/GarriDb';
import { Context } from '../../Context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GarriComponent = () => {
    const { state, dispatch, faveDispatch, faveState } = useContext(Context);
    
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

    const addToFavorite = (item) => {
        faveDispatch({ type: 'ADD_TO_FAVE', payload: item });
    };
    
    const removeFromFavorite = (item) => {
        faveDispatch({ type: 'REMOVE_FROM_FAVE', payload: item });
    };

  return (
    <div className='min-h-screen py-14'>
        <h1 className='text-center text-[#213A5A] font-semibold text-2xl border-[#213A5A] border-b-4 w-[200px] mx-auto custom_dot mb-4 pb-2'>Popular Garri</h1>
        <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6 py-4'>
            {GarriDb.map((garri) => {
                garri.quantity = 1;
                return (
                    <GarriCard
                        garri={garri}
                        state={state}
                        faveState={faveState}
                        addItemToCart={addItemToCart}
                        removeItemFromCart={removeItemFromCart}
                        addToFavorite={addToFavorite}
                        removeFromFavorite={removeFromFavorite}
                    />
                )
            })}
            <ToastContainer />
        </div>
    </div>
  )
}

export default GarriComponent;
