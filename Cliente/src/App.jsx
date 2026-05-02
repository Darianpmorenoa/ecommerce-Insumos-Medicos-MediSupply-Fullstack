
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './view/Home';
import Login from './components/Login'; 
import Register from './view/Registro'; 
import Cart from './view/Cart'; 
import ProductDetail from "./view/ProductDetail";
import ResetPassword from './components/ResetPassword';
import NotFound from './view/NotFound'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;