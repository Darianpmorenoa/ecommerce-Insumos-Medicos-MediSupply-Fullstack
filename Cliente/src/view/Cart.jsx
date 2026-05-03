import { useContext } from "react";
import { CartContext } from '../context/CartContext'
import { Button, ListGroup, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Container className="py-5" style={{ minHeight: "80vh" }}>
      <h2 className="mb-4 fw-bold text-primary">Tu Carrito de Compras 🛒</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h4>Tu carrito está vacío.</h4>
          <p className="text-muted">¡Agrega algunos productos médicos para comenzar!</p>
          <Link to="/">
            <Button variant="primary" className="mt-3">Volver a la tienda</Button>
          </Link>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            <ListGroup variant="flush" className="shadow-sm rounded">
              {cart.map((item) => (
                <ListGroup.Item key={item.id_producto} className="py-3">
                  <Row className="align-items-center">
                    <Col xs={3} md={2}>
                      <img src={item.imagen} alt={item.nombre_producto} className="img-fluid rounded" />
                    </Col>
                    <Col xs={9} md={5}>
                      <h6 className="mb-0 fw-bold">{item.nombre_producto}</h6>
                      <small className="text-muted">{item.marca}</small>
                    </Col>
                    <Col xs={6} md={3} className="d-flex align-items-center justify-content-center mt-2 mt-md-0">
                      <Button 
                        variant="outline-danger" 
                        size="sm" 
                        onClick={() => removeFromCart(item.id_producto)}
                      > - </Button>
                      <span className="mx-3 fw-bold">{item.count}</span>
                      <Button 
                        variant="outline-success" 
                        size="sm" 
                        onClick={() => addToCart(item)}
                      > + </Button>
                    </Col>
                    <Col xs={6} md={2} className="text-end mt-2 mt-md-0">
                      <span className="fw-bold">${(item.precio * item.count).toLocaleString('es-CL')}</span>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={4}>
            <div className="p-4 bg-light shadow-sm rounded border mt-4 mt-md-0">
              <h5 className="fw-bold mb-3">Resumen de Compra</h5>
              <div className="d-flex justify-content-between mb-3 fs-5">
                <span>Total:</span>
                <span className="fw-bold text-primary">${totalCart.toLocaleString('es-CL')}</span>
              </div>
              <Button onClick={() => navigate('/checkout')} variant="success" className="w-100 fw-bold py-2 shadow-sm">
                Ir a pagar 💳
              </Button>
              <Link to="/" className="d-block text-center mt-3 text-decoration-none text-muted">
                Continuar comprando
              </Link>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;