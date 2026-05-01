import { Button } from 'react-bootstrap'
import './ProductCard.css'

function ProductCard({ nombre_producto, marca, imagen, precio }) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        {imagen
          ? <img src={imagen} alt={nombre_producto} />
          : <span>🩺</span>
        }
      </div>
      <div className="product-card-body">
        <h6 className="product-card-name">{nombre_producto}</h6>
        <small className="product-card-brand">{marca}</small>
        <p className="product-card-price">${precio.toLocaleString('es-CL')}</p>
        <Button className="product-card-btn">Agregar al carrito</Button>
      </div>
    </div>
  )
}

export default ProductCard