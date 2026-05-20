import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/adidas-logo.jpg" alt="Adidas" className="footer-logo" />
          <p className="footer-tagline">Impossible Is Nothing</p>
        </div>

        <div className="footer-col">
          <h4>Tienda</h4>
          <Link to="/">Todos los productos</Link>
          <Link to="/categoria/calzado">Calzado</Link>
          <Link to="/categoria/ropa">Ropa</Link>
          <Link to="/categoria/accesorios">Accesorios</Link>
        </div>

        <div className="footer-col">
          <h4>Ayuda</h4>
          <a href="#">Envíos y devoluciones</a>
          <a href="#">Guía de talles</a>
          <a href="#">Contacto</a>
          <a href="#">Preguntas frecuentes</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Adidas Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
