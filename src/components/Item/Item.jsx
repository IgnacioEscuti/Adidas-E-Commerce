import { Link } from "react-router-dom";
import "./Item.css";

function Item({ producto }) {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <Link to={`/item/${producto.id}`} className="btn">Ver Detalle</Link>
    </div>
  );
}

export default Item;
