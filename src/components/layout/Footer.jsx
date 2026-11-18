
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h2>JUST <span>ROLL!</span></h2>
          <p>
            Aprende, experimenta y domina el tablero.
            Cada partida es una nueva oportunidad.
          </p>

          <span className="footer-sticker">ROLL SMART!</span>
        </div>

        <div className="footer-navigation">
          <h3>EXPLORA</h3>
          <Link to="/">Inicio</Link>
          <Link to="/composiciones">Composiciones</Link>
        </div>

        <div className="footer-about">
          <h3>JUST ROLL</h3>
          <p>
            Un espacio para aprender TFT, descubrir estrategias
            y mejorar una partida a la vez.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 JUST ROLL</span>
        <span>Hecho para quienes aman el autobattler.</span>
      </div>
    </footer>
  );
}

export default Footer;
