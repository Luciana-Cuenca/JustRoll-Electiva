import { Link } from "react-router-dom";
import compositions from "../../data/compositions";

function FeaturedCompositions() {
  return (
    <section className="featured-compositions">
      <div className="featured-container">

        <div className="featured-heading">
          <div>
            <span className="featured-label">ELIGE TU ESTRATEGIA</span>
            <h2>
              COMPOSICIONES
              <span> DESTACADAS</span>
            </h2>
            <p>
              Encuentra nuevas formas de construir tu equipo y descubre
              estrategias para llevar tus partidas al siguiente nivel.
            </p>
          </div>

          <Link to="/composiciones" className="btn btn-orange featured-all">
            VER TODAS <span>↗</span>
          </Link>
        </div>

        <div className="compositions-grid">
          {compositions.map((composition) => (
            <article
              className={`composition-card composition-${composition.color}`}
              key={composition.id}
            >
              <div className="composition-card-top">
                <span className="composition-category">
                  {composition.category}
                </span>
                <span className="composition-icon">
                  {composition.icon}
                </span>
              </div>

              {/* Retrato enmarcado idéntico a la página de Composiciones (nítido y sin pixelar) */}
              <div className="composition-art">
                <div className="composition-art-frame">
                  {composition.image && (
                    <img
                      src={composition.image}
                      alt={composition.name}
                      className="composition-art-portrait"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                </div>

                <span className="composition-art-number">
                  0{composition.id}
                </span>
              </div>

              <div className="composition-card-content">
                <h3>{composition.name}</h3>
                <p>{composition.description}</p>

                <div className="composition-traits">
                  {composition.traits.map((trait) => (
                    <span key={trait}>{trait}</span>
                  ))}
                </div>

                <div className="composition-info">
                  <div>
                    <span className="info-label">MODO</span>
                    <strong>{composition.gameMode || composition.cost}</strong>
                  </div>

                  <div>
                    <span className="info-label">DIFICULTAD</span>
                    <strong className={`difficulty-${composition.difficultyLevel}`}>
                      {composition.difficulty}
                    </strong>
                  </div>
                </div>

                <Link
                  to={`/composiciones?id=${composition.id}`}
                  className="composition-card-link"
                >
                  VER COMPOSICIÓN <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-bottom">
          <span className="featured-bottom-icon">!</span>
          <p>
            Recuerda: una buena estrategia también depende de los objetos,
            las unidades disponibles y las decisiones que tomes durante la partida.
          </p>
        </div>

      </div>
    </section>
  );
}

export default FeaturedCompositions;
