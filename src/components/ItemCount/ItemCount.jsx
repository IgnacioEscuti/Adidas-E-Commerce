import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, inicial, onAdd }) {
  const [count, setCount] = useState(inicial);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const agregar = () => {
    onAdd(count);
  };

  return (
    <div className="counter">
      <button onClick={restar}>-</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>
      <button className="add-btn" onClick={agregar}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
