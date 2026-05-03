import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
  const navigate = useNavigate();
  const [metodoPago, setMetodoPago] = useState('tarjeta');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (metodoPago === 'tarjeta') {
    console.log("Redirigiendo a Pasarela de Pago (Webpay/Stripe)...");
    
    alert("Redirigiendo a la pasarela de pago segura...");
    navigate('/pago-tarjeta'); // <Suposicion que esta es la ruta
  } 
  
  else if (metodoPago === 'transferencia') {
    console.log("Mostrando datos de transferencia bancaria...");
    alert("Pedido reservado. Te redirigiremos a los datos para la transferencia.");
    navigate('/seleccionar-banco'); 
  }
    

    alert("¡Pago procesado con éxito!");
    navigate('/ThankYou'); 
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form-section">
        <h2>Finalizar Compra</h2>
        
    
        <form className="checkout-form" onSubmit={handleSubmit}>
          
          <section className="form-group">
            <h3>1. Información de Envío</h3>
            <div className="fila-inputs">
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellido" required />
            </div>
            <input type="text" placeholder="Dirección (Calle, número, depto)" required />
            <div className="fila-inputs">
              <input type="text" placeholder="Ciudad / Comuna" required />
              <input type="text" placeholder="Región" required />
            </div>
            
            <input type="tel" placeholder="Teléfono de contacto" required />
          </section>

          <section className="form-group">
            <h3>2. Método de Pago</h3>
            <div className="payment-options">
              <label className={`payment-card ${metodoPago === 'tarjeta' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={metodoPago === 'tarjeta'} 
                  onChange={() => setMetodoPago('tarjeta')} 
                  required 
                />
                Tarjeta de Crédito/Débito
              </label>
              <label className={`payment-card ${metodoPago === 'transferencia' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={metodoPago === 'transferencia'} 
                  onChange={() => setMetodoPago('transferencia')} 
                />
                Transferencia Bancaria
              </label>
            </div>
          </section>

        
          <button type="submit" className="confirmar-btn">Pagar Ahora</button>
        </form>
      </div>

      <aside className="checkout-summary-section">
      </aside>
    </div>
  );
}