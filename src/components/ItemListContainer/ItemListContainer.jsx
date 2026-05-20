import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getProducts } from "../../services/api.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const CATEGORIAS = ["calzado", "ropa", "accesorios"];

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(categoriaId || null)
      .then(setItems)
      .catch((err) => console.error("Error al cargar productos:", err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  const titulo = greeting || (categoriaId
    ? categoriaId.charAt(0).toUpperCase() + categoriaId.slice(1)
    : "Todos los productos");

  return (
    <div className="itemlist-container">
      <div className="section-header">
        <h2 className="section-title">{titulo}</h2>

        <nav className="category-filters">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `filter-chip${isActive ? " active" : ""}`}
          >
            Todos
          </NavLink>
          {CATEGORIAS.map((cat) => (
            <NavLink
              key={cat}
              to={`/categoria/${cat}`}
              className={({ isActive }) => `filter-chip${isActive ? " active" : ""}`}
            >
              {cat}
            </NavLink>
          ))}
        </nav>
      </div>

      {loading ? (
        <div className="spinner" />
      ) : (
        <ItemList productos={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
