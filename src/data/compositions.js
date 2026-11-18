// src/data/compositions.js
// Composiciones destacadas para la página de Inicio, sincronizadas con el catálogo de la Tier List.
// Paleta estricta de azul y naranja, datos reales del Set 18 de TFT y sin emojis.

const compositions = [
  {
    id: 1,
    name: "Riftbeast – Espino Rojo",
    category: "DAÑO FÍSICO",
    gameMode: "FAST 8",
    cost: "Fast 8",
    difficulty: "Avanzada",
    difficultyLevel: "hard",
    description:
      "Potente formación de 7 Grietozoicos con Espino Rojo de carry lateral penetrando el flanco débil y Dragón Ancestral rematando en retaguardia tras una colosal primera línea.",
    traits: ["Grietozoico", "Arrasador", "Coloso"],
    color: "orange",
    icon: "✦",
    tier: "S",
    image: "/images/compositions/riftbeast.png",
  },
  {
    id: 2,
    name: "Ahri + Zyra Forjahechizos",
    category: "DAÑO MÁGICO",
    gameMode: "FAST 8",
    cost: "Fast 8",
    difficulty: "Intermedia",
    difficultyLevel: "medium",
    description:
      "Doble hipercarry mágico en esquinas de retaguardia combinando daño continuo y control en área, sostenidas por una muralla impenetrable de Sett, Rakan y Yorick.",
    traits: ["Forjahechizos", "Floración", "Invocador"],
    color: "blue",
    icon: "★",
    tier: "S",
    image: "/images/compositions/ahri-zyra.png",
  },
  {
    id: 3,
    name: "Karma Reroll",
    category: "HÍBRIDA",
    gameMode: "SLOW ROLL 7",
    cost: "Reroll 7",
    difficulty: "Intermedia",
    difficultyLevel: "medium",
    description:
      "Estrategia de slow roll para llevar a Karma 3★ como hipercarry de ráfaga mágica, con Yunara de soporte físico y una sólida vanguardia con sinergias Solar y Coloso.",
    traits: ["Floración", "Solar", "Coloso"],
    color: "orange",
    icon: "✦",
    tier: "S",
    image: "/images/compositions/karma.png",
  },
];

export default compositions;
