import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContextt";
import "./Navbar.css";

export default function Navbar({ carritoAbierto, toggleCarrito }) {
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav className={`navbar ${carritoAbierto ? "navbar-blur" : ""}`}>
      <Link to="/">
        <img src="/assets/adidas-logo.jpg" alt="logo" className="logo-navbar" />
      </Link>

      <ul className="nav-links">  
        <li><Link to="/">Todos</Link></li>
        <li><Link to="/categoria/calzado">calzado</Link></li>
        <li><Link to="/categoria/ropa">Ropa</Link></li>
        <li><Link to="/categoria/accesorios">Accesorios</Link></li>
      </ul>

      <div className="cart-wrapper" onClick={toggleCarrito}>
        <img src="/assets/carrito.webp" alt="Carrito" className="cart" />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </div>
    </nav>
  );
}
