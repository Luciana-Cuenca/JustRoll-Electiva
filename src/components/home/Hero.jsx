import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero paper-texture">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            TU GUÍA PARA TFT
          </span>

          <h1 className="hero-title">
            <span className="title-line">JUST</span>
            <span className="title-line title-highlight">ROLL!</span>
          </h1>

          <p className="hero-description">
            Aprende a construir composiciones, administrar tu economía
            y tomar mejores decisiones en cada partida de Teamfight Tactics.
          </p>

          <div className="hero-actions">
            <Link to="/composiciones" className="btn btn-orange">
              Explorar composiciones <span>↗</span>
            </Link>

            <Link to="/tutoriales" className="btn btn-cream">
              Aprende a jugar
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-line"></span>
            <span>PIENSA. ADAPTA. ¡HAZ ROLL!</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustración decorativa de un tablero de estrategia">
          <div className="art-sunburst"></div>
          <div className="art-star art-star-one">✦</div>
          <div className="art-star art-star-two">✳</div>
          <div className="art-circle"></div>

          <div className="art-sticker">
            <span>¡GG!</span>
            <small>GOOD GAME</small>
          </div>

          <div className="game-board">
            <div className="board-top">
              <span>YOUR BOARD</span>
              <span className="board-round">3-2</span>
            </div>

            <div className="board-grid">
              {Array.from({ length: 28 }, (_, index) => (
                <div className="board-cell" key={index}>
                  {[4, 9, 13, 18, 23].includes(index) && (
                    <span className={`board-unit unit-${index}`}></span>
                  )}
                </div>
              ))}
            </div>

            <div className="board-bottom">
              <span className="board-gold">◆ 32</span>
              <span>LEVEL 6</span>
            </div>
          </div>

          <div className="art-floating-card card-blue">
            <span className="floating-card-icon">↗</span>
            <span>ESTRATEGIA</span>
          </div>

          <div className="art-floating-card card-orange">
            <span className="floating-card-icon">★</span>
            <span>¡VICTORIA!</span>
          </div>

          <div className="art-arrow">↘</div>
        </div>
      </div>

      <div className="hero-bottom-decoration">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Hero;