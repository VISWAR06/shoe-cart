
import Heeader from './coompoents/Heeader';
import Cart from './coompoents/Cart';
import Home from './coompoents/Home';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
  <>
  <BrowserRouter>
  <Heeader/>
  
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
    
  
  </BrowserRouter>
  </>
  );
}

export default App;
