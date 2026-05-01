import { useContext } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../view/Auth";
import { CartContext } from "../context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  const { isLogged, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <Navbar expand="lg" className="header py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="header-brand">
          Medi<span>Supply</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-principal" className="header-toggle" />

        <Navbar.Collapse id="nav-principal">
          <Nav className="me-auto gap-1 mt-2 mt-lg-0">
            <Nav.Link as={Link} to="/" className="header-link">Home</Nav.Link>

            <NavDropdown title="Categorías" id="dropdown-categorias" className="header-link">
              {["Salud", "Terapia", "Diagnóstico"].map(cat => (
                <NavDropdown.Item key={cat} href="#">
                  {cat}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/nosotros" className="header-link">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="header-link">Contacto</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">

          
            <Nav.Link as={Link} to="/carrito" className="header-cart position-relative">
              🛒
              {totalItems > 0 && (
                <Badge
                  pill
                  bg="info"
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "0.65rem" }}
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>

            
            {isLogged ? (
              <Button onClick={handleLogout} className="header-btn-login">
                Cerrar sesión
              </Button>
            ) : (
              <>
                <Button as={Link} to="/login" className="header-btn-login">
                  Login
                </Button>
                <Button as={Link} to="/register" className="header-btn-login">
                  Registro
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;