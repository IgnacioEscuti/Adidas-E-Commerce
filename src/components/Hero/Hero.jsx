import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">Nueva colección — 2025</span>
        <h1 className="hero-title">DISEÑADO<br />PARA<br />GANAR.</h1>
        <p className="hero-subtitle">
          Los modelos más icónicos, redefinidos para el movimiento moderno.
        </p>
        <div className="hero-actions">
          <Link to="/categoria/calzado" className="hero-btn">
            Explorar calzado
          </Link>
          <Link to="/categoria/ropa" className="hero-btn hero-btn-outline">
            Ver ropa
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img src="/assets/zapatillas-samba-og.avif" alt="Adidas Samba OG" />
      </div>
    </section>
  );
}

export default Hero;
