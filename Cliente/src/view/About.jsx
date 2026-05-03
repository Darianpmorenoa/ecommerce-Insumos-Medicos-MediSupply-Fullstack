import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './About.css';

const About = () => {
  const teamMembers = [
    { 
        id: 1, 
        nombre: "Darian Moreno", 
        cargo: "Frontend Developer", 
        img: "" 
    },
    { 
        id: 2, 
        nombre: "Felipe Salazar", 
        cargo: "Fullstack Developer", 
        img: "" 
    },
    { 
        id: 3, 
        nombre: "Andres Quintero", 
        cargo: "UI Designer", 
        img: "" 
    }
  ];

  return (
    <Container className="py-5 about-container">
      <Row className="align-items-center mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <h2 className="fw-bold about-title">Nuestra Historia</h2>
          <p className="about-lead fw-semibold mb-3">
            En MediSupply, creemos que la salud de calidad debe estar al alcance de todos.
          </p>
          <p className="text-muted">
            Nacimos con el objetivo de simplificar el acceso a insumos médicos esenciales, 
            conectando a instituciones y hogares con los mejores fabricantes del mercado. 
            Nos apasiona la tecnología y cómo esta puede mejorar la vida de las personas.
          </p>
        </Col>
        <Col lg={6} className="about-img-container text-center">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800" 
            alt="Equipo médico trabajando" 
            className="shadow-sm img-fluid"
          />
        </Col>
      </Row>

      <Row className="g-4 mt-2">
        <Col md={6}>
          <Card className="h-100 p-3 about-card shadow-sm">
            <Card.Body>
              <div className="fs-1 mb-2">🚀</div>
              <Card.Title className="about-card-title h4">Nuestra Misión</Card.Title>
              <Card.Text className="about-card-text">
                Facilitar el bienestar de la comunidad proporcionando equipamiento médico 
                confiable, innovador y de alta precisión, garantizando un servicio de 
                excelencia en cada entrega.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 p-3 about-card shadow-sm">
            <Card.Body>
              <div className="fs-1 mb-2">🎯</div>
              <Card.Title className="about-card-title h4">Nuestra Visión</Card.Title>
              <Card.Text className="about-card-text">
                Ser reconocidos como la plataforma e-commerce de insumos médicos líder en el país, 
                destacando por nuestra integridad, rapidez y compromiso con la salud pública.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="team-section py-5 mt-5">
        <h2 className="text-center fw-bold mb-5 about-title">Team</h2>
        <Row className="g-4">
          {teamMembers.map((miembro) => (
            <Col key={miembro.id} xs={12} sm={6} lg={3}>
              <div className="team-card h-100">
                <div className="team-img-wrapper">
                  <img src={miembro.img} alt={miembro.nombre} className="team-img" />
                </div>
                <h5 className="team-name fw-bold">{miembro.nombre}</h5>
                <p className="team-role">{miembro.cargo}</p>
                <div className="social-links mb-2">
                  <a href="#!"><i className="bi bi-linkedin"></i></a>
                  <a href="#!"><i className="bi bi-twitter-x"></i></a>
                  <a href="#!"><i className="bi bi-facebook"></i></a>
                </div>
                <Button className="btn-contact-team">Contact {miembro.nombre.split(' ')[0]}</Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default About;