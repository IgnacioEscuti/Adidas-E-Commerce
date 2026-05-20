import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContextt";
import "./ItemDetail.css";

const TALLAS_CALZADO = ["38", "38.5", "39", "39.5", "40", "40.5", "41", "42", "43", "44", "44.5", "45"];
const TALLAS_ROPA = ["XS", "S", "M", "L", "XL", "XXL"];
const TALLAS_ACCESORIOS = ["Talle único"];

function getTallas(categoria) {
  if (categoria === "calzado") return TALLAS_CALZADO;
  if (categoria === "ropa") return TALLAS_ROPA;
  return TALLAS_ACCESORIOS;
}

function ItemDetail({ producto }) {
  const { agregarAlCarrito } = useContext(CartContext);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);
  const [agregado, setAgregado] = useState(false);

  const handleAgregar = () => {
    agregarAlCarrito({ ...producto, talla: tallaSeleccionada }, 1);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  const tallas = getTallas(producto.categoria);

  return (
    <div className="detail-wrapper">

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="breadcrumb-sep">/</span>
        {producto.categoria && (
          <>
            <Link to={`/categoria/${producto.categoria}`}>
              {producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}
            </Link>
            <span className="breadcrumb-sep">/</span>
          </>
        )}
        <span className="breadcrumb-current">{producto.nombre}</span>
      </nav>

      <div className="detail-card">

        {/* Imagen */}
        <div className="detail-image-wrapper">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        {/* Info */}
        <div className="detail-info">

          <div className="detail-header">
            {producto.categoria && (
              <span className="detail-category-badge">{producto.categoria}</span>
            )}
            <h2 className="detail-name">{producto.nombre}</h2>
            <p className="detail-subtitle">Adidas — Colección 2025</p>
            <p className="detail-price">${producto.precio}</p>
          </div>

          {/* Selector de talles */}
          <div className="tallas-section">
            <div className="tallas-header">
              <span className="tallas-label">Selecciona tu talla</span>
              <button type="button" className="tallas-guia">Guía de talles</button>
            </div>
            <div className="tallas-grid">
              {tallas.map((talla) => (
                <button
                  key={talla}
                  type="button"
                  className={`talla-btn${tallaSeleccionada === talla ? " selected" : ""}`}
                  onClick={() => setTallaSeleccionada(talla)}
                >
                  {talla}
                </button>
              ))}
            </div>
          </div>

          {/* Botón agregar */}
          <button
            type="button"
            className={`btn-agregar${agregado ? " added" : ""}`}
            onClick={handleAgregar}
            disabled={agregado}
          >
            {agregado ? "¡Agregado al carrito!" : "Agregar al carrito"}
          </button>

          {/* Descripción */}
          {producto.descripcion && (
            <p className="detail-description">{producto.descripcion}</p>
          )}

          {/* Envío */}
          <div className="detail-shipping">
            <div className="shipping-item">
              <span className="shipping-icon">↗</span>
              <p>Envío gratis en compras mayores a $50.000</p>
            </div>
            <div className="shipping-item">
              <span className="shipping-icon">↺</span>
              <p>Devolución gratuita hasta 30 días</p>
            </div>
            <div className="shipping-item">
              <span className="shipping-icon">◎</span>
              <p>Producto original con garantía Adidas</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
