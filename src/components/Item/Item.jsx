import { Link } from "react-router-dom";
import "./Item.css";

function Item({ producto }) {
  return (
    <Link to={`/item/${producto.id}`} className="card">
      <div className="card-image-wrapper">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="card-body">
        {producto.categoria && (
          <span className="card-category">{producto.categoria}</span>
        )}
        <h3>{producto.nombre}</h3>
        <p className="card-price">${producto.precio}</p>
      </div>
    </Link>
  );
}

export default Item;
