// src/components/compositions/CompositionCard.jsx

function CompositionCard({ composition, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(composition);
    }
  };

  return (
    <article
      className={`tier-card tier-card-${composition.color || "blue"}`}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${composition.name}`}
      onClick={() => onSelect(composition)}
      onKeyDown={handleKeyDown}
    >
      <div className="tier-card-top">
        <span className="tier-card-category">
          {composition.category}
        </span>

        {composition.requirement && (
          <span className="tier-card-requirement">
            ★ {composition.requirement}
          </span>
        )}

        <span className="tier-card-rank">
          {composition.tier}
        </span>
      </div>

      <div className="tier-card-art">
        <div className="tier-card-art-frame">
          {composition.image && (
            <img
              src={composition.image}
              alt={composition.name}
              className="tier-card-portrait"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>
      </div>

      <div className="tier-card-content">
        <div className="tier-card-title">
          <span className="tier-card-id">
            COMPOSICIÓN #{composition.id}
          </span>

          <h3>{composition.name}</h3>
        </div>

        <p className="tier-card-description">
          {composition.description}
        </p>

        <div className="tier-card-traits">
          {(composition.traits || []).map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </div>

        <div className="tier-card-meta">
          <span>{composition.gameMode}</span>
          <span>{composition.difficulty}</span>
        </div>

        <div className="tier-card-button">
          <span>VER COMPOSICIÓN</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  );
}

export default CompositionCard;
