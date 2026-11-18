
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="navbar-container">

        <NavLink
          to="/"
          className="navbar-brand"
          aria-label="JUST ROLL - Inicio"
          onClick={closeMenu}
        >
          <span className="brand-logo">
            {/* Reemplaza este JR por tu imagen cuando tengas el logo */}
            <img
              src="/images/logo.png"
              alt="JUST ROLL"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="brand-fallback">JR</span>
          </span>

          <span className="brand-name">
            JUST <span>ROLL!</span>
          </span>
        </NavLink>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="main-navigation"
          className={`navbar-links ${menuOpen ? "menu-open" : ""}`}
        >
          <NavLink to="/" end onClick={closeMenu}>
            Inicio
          </NavLink>

          <NavLink to="/composiciones" onClick={closeMenu}>
            Composiciones
          </NavLink>

        </nav>

        <NavLink
          to="/composiciones"
          className="navbar-cta"
        >
          ¡A jugar!
          <span>↗</span>
        </NavLink>

      </div>
    </header>
  );
}

export default Navbar;
