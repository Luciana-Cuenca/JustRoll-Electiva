import { Link } from "react-router-dom";

function NewsSection() {
  return (
    <section className="news-section">
      <div className="news-container">

        <div className="news-header">
          <div>
            <span className="news-label">EL TABLERO DE INFORMACIÓN</span>
            <h2>
              MÁS CONOCIMIENTO,
              <span> MEJORES PARTIDAS!</span>
            </h2>
            <p>
              Consejos, tutoriales y estrategias para que siempre tengas
              algo nuevo que aprender antes de tu próxima partida.
            </p>
          </div>

          <div className="news-header-decoration">
            <span>NEW!</span>
            <div className="news-header-star">✦</div>
          </div>
        </div>

        <div className="news-layout">

          {/* CONTENIDO PRINCIPAL */}
          <article className="news-featured">
            <div className="news-featured-visual">
              <span className="news-featured-tag">DESTACADO</span>

              <div className="featured-paper">
                <div className="paper-top">
                  <span>JUST ROLL!</span>
                  <span>GUIDE Nº 01</span>
                </div>

                <div className="paper-title">
                  <span>LEVEL</span>
                  <strong>UP!</strong>
                </div>

                <div className="paper-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="paper-caption">
                  <span>APRENDE</span>
                  <span>MEJORA</span>
                  <span>GANA</span>
                </div>
              </div>

              <span className="featured-visual-star">★</span>
              <span className="featured-visual-spark">✦</span>
            </div>

            <div className="news-featured-content">
              <div className="news-meta">
                <span className="news-type">GUÍA PARA PRINCIPIANTES</span>
                <span>LECTURA: 5 MIN</span>
              </div>

              <h3>¿CÓMO FUNCIONA TEAMFIGHT TACTICS?</h3>

              <p>
                Conoce las bases del juego, las rondas, la tienda,
                los campeones y los elementos que necesitas para
                comenzar a construir tu estrategia.
              </p>

              <Link to="/guias" className="news-read-button">
                LEER GUÍA <span>↗</span>
              </Link>
            </div>
          </article>

          {/* CONTENIDOS SECUNDARIOS */}
          <div className="news-side">

            <article className="news-small-card">
              <div className="news-small-visual news-small-orange">
                <span className="small-card-number">02</span>

                <div className="tips-bubble">
                  <span>TIP</span>
                  <strong>!</strong>
                </div>

                <div className="tips-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="news-small-content">
                <span className="news-type">CONSEJOS</span>
                <h3>5 ERRORES QUE DEBES EVITAR</h3>
                <p>
                  Identifica algunos errores comunes y aprende
                  a tomar mejores decisiones.
                </p>
                <Link to="/guias" className="news-text-link">
                  VER CONSEJOS ↗
                </Link>
              </div>
            </article>

            <article className="news-small-card">
              <div className="news-small-visual news-small-purple">
                <span className="small-card-number">03</span>

                <div className="tutorial-play">
                  <span>▶</span>
                </div>

                <div className="tutorial-stars">
                  <span>✦</span>
                  <span>★</span>
                </div>
              </div>

              <div className="news-small-content">
                <span className="news-type">TUTORIAL</span>
                <h3>APRENDE A POSICIONAR TU EQUIPO</h3>
                <p>
                  Descubre por qué la ubicación de tus unidades
                  puede cambiar una partida.
                </p>
                <Link to="/tutoriales" className="news-text-link">
                  VER TUTORIAL ↗
                </Link>
              </div>
            </article>

          </div>
        </div>

        <div className="news-bottom">
          <div>
            <span className="news-bottom-icon">✦</span>
            <div>
              <strong>¿LISTO PARA SEGUIR APRENDIENDO?</strong>
              <p>Explora todo nuestro contenido y encuentra tu próxima estrategia.</p>
            </div>
          </div>

          <Link to="/tutoriales" className="btn btn-orange">
            EXPLORAR CONTENIDO ↗
          </Link>
        </div>

      </div>
    </section>
  );
}

export default NewsSection;