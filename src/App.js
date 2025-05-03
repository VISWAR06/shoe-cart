
import Heeader from './coompoents/Heeader';
import Cart from './coompoents/Cart';
import Home from './coompoents/Home';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const[cart,setCart]=useState([])
  return (
  <>
  
  <BrowserRouter>
  
  <Heeader/>
    <div>
    
    <Routes>
    <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
    </div>
    
   
  </BrowserRouter>
  </>
  );
}

export default App;
