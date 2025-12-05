import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
}

export default ItemList;
