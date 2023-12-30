import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Productfilter from './components/Productfilter';
import Products from './components/Products';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import WishList from './components/WishList';


 



function App() {
  return (
    <>
      <Header />
      <div className="d-flex ">
        <div className="col-lg-3">
          <Productfilter/>
        </div>
        <div className="col-lg-9 div-container ">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:productId" element={<SingleProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/wishlist" element={<WishList/>}/>
          </Routes></div>
      
      
    </div>
    </>
  );
}

export default App;
