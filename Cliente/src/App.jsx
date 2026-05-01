import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App