
import champions from "../../data/champions";
import HexUnit from "./HexUnit";

const ROWS = 4;
const COLUMNS = 7;

function HexBoard({ units = [], activeTraits = [] }) {
  const championMap = new Map(
    champions.map((champion) => [champion.id, champion])
  );

  const occupiedCells = new Map();

  units.forEach((unit) => {
    const champion = championMap.get(unit.championId);

    if (!champion) {
      console.warn(
        `HexBoard: no existe el campeón "${unit.championId}".`
      );
      return;
    }

    const key = `${unit.row}-${unit.col}`;

    if (occupiedCells.has(key)) {
      console.warn(`HexBoard: casilla duplicada ${key}.`);
      return;
    }

    occupiedCells.set(key, {
      ...champion,
      ...unit,
      id: unit.championId,
      items: unit.items || [],
    });
  });

  return (
    <section className="hex-board-section">
      <h3 className="hex-board-title">POSICIONAMIENTO</h3>

      {activeTraits.length > 0 && (
        <div className="hex-active-traits">
          {activeTraits.map((trait) => (
            <div
              className={`hex-trait-chip hex-trait-${trait.level || "silver"}`}
              key={trait.name}
              title={trait.name}
            >
              {trait.icon && <img src={trait.icon} alt="" />}
              <span>{trait.count}</span>
            </div>
          ))}
        </div>
      )}

      <div className="hex-board-scroll">
        <div className="hex-board-grid">
          {Array.from({ length: ROWS }, (_, row) => (
            <div
              className={`hex-board-row ${
                row % 2 === 1 ? "hex-board-row-offset" : ""
              }`}
              key={row}
            >
              {Array.from({ length: COLUMNS }, (_, col) => {
                const unit = occupiedCells.get(`${row}-${col}`);

                return (
                  <div className="hex-cell" key={`${row}-${col}`}>
                    {unit ? (
                      <HexUnit unit={unit} />
                    ) : (
                      <div className="hex-empty-cell" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HexBoard;
