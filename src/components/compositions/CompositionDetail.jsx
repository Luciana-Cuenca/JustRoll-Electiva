// src/components/compositions/CompositionDetail.jsx
import champions from "../../data/champions";
import HexBoard from "./HexBoard";
import { itemMap } from "../../data/items";

function CompositionDetail({ composition, onClose }) {
  if (!composition) return null;

  const championMap = new Map(
    champions.map((champion) => [champion.id, champion])
  );

  const getChampions = (ids = []) => {
    return ids
      .slice(0, 9)
      .map((id) => championMap.get(id))
      .filter(Boolean);
  };

  const finalChampions = getChampions(composition.finalChampions || []);
  const startingChampions = getChampions(
    (composition.startingChampions || []).slice(0, 4)
  );
  const hasBoard = (composition.board || []).length > 0;

  const costColors = {
    1: "hex-cost-1",
    2: "hex-cost-2",
    3: "hex-cost-3",
    4: "hex-cost-4",
    5: "hex-cost-5",
  };

  const renderChampion = (champion) => (
    <div className="detail-champion" key={champion.id}>
      <div
        className={`detail-champion-image ${
          costColors[champion.cost] || "hex-cost-special"
        }`}
      >
        {champion.image && (
          <img
            src={champion.image}
            alt={champion.name}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}
      </div>

      <p>{champion.name}</p>
      <small>
        {champion.cost ? `${champion.cost} de oro` : "Especial"}
      </small>
    </div>
  );

  const renderItems = (items = []) => (
    <div className="detail-items">
      {items.slice(0, 8).map((item, index) => (
        <div
          className="detail-item"
          key={`${item.name}-${index}`}
          title={item.name}
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="detail-overlay"
      onClick={onClose}
      role="presentation"
    >
      <section
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="detail-close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle"
        >
          ×
        </button>

        <header className="detail-header">
          <div>
            <span className="detail-eyebrow">
              GUÍA DE COMPOSICIÓN
            </span>

            <h2 id="detail-title">{composition.name}</h2>

            <div className="detail-tags">
              <span>{composition.gameMode}</span>
              <span>{composition.difficulty}</span>
              <span>RANGO {composition.tier}</span>
              {composition.requirement && (
                <span className="detail-tag-requirement">
                  ★ {composition.requirement}
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="detail-layout">
          {/* BARRA LATERAL */}
          <aside className="detail-sidebar">
            <div className="detail-banner">
              <div className="detail-banner-frame">
                {composition.image && (
                  <img
                    src={composition.image}
                    alt={composition.name}
                    className="detail-banner-img"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
              <div className="detail-banner-info">
                <span className="detail-banner-tier">
                  RANGO {composition.tier}
                </span>
                <h4>{composition.name}</h4>
                <p>{composition.category}</p>
              </div>
            </div>

            <section className="detail-info-box">
              <h3>DESCRIPCIÓN</h3>
              <p>
                {composition.longDescription ||
                  composition.description ||
                  "Próximamente."}
              </p>
            </section>

            {/* AUMENTOS RECOMENDADOS (SIN EMBLEMAS) */}
            <section className="detail-info-box">
              <h3>AUMENTOS RECOMENDADOS</h3>
              {composition.augments?.length > 0 ? (
                <div className="detail-augments-list">
                  {composition.augments.map((aug, index) => (
                    <div className="detail-augment-row" key={index} title={aug.name}>
                      <div className="detail-augment-icon">
                        <img
                          src={aug.image}
                          alt={aug.name}
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <span className="detail-augment-name">{aug.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="detail-coming-soon">Próximamente.</p>
              )}
            </section>

            {/* EMBLEMAS RECOMENDADOS (SECCIÓN SEPARADA) */}
            {composition.keyEmblems?.length > 0 && (
              <section className="detail-info-box detail-emblems-box">
                <h3>EMBLEMAS CLAVE</h3>
                <div className="detail-emblems-list">
                  {composition.keyEmblems.map((emblem, index) => (
                    <div className="detail-emblem-card" key={index}>
                      <div className="detail-emblem-icon">
                        <img
                          src={emblem.image}
                          alt={emblem.name}
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <div className="detail-emblem-info">
                        <strong>{emblem.name}</strong>
                        <small>{emblem.role}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* MEJORAS RECOMENDADAS */}
            <section className="detail-info-box">
              <h3>MEJORAS RECOMENDADAS</h3>
              {composition.recommendedUpgrades?.length > 0 ? (
                <ul className="detail-upgrades-list">
                  {composition.recommendedUpgrades.map((upgrade, index) => (
                    <li className="detail-upgrade-item" key={index}>
                      <span className="detail-upgrade-bullet">✦</span>
                      <span>{upgrade}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="detail-coming-soon">Próximamente.</p>
              )}
            </section>

            {/* CONSEJO DESTACADO (STICKER ANCLADO EN LA BARRA LATERAL) */}
            {composition.tip && (
              <div className="detail-tip-sticker">
                <div className="detail-tip-badge">
                  <span>CONSEJO</span>
                  <span aria-hidden="true">★</span>
                </div>
                <p>{composition.tip}</p>
              </div>
            )}
          </aside>

          {/* CONTENIDO PRINCIPAL */}
          <div className="detail-main">
            <section className="detail-panel">
              <header className="detail-panel-header">
                <div>
                  <h3>CAMPEONES DE LA COMPOSICIÓN</h3>
                  <p>Alineación final recomendada para nivel 8 o 9.</p>
                </div>

                <span className="detail-count-badge">
                  {finalChampions.length} CAMPEONES
                </span>
              </header>

              <div className="detail-champions-list">
                {finalChampions.map(renderChampion)}
              </div>
            </section>

            <div className="detail-bottom-grid">
              <section className="detail-panel">
                <header className="detail-panel-header">
                  <div>
                    <h3>CAMPEONES INICIALES</h3>
                    <p>Mesa de juego temprano para hacer racha.</p>
                  </div>
                </header>

                <div className="detail-champions-list">
                  {startingChampions.map(renderChampion)}
                </div>
              </section>

              <section className="detail-panel">
                <header className="detail-panel-header">
                  <div>
                    <h3>OBJETOS RECOMENDADOS</h3>
                    <p>Prioridad de armado para carries y tanques.</p>
                  </div>
                </header>

                {renderItems(composition.recommendedItems)}
              </section>
            </div>

            {/* TABLA DE ROLES Y PRIORIDAD DE OBJETOS */}
            {composition.championRoles?.length > 0 && (
              <section className="detail-panel">
                <header className="detail-panel-header">
                  <div>
                    <h3>ROLES Y PRIORIDAD DE OBJETOS</h3>
                    <p>Distribución de ítems clave entre los campeones.</p>
                  </div>
                </header>

                <div className="detail-roles-grid">
                  {composition.championRoles.map((roleInfo, index) => {
                    const champ = championMap.get(roleInfo.championId);
                    if (!champ) return null;

                    return (
                      <div
                        className="detail-role-card"
                        key={`${roleInfo.championId}-${index}`}
                      >
                        <div className="detail-role-champion">
                          <div
                            className={`detail-role-avatar ${
                              costColors[champ.cost] || "hex-cost-special"
                            }`}
                          >
                            {champ.image && (
                              <img
                                src={champ.image}
                                alt={champ.name}
                                onError={(event) => {
                                  event.currentTarget.style.display = "none";
                                }}
                              />
                            )}
                          </div>

                          <div className="detail-role-meta">
                            <strong>{champ.name}</strong>
                            <span className="detail-role-badge">
                              {roleInfo.role}
                            </span>
                          </div>
                        </div>

                        <div className="detail-role-items">
                          {roleInfo.items?.length > 0 ? (
                            roleInfo.items.map((itemId, itemIdx) => {
                              const itemObj = itemMap.get(itemId);
                              const itemName = itemObj ? itemObj.name : itemId;
                              const itemImg = itemObj
                                ? itemObj.image
                                : `/images/items/${itemId}.png`;

                              return (
                                <div
                                  className="detail-role-item-slot"
                                  key={itemIdx}
                                  title={itemName}
                                >
                                  <img
                                    src={itemImg}
                                    alt={itemName}
                                    onError={(event) => {
                                      event.currentTarget.style.display = "none";
                                    }}
                                  />
                                </div>
                              );
                            })
                          ) : (
                            <span className="detail-role-empty-items">
                              {roleInfo.note || "Sin ítems fijos"}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* TABLERO DE POSICIONAMIENTO */}
            {hasBoard && (
              <div className="detail-board-wrapper">
                <HexBoard
                  units={composition.board}
                  activeTraits={composition.activeTraits || []}
                />
              </div>
            )}

            {/* ESTRATEGIA PASO A PASO (DEBAJO DEL TABLERO) */}
            {composition.strategySteps?.length > 0 && (
              <section className="detail-panel">
                <header className="detail-panel-header">
                  <div>
                    <h3>ESTRATEGIA PASO A PASO</h3>
                    <p>Guía de toma de decisiones durante la partida.</p>
                  </div>
                </header>

                <ol className="detail-strategy-steps">
                  {composition.strategySteps.map((step, index) => (
                    <li className="detail-strategy-step" key={index}>
                      <span className="detail-step-number">{index + 1}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompositionDetail;
