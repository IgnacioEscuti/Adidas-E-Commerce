import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then(setProducto)
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p style={{ textAlign: "center", padding: "4rem" }}>Producto no encontrado.</p>;
  if (!producto) return <div className="spinner" />;

  return (
    <div className="itemdetail-container">
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
