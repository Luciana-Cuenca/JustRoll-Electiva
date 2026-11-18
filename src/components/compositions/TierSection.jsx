
import CompositionCard from "./CompositionCard";

function TierSection({ tier, compositions = [], onSelect }) {
  return (
    <section className={`tier-group tier-${tier.id.toLowerCase()}`}>
      <div className="tier-group-heading">
        <div className="tier-rank-letter">{tier.id}</div>

        <h3>{tier.name}</h3>

        <p>{tier.description}</p>
      </div>

      {compositions.length > 0 ? (
        <div className="tier-card-grid">
          {compositions.map((composition) => (
            <CompositionCard
              key={composition.id}
              composition={composition}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : (
        <div className="tier-empty">
          <p>Próximamente</p>
        </div>
      )}
    </section>
  );
}

export default TierSection;
