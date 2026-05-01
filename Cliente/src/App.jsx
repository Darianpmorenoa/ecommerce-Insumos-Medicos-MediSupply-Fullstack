import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
//import Login from './pages/Login';
import Register from './pages/Registro';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/registro" element={<Register />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;