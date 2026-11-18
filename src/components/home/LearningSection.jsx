import { Link } from "react-router-dom";

function LearningSection() {
  return (
    <section className="learning-section">
      <div className="learning-container">

        <div className="learning-header">
          <div>
            <span className="learning-label">NO IMPORTA TU NIVEL</span>
            <h2>
              APRENDE A JUGAR
              <span> COMO UN PRO</span>
            </h2>
            <p>
              Todo gran estratega comienza desde cero. Aprende los
              fundamentos y desarrolla tu propio estilo de juego.
            </p>
          </div>

          <div className="learning-header-sticker">
            <span>GG</span>
            <small>LET'S PLAY!</small>
          </div>
        </div>

        <div className="learning-cards">

          {/* PRIMEROS PASOS */}
          <article className="learning-card learning-beginner">
            <div className="learning-card-visual beginner-visual">
              <span className="learning-card-number">01</span>

              <div className="beginner-board">
                <div className="beginner-board-row">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="beginner-board-row">
                  <span className="beginner-unit"></span>
                  <span></span>
                  <span className="beginner-unit"></span>
                </div>
                <div className="beginner-board-row">
                  <span></span>
                  <span className="beginner-unit"></span>
                  <span></span>
                </div>
              </div>

              <span className="beginner-spark">✦</span>
              <span className="beginner-question">?</span>
            </div>

            <div className="learning-card-body">
              <span className="learning-category">NIVEL PRINCIPIANTE</span>
              <h3>PRIMEROS PASOS</h3>
              <p>
                Conoce cómo funciona TFT, aprende sobre campeones,
                tiendas, rondas y sinergias.
              </p>
              <Link to="/tutoriales" className="learning-link">
                EMPEZAR A APRENDER <span>↗</span>
              </Link>
            </div>
          </article>

          {/* ECONOMÍA */}
          <article className="learning-card learning-economy">
            <div className="learning-card-visual economy-visual">
              <span className="learning-card-number">02</span>

              <div className="learning-gold-stack">
                <div className="gold-piece gold-piece-back">$</div>
                <div className="gold-piece gold-piece-middle">$</div>
                <div className="gold-piece gold-piece-front">$</div>
              </div>

              <div className="gold-counter">
                <span>ORO</span>
                <strong>50</strong>
              </div>

              <span className="economy-spark">✦</span>
            </div>

            <div className="learning-card-body">
              <span className="learning-category">ADMINISTRA TUS RECURSOS</span>
              <h3>DOMINA LA ECONOMÍA</h3>
              <p>
                Descubre cómo ahorrar oro, aprovechar los intereses
                y decidir cuándo invertir en tu equipo.
              </p>
              <Link to="/tutoriales" className="learning-link">
                APRENDER ECONOMÍA <span>↗</span>
              </Link>
            </div>
          </article>

          {/* POSICIONAMIENTO */}
          <article className="learning-card learning-position">
            <div className="learning-card-visual position-visual">
              <span className="learning-card-number">03</span>

              <div className="position-board">
                {Array.from({ length: 12 }, (_, index) => (
                  <span
                    key={index}
                    className={[
                      1, 2, 5, 8, 9
                    ].includes(index) ? "position-unit" : ""}
                  ></span>
                ))}
              </div>

              <span className="position-arrow">↗</span>
              <span className="position-spark">★</span>
            </div>

            <div className="learning-card-body">
              <span className="learning-category">MEJORA TU ESTRATEGIA</span>
              <h3>POSICIONAMIENTO</h3>
              <p>
                Aprende a distribuir tus unidades y proteger a tus
                campeones más importantes.
              </p>
              <Link to="/guias" className="learning-link">
                DESCUBRIR ESTRATEGIAS <span>↗</span>
              </Link>
            </div>
          </article>

        </div>

        <div className="learning-bottom">
          <div className="learning-bottom-decoration">★</div>
          <div>
            <strong>CADA PARTIDA ES UNA OPORTUNIDAD.</strong>
            <p>Experimenta, aprende de tus decisiones y mejora tu estrategia.</p>
          </div>
          <Link to="/guias" className="learning-bottom-button">
            VER GUÍAS ↗
          </Link>
        </div>

      </div>
    </section>
  );
}

export default LearningSection;