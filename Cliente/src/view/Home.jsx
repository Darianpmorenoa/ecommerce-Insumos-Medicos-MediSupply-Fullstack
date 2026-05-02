import { Container, Row, Col } from 'react-bootstrap'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { productos } from '../data/products'

const productosDestacados = productos.result.slice(0, 4);

function Home() {
  return (
    <main>
      <Hero />
      <section id="productos-galeria" className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">Productos Recomendados</h2>
          <Row xs={1} sm={2} md={4} className="g-4">
            {productosDestacados.map((p) => (
              <Col key={p.id_producto}>
                <ProductCard
                  id_producto={p.id_producto}
                  nombre_producto={p.nombre_producto}
                  marca={p.marca}
                  imagen={p.imagen}
                  precio={p.precio}
                  descripcion={p.descripcion}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Home;