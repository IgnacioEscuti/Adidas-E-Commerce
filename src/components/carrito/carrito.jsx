import { useContext } from "react";
import { CartContext } from "../../context/cartContextt";
import "./Carrito.css";

function Carrito({ carritoAbierto, cerrarCarrito }) {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CartContext);

  if (!carritoAbierto) return null;

  const totalCarrito = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

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
                
                <div>
                  <h3>{item.nombre}</h3>

                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio unitario: ${item.precio}</p>
                  <p><strong>Subtotal: ${item.precio * item.cantidad}</strong></p>

                  <button
                    onClick={() => eliminarDelCarrito(item.id)}
                    className="borrar-btn"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            <h3 className="total-general">Total: ${totalCarrito}</h3>

            <button onClick={vaciarCarrito} className="vaciar-btn">
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Carrito;
