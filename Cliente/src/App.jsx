import { Routes, Route, useLocation } from 'react-router-dom';
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
import ProductDetail from './view/ProductDetail';
import ResetPassword from './view/ResetPassword';
import Checkout from './view/Checkout';
import ThankYou from './view/ThankYou';
import NotFound from './view/NotFound';
import Contact from './view/Contact';
import About from './view/About';

import AdminLogin from './view/admin/AdminLogin';
import AdminHome from './view/admin/AdminHome';
import AdminProducts from './view/admin/AdminProducts';
import AdminOrders from './view/admin/AdminOrders';
import AdminUsers from './view/admin/AdminUsers';

function App() {
  const { isLogged, rol } = useContext(AuthContext);
  const { pathname } = useLocation();

  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Header />}
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/profile" element={isLogged ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<About />} />
    

        {/* Rutas admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/home" element={rol === 'admin' ? <AdminHome /> : <Navigate to="/admin" />} />
        <Route path="/admin/productos" element={rol === 'admin' ? <AdminProducts /> : <Navigate to="/admin" />} />
        <Route path="/admin/ordenes" element={rol === 'admin' ? <AdminOrders /> : <Navigate to="/admin" />} />
        <Route path="/admin/usuarios" element={rol === 'admin' ? <AdminUsers /> : <Navigate to="/admin" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;