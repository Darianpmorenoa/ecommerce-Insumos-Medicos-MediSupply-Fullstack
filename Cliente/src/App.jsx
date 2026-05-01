import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './view/Auth';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword'


function App() {

  const { isLogged } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isLogged ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={isLogged ? <Navigate to="/" /> : <Register />} />
        



        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App