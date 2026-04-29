import './App.css'
import {productos} from './data/products'
import ProductsCards from './components/productsCards'

function App() {
  
  console.log(productos)
  return (
    <>
{
  productos.result.map((producto) => (
    <ProductsCards
      key={producto.id_producto}
      id_producto={producto.id_producto}
      nombre_producto={producto.nombre_producto}
      descripcion={producto.descripcion}
      imagen={producto.imagen}
      precio={producto.precio}
    />
  ))}
  

      </>
  )
}
export default App
