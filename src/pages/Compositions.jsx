// src/pages/Compositions.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import TierSection from "../components/compositions/TierSection";
import CompositionDetail from "../components/compositions/CompositionDetail";

import compositionsTierList from "../data/compositionsTierList";

import "../styles/Compositions.css";

const tiers = [
  {
    id: "S",
    name: "EXCELENTE",
    description: "Estrategias destacadas.",
  },
  {
    id: "A",
    name: "MUY BUENA",
    description: "Composiciones muy competitivas.",
  },
  {
    id: "B",
    name: "BUENA",
    description: "Alternativas equilibradas.",
  },
  {
    id: "C",
    name: "SITUACIONAL",
    description: "Depende de las condiciones de partida.",
  },
  {
    id: "X",
    name: "EXPERIMENTAL",
    description: "Estrategias para probar.",
  },
];

function Compositions() {
  const [selectedComposition, setSelectedComposition] = useState(null);
  const [searchParams] = useSearchParams();

  // Scroll to top absoluto al montar la página para evitar que caiga a la mitad
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Si viene un parámetro ?id=... (ej: desde el Inicio), abrir esa composición
  useEffect(() => {
    const compId = searchParams.get("id");
    if (compId) {
      const found = compositionsTierList.find(
        (c) => String(c.id) === String(compId)
      );
      if (found) {
        setSelectedComposition(found);
      }
    }
  }, [searchParams]);

  const handleSelectComposition = (composition) => {
    setSelectedComposition(composition);
  };

  const handleCloseDetail = () => {
    setSelectedComposition(null);
  };

  useEffect(() => {
    if (!selectedComposition) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCloseDetail();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedComposition]);

  return (
    <main className="tier-page">
      <section className="tier-hero">
        <div className="tier-hero-content">
          <span className="tier-eyebrow">
            ENCUENTRA TU PRÓXIMA ESTRATEGIA
          </span>

          <h1>
            COMPOSITION <span>TIER LIST</span>
          </h1>

          <p>
            Explora composiciones, conoce sus estrategias y descubre
            cómo posicionar tus campeones para cada partida.
          </p>

          <div className="tier-hero-tags">
            <span>ESTRATEGIAS</span>
            <span>COMPOSICIONES</span>
            <span>TFT</span>
          </div>
        </div>

        <div className="tier-hero-decoration">
          <span className="tier-star">✦</span>
          <span className="tier-decoration-text">JUST ROLL</span>
          <span className="tier-decoration-small">PLAY SMART</span>
        </div>
      </section>

      <div className="tier-content">
        <div className="tier-section-heading">
          <div>
            <span className="tier-section-label">
              ORGANIZA TU ESTRATEGIA
            </span>

            <h2>Composiciones destacadas</h2>

            <p>
              Selecciona una tarjeta para consultar su guía y
              posicionamiento.
            </p>
          </div>
        </div>

        <div className="tier-groups">
          {tiers.map((tier) => {
            const tierCompositions = compositionsTierList.filter(
              (composition) => composition.tier === tier.id
            );

            return (
              <TierSection
                key={tier.id}
                tier={tier}
                compositions={tierCompositions}
                onSelect={handleSelectComposition}
              />
            );
          })}
        </div>

        <div className="tier-tip">
          <span className="tier-tip-icon">!</span>

          <p>
            Recuerda que las composiciones pueden variar según los
            aumentos, objetos y campeones disponibles durante cada partida.
          </p>
        </div>
      </div>

      {selectedComposition && (
        <CompositionDetail
          composition={selectedComposition}
          onClose={handleCloseDetail}
        />
      )}
    </main>
  );
}

export default Compositions;
