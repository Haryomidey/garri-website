import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_ITEM':
                const tempstate = state.filter((item) => action.payload.id === item.id);
                if (tempstate.length > 0) {
                    return state;
                }
                else {
                    return [...state, action.payload]
                }
            case 'REMOVE_ITEM':
                const tempstate2 = state.filter(item => item.id !== action.payload.id)
                return tempstate2;
            case 'INCREASE_ITEM':
                const tempstate3 = state.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quanity:item.quantity + 1 };
                    }
                    else {
                        return item;
                    }
                })
                return tempstate3;
            case 'DECREASE_ITEM':
                const tempstate4 = state.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quanity:item.quantity - 1 };
                    }
                    else {
                        return item;
                    }
                });
                return tempstate4;
            default:
                return state;
        }
    };

    const favReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_FAVE':
                const tempFave = state.filter((item) => action.payload.id === item.id);
                if (tempFave.length > 0) {
                    return state;
                }
                else {
                    return [...state, action.payload]
                }
            case 'REMOVE_FROM_FAVE':
                const tempFave2 = state.filter(item => item.id !== action.payload.id)

                return tempFave2;
            default:
                return state;
        }
    }

  const [state, dispatch] = useReducer(cartReducer, []);
  const [faveState, faveDispatch] = useReducer(favReducer, []);

  return (
    <Context.Provider value={{ state, dispatch, faveState, faveDispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
