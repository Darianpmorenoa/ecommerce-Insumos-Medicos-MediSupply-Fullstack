import { useSearchParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { productos } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [searchParams] = useSearchParams()
  const categoriaActiva = searchParams.get('categoria')

  const productosFiltrados = categoriaActiva
    ? productos.result.filter((p) => p.categoria === categoriaActiva)
    : productos.result

  return (
    <Container className="py-4">
      <h2 className="mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-dark)' }}>
        {categoriaActiva ? categoriaActiva : 'Todos los productos'}
      </h2>
      <p className="text-muted mb-4">{productosFiltrados.length} productos encontrados</p>

      <Row>
        {productosFiltrados.map((p) => (
          <Col key={p.id_producto} md={3} className="mb-4">
            <ProductCard {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}