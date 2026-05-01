import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../view/Auth'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

function Header() {
  const { isLogged, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };


  
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
              {['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4'].map(cat => (
                <NavDropdown.Item key={cat} href="#">{cat}</NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/nosotros" className="header-link">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="header-link">Contacto</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
            <Nav.Link as={Link} to="/carrito" className="header-cart">🛒</Nav.Link>

            {isLogged ? (
              <Button onClick={handleLogout} className="header-btn-login">
                Cerrar Sesión
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
  )
}

export default Header