import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritePage';

function App() {

  return (
    <div className="font-[Quicksand]">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
      </Routes>
    </div>
  )
}

export default App;
