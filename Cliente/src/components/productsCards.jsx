function ProductsCards({ id_producto, nombre_producto, descripcion, imagen, precio }) {
    return (
        <div key={id_producto}>
            <h2>{nombre_producto}</h2>
            <p>{descripcion}</p>
            <img src={imagen} alt={nombre_producto} />
            <p>Precio: ${precio}</p>
        </div>
    )
}

export default ProductsCards;
