import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6'; 
import './Register.css';

export default function ResetPassword() {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }


    
    // lógica para actualizar en la base de datos

    console.log("Nueva contraseña establecida:", passwords.newPassword);
    alert("Contraseña actualizada con éxito");
    navigate('/login');
  };

  return (
    <div className="register">
      <div className="register-card">
        <h1>Nueva Contraseña</h1>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Ingresa tu nueva clave de acceso
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Nueva Password</label>
            <div className="ojo">
              <input 
                type={showPass ? "text" : "password"} 
                name="newPassword" 
                placeholder="Ej: ********" 
                onChange={handleChange} 
                required 
              />
              <span className="ojo-icono" onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="input">
            <label>Confirmar Nueva Password</label>
            <div className="ojo">
              <input 
                type={showConfirmPass ? "text" : "password"} 
                name="confirmPassword" 
                placeholder="Ej: ********" 
                onChange={handleChange} 
                required 
              />
              <span className="ojo-icono" onClick={() => setShowConfirmPass(!showConfirmPass)}>
                {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="register-btn">Actualizar Contraseña</button>
        </form>

        <p className="login-cards">
          <Link to="/login" className="link">Volver al inicio de sesión</Link>
        </p>
      </div>
    </div>
  );
}
