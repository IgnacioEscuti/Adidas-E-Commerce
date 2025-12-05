import { useContext } from "react";
import { CartContext } from "../../context/cartContextt";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ producto }) {
  const { agregarAlCarrito } = useContext(CartContext);

  const onAdd = (cantidad) => {
    agregarAlCarrito(producto, cantidad);
  };

  return (
    <div className="detail-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="detail-info">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <h3>${producto.precio}</h3>
        <ItemCount stock={10} inicial={1} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;
