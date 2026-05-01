import { Container, Button } from 'react-bootstrap'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <span className="hero-badge">Insumos médicos de calidad</span>
          <h1 className="hero-title">Tu salud merece lo mejor</h1>
          <p className="hero-subtitle">
            Encuentra todo lo que necesitas con la mejor atención y los mejores precios.
          </p>
          <Button className="hero-btn">Ver Productos</Button>
        </div>
      </Container>
    </section>
  )
}

export default Hero