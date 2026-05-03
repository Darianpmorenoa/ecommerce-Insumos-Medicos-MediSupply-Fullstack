import { Container, Row, Col } from "react-bootstrap";
import { productos } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <Container className="py-4">
      <h2 className="mb-4">🛍️ Productos</h2>

      <Row>
        {productos.result.map((p) => (
          <Col key={p.id_producto} md={3} className="mb-4">
            <ProductCard {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}