import { useContext } from "react";
import { AuthContext } from "./Auth";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

export default function Profile() {
  const { logout } = useContext(AuthContext);
  const { cart, totalCart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <h2 className="mb-4">👤 Mi Perfil</h2>

      <div className="row">
        
        {/* SIDEBAR */}

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h5>Usuario</h5>
            <p>Usuario #1</p>

            <Button variant="danger" onClick={logout}>
              Cerrar sesión
            </Button>
          </div>
        </div>


        {/* CONTENIDO */}


        <div className="col-md-9">
          
          {/* RESUMEN */}
          <div className="card p-4 mb-4 shadow-sm">
            <h5>Resumen</h5>
            <p>Total en carrito:</p>
            <h4 className="text-primary">
              ${totalCart.toLocaleString("es-CL")}
            </h4>
          </div>
          

          {/* PRODUCTOS */}


          <div className="card p-4 shadow-sm">
            <h5>Mis productos</h5>

            {cart.length === 0 ? (
              <p>No tienes productos en el carrito</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id_producto}
                  className="d-flex justify-content-between align-items-center border-bottom py-2"
                >
                  <div>
                    <strong>{item.nombre_producto}</strong>
                    <br />
                    <small>Cantidad: {item.count}</small>
                  </div>

                  <div>
                    <span className="me-3">
                      ${(item.precio * item.count).toLocaleString("es-CL")}
                    </span>

                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => removeFromCart(item.id_producto)}
                    >
                      ❌
                    </Button>
                  </div>
                </div>
              ))
            )}

            {cart.length > 0 && (
              <Button
                variant="warning"
                className="mt-3"
                onClick={clearCart}
              >
                Vaciar carrito
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}