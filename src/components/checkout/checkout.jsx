import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContextt";
import { db } from "../../firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

function Checkout() {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ordenId, setOrdenId] = useState(null);

  const finalizarCompra = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: { nombre, email, telefono },
      items: carrito,
      total: totalCarrito,
      fecha: new Date(),
    };

    const docRef = await addDoc(collection(db, "ordenes"), orden);

    setOrdenId(docRef.id);      // 🔥 Guardamos el ID generado por Firestore
    vaciarCarrito();            // 🔥 Vaciamos el carrito después de comprar
  };

  if (ordenId) {
    return (
      <div className="checkout-success">
        <h2>✅ Compra realizada con éxito!</h2>
        <p>Tu número de orden es:</p>
        <h3>{ordenId}</h3>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar compra</h2>

      <form onSubmit={finalizarCompra}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />

        <button type="submit">Confirmar compra ({totalCarrito})</button>
      </form>
    </div>
  );
}

export default Checkout;
