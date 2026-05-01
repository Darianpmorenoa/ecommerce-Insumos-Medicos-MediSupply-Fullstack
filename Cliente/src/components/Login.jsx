import React, { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom'; // Importante para la navegación
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });

    navigate('/');

  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Bienvenido</h1>
        <p className="subtitle">inicia sesión para continuar</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Password"
              className="full-width-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="forgot-password">
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