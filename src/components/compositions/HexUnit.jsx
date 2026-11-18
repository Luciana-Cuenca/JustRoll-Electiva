// src/components/compositions/HexUnit.jsx

function HexUnit({ unit }) {
  const costClass = unit.cost
    ? `hex-cost-${unit.cost}`
    : "hex-cost-special";

  const traits = (unit.traits || []).slice(0, 3);
  const items = (unit.items || []).slice(0, 3);

  return (
    <div className="hex-unit" title={`${unit.name} (${unit.cost} de oro)`}>
      {traits.length > 0 && (
        <div className="hex-unit-traits">
          {traits.map((trait) => (
            <span
              className="hex-trait-icon"
              key={`${unit.id}-${trait.name}`}
              title={trait.name}
            >
              {trait.icon && (
                <img
                  src={trait.icon}
                  alt={trait.name}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
            </span>
          ))}
        </div>
      )}

      <div className={`hex-unit-shape ${costClass}`}>
        <div className="hex-unit-image">
          {unit.image && (
            <img
              src={unit.image}
              alt={unit.name}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>
      </div>

      {items.length > 0 && (
        <div className="hex-unit-items">
          {items.map((item, index) => {
            const itemSrc =
              typeof item === "string" && (item.startsWith("/") || item.startsWith("http"))
                ? item
                : `/images/items/${item}.png`;
            const itemTitle =
              typeof item === "string"
                ? item.split("/").pop()?.replace(".png", "")
                : "Objeto";

            return (
              <span
                className="hex-item-icon"
                key={`${unit.id}-item-${index}`}
                title={itemTitle}
              >
                <img
                  src={itemSrc}
                  alt={itemTitle}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HexUnit;
