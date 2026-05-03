import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.nombre}! Hemos recibido tu mensaje.`);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <Container className="py-5 contact-container">
      <h2 className="fw-bold text-center mb-5 contact-title">Contáctanos</h2>
      <Row className="justify-content-center">
        <Col md={5} className="mb-4">
          <Card className="border-0 shadow-sm p-4 text-white h-100 contact-info-card">
            <h4 className="mb-4 fw-bold">Información de Contacto</h4>
            <div className="mb-3">
              <p className="mb-1 contact-icon-title fw-bold">📍 Dirección</p>
              <p className="small">Av. Providencia 1234, Santiago, Chile</p>
            </div>
            <div className="mb-3">
              <p className="mb-1 contact-icon-title fw-bold">📞 Teléfono</p>
              <p className="small">+56 9 1234 5678</p>
            </div>
            <div className="mb-3">
              <p className="mb-1 contact-icon-title fw-bold">✉️ Email</p>
              <p className="small">contacto@medisupply.cl</p>
            </div>
            <p className="mt-auto small italic text-muted">⌚ Horario: Lunes a Viernes 09:00 - 18:00</p>
          </Card>
        </Col>
       
        <Col md={7}>
          <Card className="border-0 shadow-sm p-4 contact-form-card">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold contact-form-label">Nombre Completo</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: Darian Moreno" 
                  required
                  className="contact-form-input"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold contact-form-label">Correo Electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="nombre@correo.com" 
                  required
                  className="contact-form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold contact-form-label">Mensaje</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="¿Cómo podemos ayudarte?" 
                  required
                  className="contact-form-input"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                />
              </Form.Group>

              <Button 
                type="submit" 
                className="w-100 fw-bold py-2 contact-btn-submit"
              >
                Enviar Mensaje
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;