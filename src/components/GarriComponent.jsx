import React, {useState, useContext} from 'react';
import GarriCard from './GarriCard';
import GarriDb from '../../GarriDb/GarriDb';
import { Context } from '../../Context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GarriComponent = () => {
    const { state, dispatch, faveDispatch } = useContext(Context);
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

    const addToFavorite = (item) => {
        faveDispatch({ type: 'ADD_TO_FAVE', payload: item });
    };
    
    const removeFromFavorite = (item) => {
        faveDispatch({ type: 'REMOVE_FROM_FAVE', payload: item });
    };

  return (
    <div className='min-h-screen py-14'>
        <h1 className='text-center font-semibold text-2xl'>Popular Garri</h1>
        <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6 py-4 '>
            {GarriDb.map((garri) => (
                <GarriCard
                    garri={garri}
                    state={state}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    setToastifyVal={setToastifyVal}
                    addToFavorite={addToFavorite}
                    removeFromFavorite={removeFromFavorite}
                    favoritePage = 'No'
                />
            ))}
            <ToastContainer />
        </div>
    </div>
  )
}

export default GarriComponent;
