import { Link } from "react-router-dom";

function QuickFeatures() {
  return (
    <section className="quick-features">
      <div className="quick-features-container">

        <div className="quick-features-heading">
          <span className="quick-label">SUBE DE NIVEL</span>
          <h2>
            PREPARA TU PRÓXIMA
            <span> VICTORIA!</span>
          </h2>
          <p>
            No se trata solo de hacer roll. Aprende a tomar mejores
            decisiones en cada etapa de la partida.
          </p>
        </div>

        <div className="features-grid">

          <Link to="/composiciones" className="feature-card feature-orange">
            <div className="feature-number">01</div>
            <div className="feature-illustration composition-illustration">
              <div className="mini-unit mini-unit-one">A</div>
              <div className="mini-unit mini-unit-two">B</div>
              <div className="mini-unit mini-unit-three">C</div>
              <span className="mini-plus">+</span>
            </div>
            <div className="feature-card-content">
              <span className="feature-category">CONSTRUYE TU EQUIPO</span>
              <h3>COMPOSICIONES</h3>
              <p>Descubre combinaciones, campeones y sinergias.</p>
              <span className="feature-link">EXPLORAR ↗</span>
            </div>
          </Link>

          <Link to="/tutoriales" className="feature-card feature-blue">
            <div className="feature-number">02</div>
            <div className="feature-illustration economy-illustration">
              <div className="coin coin-one">$</div>
              <div className="coin coin-two">$</div>
              <div className="coin coin-three">$</div>
              <span className="economy-arrow">↗</span>
            </div>
            <div className="feature-card-content">
              <span className="feature-category">ADMINISTRA TUS RECURSOS</span>
              <h3>ECONOMÍA</h3>
              <p>Aprende cuándo ahorrar, subir de nivel y hacer roll.</p>
              <span className="feature-link">APRENDER ↗</span>
            </div>
          </Link>

          <Link to="/guias" className="feature-card feature-cyan">
            <div className="feature-number">03</div>
            <div className="feature-illustration strategy-illustration">
              <div className="strategy-board">
                <span></span><span></span><span></span>
                <span></span><span className="strategy-highlight"></span><span></span>
                <span></span><span></span><span></span>
              </div>
              <span className="strategy-star">★</span>
            </div>
            <div className="feature-card-content">
              <span className="feature-category">PIENSA CADA MOVIMIENTO</span>
              <h3>ESTRATEGIA</h3>
              <p>Mejora tu posicionamiento y adapta tu partida.</p>
              <span className="feature-link">DESCUBRIR ↗</span>
            </div>
          </Link>

        </div>

        <div className="quick-bottom-note">
          <span className="note-star">✦</span>
          <p>EL MEJOR JUGADOR NO SIEMPRE TIENE LA MEJOR SUERTE.</p>
          <span className="note-star">✦</span>
        </div>

      </div>
    </section>
  );
}

export default QuickFeatures;