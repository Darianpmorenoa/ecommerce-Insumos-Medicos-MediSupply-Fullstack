import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import './Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log(formData);

    navigate('/login');
};

  return (
    <div className="register">
      <div className="register-card">
        <h1>Registro</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="fila-inputs">
            <div className="input">
              <label>Nombre</label>
              <input type="text" name="nombre" placeholder="Ej: Juan" onChange={handleChange} required />
            </div>
            <div className="input">
              <label>Apellido</label>
              <input type="text" name="apellido" placeholder="Ej: Pérez" onChange={handleChange} required />
            </div>
          </div>

          <div className="input">
            <label>Teléfono</label>
            <input type="tel" name="telefono" placeholder="Ej: +56...." onChange={handleChange} required />
          </div>

          <div className="input">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Ej: usuario@ejemplo.com" onChange={handleChange} required />
          </div>

          <div className="input">
            <label>Password</label>
            <div className="ojo">
              <input 
                type={showPass ? "text" : "password"} 
                name="password" 
                placeholder="Ej: ********" 
                onChange={handleChange} 
                required 
              />
              
              <span className="ojo-icono" 
              onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="input">
            <label>Confirme su Password</label>
            <div className="ojo">
              <input 
                type={showConfirmPass ? "text" : "password"} 
                name="confirmPassword" 
                placeholder="Ej: ********" 
                onChange={handleChange} 
                required 
              />
              <span className="ojo-icono" 
              onClick={() => setShowConfirmPass(!showConfirmPass)}>
                {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="register-btn">Registrarme</button>
        </form>

        <p className="login-cards">
          ¿Ya tienes una cuenta? <Link to="/login" className="link">Inicia sesión acá</Link>
        </p>
      </div>
    </div>
  );
}