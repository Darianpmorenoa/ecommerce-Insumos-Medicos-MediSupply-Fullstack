import { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.nombre.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    console.log("Datos enviados:", formData);
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    navigate("/login"); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ maxWidth: "450px", width: "100%" }} className="shadow-lg border-0 rounded-4">
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Crear Cuenta</h2>
            <p className="text-muted small">Únete a MediSupply para gestionar tus insumos</p>
          </div>

          {error && <Alert variant="danger" className="py-2 small text-center">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                placeholder="Juan Pérez"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="usuario@ejemplo.com"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                placeholder="******"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="small fw-bold">Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="******"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 py-2 fw-bold rounded-pill shadow-sm">
              Registrarse
            </Button>
          </Form>

          <div className="text-center mt-4">
            <p className="small mb-0">
              ¿Ya tienes cuenta? <Link to="/login" className="text-primary fw-bold text-decoration-none">Inicia sesión aquí</Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;