import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContextt";
import { createOrder } from "../../services/api.js";
import "./Checkout.css";

function Checkout() {
  const { carrito, totalCarrito, totalUnidades, vaciarCarrito } = useContext(CartContext);

  const [datos, setDatos] = useState({ nombre: "", email: "" });
  const [ordenId, setOrdenId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const finalizarCompra = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { id } = await createOrder({
        comprador: datos,
        items: carrito,
        total: totalCarrito(),
        cantidad: totalUnidades(),
      });

      setOrdenId(id);
      vaciarCarrito();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar compra</h2>

      {ordenId ? (
        <div className="mensaje-final">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu código de seguimiento es:</p>
          <h3>{ordenId}</h3>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={finalizarCompra}>
          <label>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            required
            value={datos.nombre}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={datos.email}
            onChange={handleChange}
          />

          <button className="confirmar-btn" type="submit" disabled={loading}>
            {loading ? "Procesando..." : "Confirmar compra"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
