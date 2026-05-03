
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './view/Auth';
import { Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './view/Home';
import Login from './view/Login'; 
import Register from './view/Register';
import Profile from './view/Profile';
import Products from './view/Products';
import Cart from './view/Cart'; 
import ProductDetail from "./view/ProductDetail";
import ResetPassword from './view/ResetPassword';
import Checkout from './view/Checkout';
import ThankYou from './view/ThankYou';
import NotFound from './view/NotFound'; 

function App() {

  const { isLogged } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/profile" element={isLogged ? <Profile /> : <Navigate to="/login" />}/>
        <Route path="/carrito" element={<Cart />} />

        <Route path="/productos" element={<Products />} />

        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;