import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContextt";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
import "./Checkout.css";  
  function Checkout() {
  const { carrito, totalCarrito, totalUnidades, vaciarCarrito } = useContext(CartContext);

  const [datos, setDatos] = useState({ nombre: "", email: "" });
  const [ordenId, setOrdenId] = useState("");

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const finalizarCompra = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: datos,
      items: carrito,
      total: totalCarrito(),
      cantidad: totalUnidades(),
      fecha: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, "ordenes"), orden);

    setOrdenId(docRef.id);
    vaciarCarrito();
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar compra</h2>

      {ordenId ? (
        <div className="mensaje-final">
          <h2> ¡Gracias por tu compra!</h2>
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

          <button className="confirmar-btn" type="submit">
            Confirmar compra
          </button>
        </form>
      )}
    </div>
  );
}


export default Checkout;