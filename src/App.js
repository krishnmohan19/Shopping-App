import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Mycart from './components/Mycart';
import ProductList from './components/ProductList';
import Thanku from './components/Thanku';
function App() {
  const [buyProduct,setBuyProduct]=useState([]);

  return (
    <Routes>
        <Route exact path='/' element={<ProductList buyProduct={buyProduct} setBuyProduct={setBuyProduct}/>}/>
        <Route exact path='/cart' element={<Mycart  buyProduct={buyProduct} setBuyProduct={setBuyProduct}/>}/>
        <Route exact path='/thanku' element={<Thanku/>}/>
    </Routes>
  );
}

export default App;
