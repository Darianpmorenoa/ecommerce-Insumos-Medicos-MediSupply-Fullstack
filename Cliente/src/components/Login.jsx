import React, { useState, useContext } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../view/Auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });

    login("token_fake");
    navigate('/');

  };

  return (
    <div className="login">
      <div className="login-card">
        <h1>Bienvenido</h1>
        <p className="subtitle">inicia sesión para continuar</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input">
            <label>Password</label>
            <div className="ojo">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              className="full-width-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />

            <span 
                className="ojo-icono"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              
          </div>
          </div>

          <div className="olvide-password">
            <Link to="/ResetPassword">Olvidé mi contraseña</Link>
          </div>

          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>

        <p className="register-text">
          ¿No tienes una cuenta? <Link to="/register">Regístrate acá</Link>
        </p>
      </div>
    </div>
  );
}