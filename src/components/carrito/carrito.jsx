import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContextt";
import "./Carrito.css";

function Carrito({ carritoAbierto, cerrarCarrito }) {
  const { carrito, eliminarDelCarrito, vaciarCarrito, totalCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  const irAlCheckout = () => {
    cerrarCarrito();
    navigate("/checkout");
  };

  return (
    <>
      <div
        className={`overlay ${carritoAbierto ? "visible" : ""}`}
        onClick={cerrarCarrito}
      />

      <div className={`carrito-panel ${carritoAbierto ? "open" : ""}`}>
        <div className="carrito-header">
          <h2>Carrito de compras</h2>
          <button className="cerrar" onClick={cerrarCarrito}>✕</button>
        </div>

        {carrito.length === 0 ? (
          <div className="carrito-vacio">
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="carrito-items">
              {carrito.map((item) => (
                <div key={item.id} className="item-carrito">
                  <img src={item.imagen} alt={item.nombre} className="item-img" />
                  <div className="item-info">
                    <h3>{item.nombre}</h3>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>${item.precio * item.cantidad}</p>
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="borrar-btn"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="carrito-footer">
              <div className="total-text">
                <span>Total</span>
                <span>${totalCarrito()}</span>
              </div>
              <button className="checkout-btn" onClick={irAlCheckout}>
                Finalizar compra
              </button>
              <button className="vaciar-btn" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Carrito;
