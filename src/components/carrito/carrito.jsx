import { useContext } from "react";
import { CartContext } from "../../context/CartContextt";
import "./Carrito.css";

function Carrito({ carritoAbierto, cerrarCarrito }) {
  const { carrito, eliminarDelCarrito, vaciarCarrito, totalCarrito } = useContext(CartContext);

  if (!carritoAbierto) return null;

  return (
    <>
      <div className="overlay visible" onClick={cerrarCarrito}></div>

      <div className={`carrito-panel open`}>
        <button className="cerrar" onClick={cerrarCarrito}>X</button>
        <h2>Carrito de compras</h2>

        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            {carrito.map((item) => (
              <div key={item.id} className="item-carrito">
                <img src={item.imagen} alt={item.nombre} className="item-img" />

                <div className="item-info">
                  <h3>{item.nombre}</h3>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio unitario: ${item.precio}</p>
                  <p>Subtotal: ${item.precio * item.cantidad}</p>

                  <button
                    onClick={() => eliminarDelCarrito(item.id)}
                    className="borrar-btn"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            <div className="carrito-buttons">
            <h3 className="total-text">Total: ${totalCarrito()}</h3>
<button onClick={cerrarCarrito} className="checkout-btn">
  <a href="/checkout" style={{ color: "white", textDecoration: "none" }}>
    Finalizar compra
  </a>
</button>
              <button onClick={vaciarCarrito} className="vaciar-btn">Vaciar carrito</button>

            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Carrito;
