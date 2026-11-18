import type { Composition } from '../../shared/models/content.models';
// src/data/compositionsTierList.js
// Catálogo completo de composiciones de la Tier List de JUST ROLL (Set 18).
// Máximo 4 campeones iniciales por composición, tableros hexagonales configurados,
// carries en esquinas, separación de aumentos y emblemas, sin emojis.

const compositionsTierList: Composition[] = [
  // ==========================================
  // RANGO S
  // ==========================================
  {
    id: 1,
    name: 'Riftbeast – Espino Rojo',
    category: 'DAÑO FÍSICO',
    description:
      'Potente composición de 7 Grietozoicos con Espino Rojo de carry lateral y Dragón Ancestral rematando en retaguardia tras una colosal primera línea.',
    image: '/images/compositions/riftbeast.png',
    imagePosition: 'center 15%',
    traits: ['Grietozoico', 'Arrasador', 'Coloso', 'Peleador', 'Vanguardia'],
    gameMode: 'Fast 8',
    difficulty: 'Avanzada',
    difficultyLevel: 'hard',
    color: 'orange',
    icon: '✦',
    tier: 'S',

    longDescription:
      'La prioridad es reunir 7 Grietozoicos para desbloquear la máxima bonificación de daño y resistencia. Espino Rojo lidera el ataque penetrando el lado más débil del rival, mientras Dragón Ancestral castiga a distancia. Krug y Taric absorben el impacto inicial en el centro del frente.',

    augments: [
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
      {
        name: 'Los Ricos se Hacen Más Ricos',
        image: '/images/augments/aumentos-economicos.png',
      },
      {
        name: 'Sube de Nivel',
        image: '/images/augments/niveles-altos.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema Grietozoico',
        image: '/images/augments/emblema-ejecutor.png',
        role: 'Acelera los 7 Grietozoicos',
      },
    ],

    finalChampions: [
      'espino-rojo',
      'dragon-ancestral',
      'rocoso',
      'centinela',
      'taric',
      'gnar',
      'lobrego',
      'rocardo',
    ],

    startingChampions: ['rocoso', 'lobrego', 'escurridizo', 'yorick'],

    recommendedItems: [
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Filo de la Noche',
        image: '/images/items/edge-of-night.png',
      },
      {
        name: 'Mano de la Justicia',
        image: '/images/items/hand-of-justice.png',
      },
      {
        name: 'Filo Infinito',
        image: '/images/items/infinity-edge.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
      {
        name: 'Mangual del Guerrero',
        image: '/images/items/power-gauntlet.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
    ],

    activeTraits: [
      {
        name: 'Grietozoico',
        icon: '/images/traits/grietozoico.png',
        count: 7,
        level: 'gold',
      },
      {
        name: 'Arrasador',
        icon: '/images/traits/arrasador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Peleador',
        icon: '/images/traits/peleador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Vanguardia',
        icon: '/images/traits/vanguardia.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'espino-rojo',
        role: 'Carry principal',
        items: ['guinsoos-rageblade', 'edge-of-night', 'hand-of-justice'],
      },
      {
        championId: 'dragon-ancestral',
        role: 'Carry de retaguardia',
        items: ['infinity-edge', 'last-whisper', 'power-gauntlet'],
      },
      {
        championId: 'rocoso',
        role: 'Tanque principal',
        items: ['warmogs-armor', 'spirit-visage', 'gargoyle-stoneplate'],
      },
      {
        championId: 'centinela',
        role: 'Tanque secundario',
        items: ['crownguard'],
        note: 'Objetos defensivos sobrantes',
      },
      {
        championId: 'taric',
        role: 'Soporte frontal',
        items: [],
      },
      {
        championId: 'gnar',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'lobrego',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'rocardo',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      'Abre con Rocoso, Lóbrego, Escurridizo y Yorick para asegurar la racha de Grietozoicos tempranos.',
      'Conserva economía fuerte hasta nivel 7 y añade Centinela.',
      'Sube al nivel 8 rápidamente para encontrar Espino Rojo y Dragón Ancestral.',
      'Estabiliza tu mesa en 7 Grietozoicos antes de considerar subir a nivel 9.',
      'Coloca a Espino Rojo en el flanco donde el rival tenga unidades más vulnerables.',
    ],

    tip: 'Krug en el centro de primera fila y Taric a su lado crean una muralla infranqueable. Espino Rojo debe atacar por el flanco débil mientras Dragón Ancestral barre desde retaguardia.',

    board: [
      {
        championId: 'taric',
        row: 0,
        col: 2,
        items: [],
      },
      {
        championId: 'rocoso',
        row: 0,
        col: 3,
        items: ['warmogs-armor', 'spirit-visage', 'gargoyle-stoneplate'],
      },
      {
        championId: 'centinela',
        row: 0,
        col: 4,
        items: ['crownguard'],
      },
      {
        championId: 'gnar',
        row: 1,
        col: 2,
        items: [],
      },
      {
        championId: 'lobrego',
        row: 1,
        col: 3,
        items: [],
      },
      {
        championId: 'espino-rojo',
        row: 1,
        col: 5,
        items: ['guinsoos-rageblade', 'edge-of-night', 'hand-of-justice'],
      },
      {
        championId: 'rocardo',
        row: 3,
        col: 1,
        items: [],
      },
      {
        championId: 'dragon-ancestral',
        row: 3,
        col: 6,
        items: ['infinity-edge', 'last-whisper', 'power-gauntlet'],
      },
    ],
  },

  {
    id: 2,
    name: 'Draven Carry',
    category: 'DAÑO FÍSICO',
    description:
      'Composición de daño físico con Draven y Ezreal en las esquinas de retaguardia, e Ivern aportando soporte en última fila tras una muralla de tanques.',
    image: '/images/compositions/draven.png',
    imagePosition: 'center 15%',
    traits: ['Bosqueviejo', 'Peleador', 'Infernal', 'Ejecutor', 'Coloso'],
    gameMode: 'Fast 9',
    difficulty: 'Avanzada',
    difficultyLevel: 'hard',
    color: 'orange',
    icon: '✦',
    tier: 'S',

    longDescription:
      'Composición de daño físico que utiliza a Draven como carry principal. Ezreal complementa el daño desde la retaguardia, mientras Maokai, Taric, Alistar y Amumu sostienen la primera línea. Su fortaleza está en combinar Bosqueviejo, Peleador e Infernal con Ivern blindando la retaguardia.',

    augments: [
      {
        name: 'Los Ricos se Hacen Más Ricos',
        image: '/images/augments/aumentos-economicos.png',
      },
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
      {
        name: 'Sube de Nivel',
        image: '/images/augments/niveles-altos.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema de Ejecutor',
        image: '/images/augments/emblema-ejecutor.png',
        role: 'Clave para Draven',
      },
    ],

    finalChampions: [
      'draven',
      'ezreal',
      'maokai',
      'kennen',
      'gnar',
      'alistar',
      'ivern',
      'amumu',
      'taric',
    ],

    startingChampions: ['xayah', 'varus', 'ornn', 'rakan'],

    recommendedItems: [
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Furia del Kraken',
        image: '/images/items/krakens-fury.png',
      },
      {
        name: 'Filo de la Muerte',
        image: '/images/items/deathblade.png',
      },
      {
        name: 'Garra de Dragón',
        image: '/images/items/dragons-claw.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Vesta Espinosa',
        image: '/images/items/bramble-vest.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
    ],

    activeTraits: [
      {
        name: 'Bosqueviejo',
        icon: '/images/traits/bosqueviejo.png',
        count: 4,
        level: 'silver',
      },
      {
        name: 'Peleador',
        icon: '/images/traits/peleador.png',
        count: 4,
        level: 'silver',
      },
      {
        name: 'Infernal',
        icon: '/images/traits/infernal.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Ejecutor',
        icon: '/images/traits/ejecutor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Coloso',
        icon: '/images/traits/coloso.png',
        count: 3,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'draven',
        role: 'Carry principal',
        items: ['guinsoos-rageblade', 'krakens-fury', 'deathblade'],
      },
      {
        championId: 'ezreal',
        role: 'Carry secundario',
        items: ['deathblade', 'spear-of-shojin', 'last-whisper'],
      },
      {
        championId: 'maokai',
        role: 'Tanque principal',
        items: ['dragons-claw', 'warmogs-armor', 'bramble-vest'],
      },
      {
        championId: 'kennen',
        role: 'Utilidad',
        items: ['thiefs-gloves'],
      },
      {
        championId: 'gnar',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'alistar',
        role: 'Tanque',
        items: [],
      },
      {
        championId: 'ivern',
        role: 'Retaguardia y soporte',
        items: [],
      },
      {
        championId: 'amumu',
        role: 'Tanque',
        items: [],
      },
      {
        championId: 'taric',
        role: 'Protección',
        items: [],
      },
    ],

    strategySteps: [
      'Busca una apertura con Xayah, Varus, Ornn y Rakan para mantener racha temprana.',
      'Aprovecha los objetos físicos para fortalecer a Draven temprano.',
      'Intenta conseguir a Maokai e Ivern temprano.',
      'Sube al nivel 9 para completar la composición.',
      'Si llegas al nivel 10, puedes añadir Lux de Bosqueviejo.',
    ],

    tip: 'Taric junto a Maokai fortalece la primera línea. Draven y Ezreal ocupan las esquinas de la fila 4 con Ivern protegido entre ellos.',

    board: [
      {
        championId: 'alistar',
        row: 0,
        col: 1,
        items: [],
      },
      {
        championId: 'taric',
        row: 0,
        col: 2,
        items: [],
      },
      {
        championId: 'maokai',
        row: 0,
        col: 3,
        items: ['dragons-claw', 'warmogs-armor', 'bramble-vest'],
      },
      {
        championId: 'amumu',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'gnar',
        row: 1,
        col: 2,
        items: [],
      },
      {
        championId: 'kennen',
        row: 1,
        col: 4,
        items: ['thiefs-gloves'],
      },
      {
        championId: 'draven',
        row: 3,
        col: 0,
        items: ['guinsoos-rageblade', 'krakens-fury', 'deathblade'],
      },
      {
        championId: 'ivern',
        row: 3,
        col: 3,
        items: [],
      },
      {
        championId: 'ezreal',
        row: 3,
        col: 6,
        items: ['deathblade', 'spear-of-shojin', 'last-whisper'],
      },
    ],
  },

  {
    id: 3,
    name: 'Aphelios Bosqueviejo',
    category: 'DAÑO FÍSICO',
    description:
      'Formación de Bosqueviejo con Aphelios y Ezreal en esquinas, Xayah en última fila y una robusta primera línea liderada por Hecarim, Lillia y Ornn.',
    image: '/images/compositions/aphelios.png',
    imagePosition: 'center 15%',
    traits: ['Bosqueviejo', 'Defensor', 'Fuegorrápido', 'Hadístico', 'Peleador'],
    gameMode: 'Fast 8',
    difficulty: 'Intermedia',
    difficultyLevel: 'medium',
    color: 'blue',
    icon: '★',
    tier: 'S',

    longDescription:
      'Esta composición utiliza a Aphelios como principal fuente de daño físico. Bosqueviejo es el eje de la estrategia y combina daño sostenido con una primera línea resistente. Hecarim, Lillia y Ornn defienden al frente, mientras Aphelios, Xayah y Ezreal barren desde la última fila.',

    augments: [
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
      {
        name: 'Los Ricos se Hacen Más Ricos',
        image: '/images/augments/aumentos-economicos.png',
      },
      {
        name: 'Sube de Nivel',
        image: '/images/augments/niveles-altos.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema de Bosqueviejo',
        image: '/images/augments/emblema-bosqueviejo.png',
        role: 'Indispensable para Aphelios',
      },
    ],

    finalChampions: [
      'aphelios',
      'hecarim',
      'ezreal',
      'lillia',
      'gnar',
      'ornn',
      'xayah',
      'alistar',
      'diana',
    ],

    startingChampions: ['xayah', 'ornn', 'varus', 'shen'],

    recommendedItems: [
      {
        name: 'Emblema de Bosqueviejo',
        image: '/images/items/elderwood-emblem.png',
      },
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Furia del Kraken',
        image: '/images/items/krakens-fury.png',
      },
      {
        name: 'Guardia de la Corona',
        image: '/images/items/crownguard.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Manto del Ocaso',
        image: '/images/items/evenshroud.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Mejora Roja',
        image: '/images/items/red-buff.png',
      },
    ],

    activeTraits: [
      {
        name: 'Bosqueviejo',
        icon: '/images/traits/bosqueviejo.png',
        count: 6,
        level: 'gold',
      },
      {
        name: 'Hadístico',
        icon: '/images/traits/hadistico.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Fuegorrápido',
        icon: '/images/traits/fuegorrapido.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Lunar',
        icon: '/images/traits/lunar.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'aphelios',
        role: 'Carry principal',
        items: ['elderwood-emblem', 'guinsoos-rageblade', 'krakens-fury'],
      },
      {
        championId: 'hecarim',
        role: 'Tanque principal',
        items: ['crownguard', 'warmogs-armor', 'evenshroud'],
      },
      {
        championId: 'ezreal',
        role: 'Carry secundario',
        items: ['spear-of-shojin', 'red-buff', 'last-whisper'],
      },
      {
        championId: 'lillia',
        role: 'Tanque frontal',
        items: ['protectors-vow'],
      },
      {
        championId: 'ornn',
        role: 'Tanque frontal',
        items: [],
      },
      {
        championId: 'alistar',
        role: 'Tanque frontal',
        items: [],
      },
      {
        championId: 'gnar',
        role: 'Segunda línea',
        items: ['thiefs-gloves'],
      },
      {
        championId: 'diana',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'xayah',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      'Comienza con unidades de juego temprano como Xayah, Ornn, Varus y Shen.',
      'Utiliza a Xayah como portadora temporal de los objetos de Aphelios.',
      'Amplía la sinergia Bosqueviejo durante la fase 3.',
      'Llega al nivel 8 y busca Aphelios y Hecarim de dos estrellas.',
      'Si consigues Lux con Emblema de Bosqueviejo, potencia la sinergia hasta nueve unidades.',
    ],

    tip: 'Lillia y Ornn deben ir en primera fila junto a Hecarim para armar una muralla impenetrable. Xayah va en la última fila entre Aphelios y Ezreal aportando daño constante.',

    board: [
      {
        championId: 'alistar',
        row: 0,
        col: 1,
        items: [],
      },
      {
        championId: 'lillia',
        row: 0,
        col: 2,
        items: ['protectors-vow'],
      },
      {
        championId: 'hecarim',
        row: 0,
        col: 3,
        items: ['crownguard', 'warmogs-armor', 'evenshroud'],
      },
      {
        championId: 'ornn',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'gnar',
        row: 1,
        col: 2,
        items: ['thiefs-gloves'],
      },
      {
        championId: 'diana',
        row: 1,
        col: 4,
        items: [],
      },
      {
        championId: 'aphelios',
        row: 3,
        col: 0,
        items: ['elderwood-emblem', 'guinsoos-rageblade', 'krakens-fury'],
      },
      {
        championId: 'xayah',
        row: 3,
        col: 3,
        items: [],
      },
      {
        championId: 'ezreal',
        row: 3,
        col: 6,
        items: ['spear-of-shojin', 'red-buff', 'last-whisper'],
      },
    ],
  },

  {
    id: 4,
    name: 'Ahri + Zyra Forjahechizos',
    category: 'DAÑO MÁGICO',
    description:
      'Doble carry mágico con Ahri y Zyra en las esquinas de retaguardia, protegidas por Sett, Rakan, Yorick y Lillia en primera línea.',
    image: '/images/compositions/ahri-zyra.png',
    imagePosition: 'center 15%',
    traits: ['Forjahechizos', 'Floración', 'Invocador', 'Peleador', 'Defensor'],
    gameMode: 'Fast 8',
    difficulty: 'Intermedia',
    difficultyLevel: 'medium',
    color: 'purple',
    icon: '✦',
    tier: 'S',

    longDescription:
      'Ahri y Zyra combinan daño mágico continuo y control de masas en área desde la retaguardia. Sett, Rakan y Yorick forman un muro impenetrable para permitir que ambas completen sus rotaciones de hechizos.',

    augments: [
      {
        name: 'Loto Adornado',
        image: '/images/augments/poder-habilidad.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema Forjahechizos',
        image: '/images/augments/emblema-conjurador.png',
        role: 'Potencia el AP de Zyra',
      },
    ],

    finalChampions: [
      'ahri',
      'zyra',
      'sett',
      'rakan',
      'yorick',
      'lillia',
      'taric',
      'fiddlesticks',
      'gnar',
    ],

    startingChampions: ['karma', 'rakan', 'yorick', 'yunara'],

    recommendedItems: [
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Mangual del Guerrero',
        image: '/images/items/power-gauntlet.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Morellonomicón',
        image: '/images/items/morellonomicon.png',
      },
      {
        name: 'Báculo del Vacío',
        image: '/images/items/void-staff.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Vesta Espinosa',
        image: '/images/items/bramble-vest.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
    ],

    activeTraits: [
      {
        name: 'Forjahechizos',
        icon: '/images/traits/forjahechizos.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Floración',
        icon: '/images/traits/floracion.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Coloso',
        icon: '/images/traits/coloso.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Invocador',
        icon: '/images/traits/invocador.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'ahri',
        role: 'Carry mágico',
        items: ['jeweled-gauntlet', 'power-gauntlet', 'spear-of-shojin'],
      },
      {
        championId: 'zyra',
        role: 'Carry de control',
        items: ['morellonomicon', 'void-staff', 'spear-of-shojin'],
      },
      {
        championId: 'sett',
        role: 'Tanque principal',
        items: ['warmogs-armor', 'bramble-vest', 'spirit-visage'],
      },
      {
        championId: 'gnar',
        role: 'Segunda línea',
        items: ['thiefs-gloves'],
      },
      {
        championId: 'rakan',
        role: 'Tanque frontal',
        items: [],
      },
      {
        championId: 'yorick',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'lillia',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'taric',
        role: 'Soporte frontal',
        items: [],
      },
    ],

    strategySteps: [
      'Inicia con Karma, Rakan, Yorick y Yunara para estabilizar el inicio de partida con AP.',
      'Arma temprano la Lanza de Shojin y el Guantelete Deslumbrante en Karma.',
      'Sube a nivel 8 y sustituye a Karma por Ahri y añade a Zyra.',
      'Consolida la primera línea con Sett y Rakan de 2 estrellas.',
      'Coloca a Zyra en la esquina opuesta a la mayor amenaza enemiga para maximizar su alcance.',
    ],

    tip: 'Sett, Rakan, Yorick y Lillia van en primera línea con Taric junto a Sett. Ahri y Zyra ocupan las esquinas de retaguardia para cubrir todo el mapa.',

    board: [
      {
        championId: 'lillia',
        row: 0,
        col: 1,
        items: [],
      },
      {
        championId: 'sett',
        row: 0,
        col: 2,
        items: ['warmogs-armor', 'bramble-vest', 'spirit-visage'],
      },
      {
        championId: 'taric',
        row: 0,
        col: 3,
        items: [],
      },
      {
        championId: 'rakan',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'yorick',
        row: 0,
        col: 5,
        items: [],
      },
      {
        championId: 'gnar',
        row: 1,
        col: 2,
        items: ['thiefs-gloves'],
      },
      {
        championId: 'fiddlesticks',
        row: 1,
        col: 3,
        items: [],
      },
      {
        championId: 'ahri',
        row: 3,
        col: 0,
        items: ['jeweled-gauntlet', 'power-gauntlet', 'spear-of-shojin'],
      },
      {
        championId: 'zyra',
        row: 3,
        col: 6,
        items: ['morellonomicon', 'void-staff', 'spear-of-shojin'],
      },
    ],
  },

  {
    id: 5,
    name: 'Karma Reroll',
    category: 'DAÑO MÁGICO',
    description:
      'Estrategia de slow roll para conseguir a Karma 3★ como hipercarry de ráfaga mágica, con Yunara de soporte físico y una sólida vanguardia Solar y Coloso.',
    image: '/images/compositions/karma.png',
    imagePosition: 'center 20%',
    traits: ['Floración', 'Solar', 'Forjahechizos', 'Coloso', 'Invocador', 'Ejecutor'],
    gameMode: 'Slow Roll (Nivel 7)',
    difficulty: 'Intermedia',
    difficultyLevel: 'medium',
    color: 'purple',
    icon: '✦',
    tier: 'S',

    longDescription:
      'Composición centrada en subir a Karma a 3 estrellas para desatar su potencial de daño mágico continuo. Yunara aporta daño físico complementario desde la retaguardia, mientras Sejuani, Leona y Yorick absorben todo el castigo enemigo en primera línea con las bonificaciones de Solar y Coloso.',

    augments: [
      {
        name: 'Loto Adornado',
        image: '/images/augments/poder-habilidad.png',
      },
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema Solar',
        image: '/images/augments/emblema-solar.png',
        role: 'Aumenta la resistencia y daño del frente',
      },
    ],

    finalChampions: ['karma', 'sejuani', 'yunara', 'leblanc', 'leona', 'yorick', 'kayle', 'azir'],

    startingChampions: ['karma', 'leona', 'yorick', 'sejuani'],

    recommendedItems: [
      {
        name: 'Mejora Azul',
        image: '/images/items/blue-buff.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Filo de la Muerte',
        image: '/images/items/deathblade.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
    ],

    activeTraits: [
      {
        name: 'Floración',
        icon: '/images/traits/floracion.png',
        count: 3,
        level: 'gold',
      },
      {
        name: 'Solar',
        icon: '/images/traits/solar.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Forjahechizos',
        icon: '/images/traits/forjahechizos.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Coloso',
        icon: '/images/traits/coloso.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Invocador',
        icon: '/images/traits/invocador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Ejecutor',
        icon: '/images/traits/ejecutor.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'karma',
        role: 'Carry mágico principal',
        items: ['blue-buff', 'rabadons-deathcap', 'jeweled-gauntlet'],
      },
      {
        championId: 'sejuani',
        role: 'Tanque principal',
        items: ['gargoyle-stoneplate', 'warmogs-armor'],
      },
      {
        championId: 'yunara',
        role: 'Carry físico secundario',
        items: ['deathblade', 'spear-of-shojin', 'last-whisper'],
      },
      {
        championId: 'leblanc',
        role: 'Control y utilidad AP',
        items: ['morellonomicon', 'void-staff'],
      },
      {
        championId: 'leona',
        role: 'Defensor frontal',
        items: [],
      },
      {
        championId: 'yorick',
        role: 'Tanque e invocador',
        items: [],
      },
      {
        championId: 'kayle',
        role: 'DPS a distancia',
        items: [],
      },
      {
        championId: 'azir',
        role: 'Invocador de retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      'Juego temprano: Comienza con Karma, Leona, Yorick y Sejuani activando Floración y Solar para mantener racha.',
      'Economía: No subas de nivel agresivamente; acumula 50 de oro rápidamente para hacer slow roll a nivel 5 y luego nivel 7.',
      'Búsqueda 3★: Rerollea por encima de 50 de oro hasta conseguir a Karma 3 estrellas como prioridad absoluta, junto con Sejuani y Yunara.',
      'Transición a nivel 7-8: Incorpora a LeBlanc, Kayle y Azir para activar Forjahechizos, Invocador y Ejecutor.',
      'Posicionamiento: Protege a Karma en la esquina de retaguardia rodeada por tus invocadores mientras Sejuani y Leona aguantan el frente.',
    ],

    tip: 'Consigue a Karma 3 estrellas lo antes posible equipada con Mejora Azul y Guantelete Deslumbrante. Su daño en ráfaga derretirá las primeras líneas enemigas antes de que puedan activar sus habilidades.',

    board: [
      {
        championId: 'sejuani',
        row: 0,
        col: 3,
        items: ['gargoyle-stoneplate', 'warmogs-armor'],
      },
      {
        championId: 'leona',
        row: 0,
        col: 2,
        items: [],
      },
      {
        championId: 'yorick',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'yunara',
        row: 2,
        col: 2,
        items: ['deathblade', 'spear-of-shojin', 'last-whisper'],
      },
      {
        championId: 'leblanc',
        row: 2,
        col: 4,
        items: ['morellonomicon', 'void-staff'],
      },
      {
        championId: 'karma',
        row: 3,
        col: 0,
        items: ['blue-buff', 'rabadons-deathcap', 'jeweled-gauntlet'],
      },
      {
        championId: 'azir',
        row: 3,
        col: 5,
        items: [],
      },
      {
        championId: 'kayle',
        row: 3,
        col: 6,
        items: [],
      },
    ],
  },

  // ==========================================
  // RANGO A
  // ==========================================
  {
    id: 6,
    name: 'Mamabeak Elderwood',
    category: 'HÍBRIDA',
    description:
      'Mamapico 3 estrellas como carry principal de daño híbrido en esquina inferior, secundada por Zyra y Hecarim.',
    image: '/images/compositions/mamabeak.png',
    imagePosition: 'center 15%',
    traits: ['Bosqueviejo', 'Grietozoico', 'Fuegorrápido', 'Invocador', 'Vanguardia'],
    gameMode: 'Slow Roll (Nivel 7)',
    difficulty: 'Media',
    difficultyLevel: 'medium',
    color: 'blue',
    icon: '★',
    tier: 'A',

    longDescription:
      'Mamapico es el carry absoluto de la formación. Requiere buscar 3 estrellas a nivel 7 manteniendo economía. Hecarim y Krug sostienen todo el peso defensivo mientras Xayah y Zyra proveen apoyo y daño mágico complementario.',

    augments: [
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema de Bosqueviejo',
        image: '/images/augments/emblema-bosqueviejo.png',
        role: 'Clave en Mamapico',
      },
    ],

    finalChampions: ['mamapico', 'hecarim', 'rocoso', 'xayah', 'alistar', 'centinela', 'zyra'],

    startingChampions: ['xayah', 'alistar', 'ornn', 'leblanc'],

    recommendedItems: [
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Sablepistola Hextech',
        image: '/images/items/hextech-gunblade.png',
      },
      {
        name: 'Determinación Titánica',
        image: '/images/items/titan-resolve.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Juramento del Protector',
        image: '/images/items/protectors-vow.png',
      },
      {
        name: 'Capa Solar',
        image: '/images/items/sunfire-cape.png',
      },
      {
        name: 'Báculo del Vacío',
        image: '/images/items/void-staff.png',
      },
    ],

    activeTraits: [
      {
        name: 'Bosqueviejo',
        icon: '/images/traits/bosqueviejo.png',
        count: 4,
        level: 'silver',
      },
      {
        name: 'Fuegorrápido',
        icon: '/images/traits/fuegorrapido.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Vanguardia',
        icon: '/images/traits/vanguardia.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Grietozoico',
        icon: '/images/traits/grietozoico.png',
        count: 3,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'mamapico',
        role: 'Carry principal',
        items: ['guinsoos-rageblade', 'hextech-gunblade', 'titan-resolve'],
      },
      {
        championId: 'hecarim',
        role: 'Tanque principal',
        items: ['warmogs-armor', 'gargoyle-stoneplate', 'protectors-vow'],
      },
      {
        championId: 'rocoso',
        role: 'Tanque secundario',
        items: ['sunfire-cape', 'evenshroud', 'warmogs-armor'],
      },
      {
        championId: 'zyra',
        role: 'Carry secundario',
        items: ['void-staff', 'spear-of-shojin', 'archangels-staff'],
      },
      {
        championId: 'xayah',
        role: 'Soporte retaguardia',
        items: [],
      },
      {
        championId: 'alistar',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'centinela',
        role: 'Primera línea',
        items: [],
      },
    ],

    strategySteps: [
      'Inicia con Xayah, Alistar, Ornn y LeBlanc acumulando economía.',
      'Conserva más de 50 de oro y haz Slow Roll a nivel 7 para Mamapico.',
      'No subas a nivel 8 hasta conseguir a Mamapico de 3 estrellas.',
      'Hecarim y Krug deben equipar todos los objetos de tanque.',
      'Posiciona a Xayah al lado de Mamapico para protegerla de asaltos.',
    ],

    tip: 'Mamapico es el carry principal: no abandones el reroll hasta tenerla a 3 estrellas. Colócala en la esquina inferior izquierda con Xayah a su lado.',

    board: [
      {
        championId: 'alistar',
        row: 0,
        col: 1,
        items: [],
      },
      {
        championId: 'hecarim',
        row: 0,
        col: 2,
        items: ['warmogs-armor', 'gargoyle-stoneplate', 'protectors-vow'],
      },
      {
        championId: 'rocoso',
        row: 0,
        col: 3,
        items: ['sunfire-cape', 'evenshroud', 'warmogs-armor'],
      },
      {
        championId: 'centinela',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'mamapico',
        row: 3,
        col: 0,
        items: ['guinsoos-rageblade', 'hextech-gunblade', 'titan-resolve'],
      },
      {
        championId: 'xayah',
        row: 3,
        col: 1,
        items: [],
      },
      {
        championId: 'zyra',
        row: 3,
        col: 6,
        items: ['void-staff', 'spear-of-shojin', 'archangels-staff'],
      },
    ],
  },

  {
    id: 7,
    name: 'Azir Reroll',
    category: 'DAÑO MÁGICO',
    description:
      'Azir en la esquina trasera canalizando soldados continuos, con Rammus en solitario en primera fila y Veigar, Soraka y Zyra a su lado.',
    image: '/images/compositions/azir.png',
    imagePosition: 'center 15%',
    traits: ['Invocador', 'Espina Negra', 'Ejecutor', 'Aluxe', 'Defensor'],
    gameMode: 'Slow Roll (Nivel 7)',
    difficulty: 'Intermedia',
    difficultyLevel: 'medium',
    color: 'purple',
    icon: '✦',
    tier: 'A',

    longDescription:
      'Busca a Azir y Rammus de 3 estrellas a nivel 7. Rammus absorbe todo el daño concentrado en el centro gracias a Placas Gargolíticas dobles, mientras Azir escala con Guinsoo y Sombrero Mortífero.',

    augments: [
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Loto Adornado',
        image: '/images/augments/poder-habilidad.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
    ],

    keyEmblems: [],

    finalChampions: ['azir', 'rammus', 'teemo', 'fiddlesticks', 'zyra', 'soraka', 'veigar'],

    startingChampions: ['karma', 'yorick', 'yunara', 'azir'],

    recommendedItems: [
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Sablepistola Hextech',
        image: '/images/items/hextech-gunblade.png',
      },
      {
        name: 'Guardia de la Corona',
        image: '/images/items/crownguard.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Báculo del Vacío',
        image: '/images/items/void-staff.png',
      },
      {
        name: 'Morellonomicón',
        image: '/images/items/morellonomicon.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
    ],

    activeTraits: [
      {
        name: 'Invocador',
        icon: '/images/traits/invocador.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Aluxe',
        icon: '/images/traits/aluxe.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Ejecutor',
        icon: '/images/traits/ejecutor.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'azir',
        role: 'Carry principal',
        items: ['guinsoos-rageblade', 'rabadons-deathcap', 'hextech-gunblade'],
      },
      {
        championId: 'rammus',
        role: 'Tanque solitario',
        items: ['crownguard', 'gargoyle-stoneplate', 'gargoyle-stoneplate'],
      },
      {
        championId: 'zyra',
        role: 'Utilidad y daño',
        items: ['void-staff', 'morellonomicon', 'spear-of-shojin'],
      },
      {
        championId: 'teemo',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'fiddlesticks',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'soraka',
        role: 'Retaguardia',
        items: [],
      },
      {
        championId: 'veigar',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      'Abre con Karma, Yorick, Yunara y Azir.',
      'Prioriza los tres objetos de Azir y doble Placa Gargolítica para Rammus.',
      'Estabiliza en nivel 7 y busca Azir y Rammus de 3 estrellas.',
      'Aprovecha las copias sobrantes de Teemo y Fiddlesticks para mejorar el tablero.',
      'Rammus debe situarse solo en el centro para atraer a todos los enemigos.',
    ],

    tip: 'Rammus solo en el centro de primera fila activa el máximo valor de sus Placas Gargolíticas. Azir se coloca en la esquina con Zyra, Soraka y Veigar a su lado.',

    board: [
      {
        championId: 'rammus',
        row: 0,
        col: 3,
        items: ['crownguard', 'gargoyle-stoneplate', 'gargoyle-stoneplate'],
      },
      {
        championId: 'teemo',
        row: 2,
        col: 2,
        items: [],
      },
      {
        championId: 'fiddlesticks',
        row: 2,
        col: 4,
        items: [],
      },
      {
        championId: 'azir',
        row: 3,
        col: 0,
        items: ['guinsoos-rageblade', 'rabadons-deathcap', 'hextech-gunblade'],
      },
      {
        championId: 'zyra',
        row: 3,
        col: 2,
        items: ['void-staff', 'morellonomicon', 'spear-of-shojin'],
      },
      {
        championId: 'soraka',
        row: 3,
        col: 4,
        items: [],
      },
      {
        championId: 'veigar',
        row: 3,
        col: 6,
        items: [],
      },
    ],
  },

  {
    id: 8,
    name: 'Soraka Flex AP Fast 8',
    category: 'DAÑO MÁGICO',
    description:
      'Soraka y Ezreal combinando poder mágico y físico en retaguardia, con Ornn y Hecarim sosteniendo el choque frontal.',
    image: '/images/compositions/soraka.png',
    imagePosition: 'center 15%',
    traits: ['Bosqueviejo', 'Ejecutor', 'Defensor', 'Vanguardia', 'Hadístico'],
    gameMode: 'Fast 8',
    difficulty: 'Avanzada',
    difficultyLevel: 'hard',
    color: 'blue',
    icon: '★',
    tier: 'A',

    longDescription:
      'Versión de alta flexibilidad que escala con Bosqueviejo y Ejecutores. Soraka lanza ráfagas de AP continuas y se potencia enormemente con el Emblema de Bosqueviejo. Ezreal aporta el daño físico complementario.',

    augments: [
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
      {
        name: 'Los Ricos se Hacen Más Ricos',
        image: '/images/augments/aumentos-economicos.png',
      },
      {
        name: 'Sube de Nivel',
        image: '/images/augments/niveles-altos.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema de Bosqueviejo',
        image: '/images/augments/emblema-bosqueviejo.png',
        role: 'Indispensable para Soraka',
      },
    ],

    finalChampions: [
      'soraka',
      'ezreal',
      'ornn',
      'hecarim',
      'fiddlesticks',
      'taric',
      'kennen',
      'gnar',
      'lux',
    ],

    startingChampions: ['ornn', 'xayah', 'shen', 'leblanc'],

    recommendedItems: [
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Emblema de Bosqueviejo',
        image: '/images/items/elderwood-emblem.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Garra de Dragón',
        image: '/images/items/dragons-claw.png',
      },
      {
        name: 'Vesta Espinosa',
        image: '/images/items/bramble-vest.png',
      },
      {
        name: 'Capa Solar',
        image: '/images/items/sunfire-cape.png',
      },
    ],

    activeTraits: [
      {
        name: 'Bosqueviejo',
        icon: '/images/traits/bosqueviejo.png',
        count: 5,
        level: 'silver',
      },
      {
        name: 'Ejecutor',
        icon: '/images/traits/ejecutor.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Vanguardia',
        icon: '/images/traits/vanguardia.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'soraka',
        role: 'Carry mágico',
        items: ['spear-of-shojin', 'rabadons-deathcap', 'elderwood-emblem'],
      },
      {
        championId: 'ezreal',
        role: 'Carry secundario',
        items: ['spear-of-shojin', 'last-whisper', 'guinsoos-rageblade'],
      },
      {
        championId: 'hecarim',
        role: 'Tanque principal',
        items: ['dragons-claw', 'bramble-vest', 'sunfire-cape'],
      },
      {
        championId: 'gnar',
        role: 'Segunda línea',
        items: ['thiefs-gloves'],
      },
      {
        championId: 'ornn',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'taric',
        role: 'Soporte frontal',
        items: [],
      },
      {
        championId: 'fiddlesticks',
        role: 'Apoyo frontal',
        items: [],
      },
      {
        championId: 'kennen',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'lux',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      'Inicia con Ornn, Xayah, Shen y LeBlanc.',
      'Prioriza componentes de maná y AP para Soraka.',
      'Llega a nivel 8 con más de 40 de oro para rodar por Soraka y Ezreal.',
      'Intenta conseguir el Emblema de Bosqueviejo para disparar el daño de Soraka.',
      'Coloca a Ezreal en la esquina derecha y Soraka dos casillas a su izquierda.',
    ],

    tip: 'Ornn y Hecarim van al frente con Taric y Fiddlesticks como apoyo. Ezreal ocupa la esquina derecha y Lux la esquina izquierda contraria.',

    board: [
      {
        championId: 'ornn',
        row: 0,
        col: 2,
        items: [],
      },
      {
        championId: 'taric',
        row: 0,
        col: 3,
        items: [],
      },
      {
        championId: 'hecarim',
        row: 0,
        col: 4,
        items: ['dragons-claw', 'bramble-vest', 'sunfire-cape'],
      },
      {
        championId: 'gnar',
        row: 1,
        col: 2,
        items: ['thiefs-gloves'],
      },
      {
        championId: 'fiddlesticks',
        row: 1,
        col: 3,
        items: [],
      },
      {
        championId: 'kennen',
        row: 1,
        col: 4,
        items: [],
      },
      {
        championId: 'lux',
        row: 3,
        col: 0,
        items: [],
      },
      {
        championId: 'soraka',
        row: 3,
        col: 4,
        items: ['spear-of-shojin', 'rabadons-deathcap', 'elderwood-emblem'],
      },
      {
        championId: 'ezreal',
        row: 3,
        col: 6,
        items: ['spear-of-shojin', 'last-whisper', 'guinsoos-rageblade'],
      },
    ],
  },

  {
    id: 9,
    name: 'Akali + Camille Solar Reroll',
    category: 'DAÑO FÍSICO',
    description:
      'Doble carry de 1 de oro con Akali y Camille a 3 estrellas, apoyadas por Ornn en solitario al frente y Varus en retaguardia.',
    image: '/images/compositions/akali-camille.png',
    imagePosition: 'center 15%',
    traits: ['Arrasador', 'Solar', 'Defensor', 'Fuegorrápido', 'Coloso'],
    gameMode: 'Slow Roll (Nivel 5)',
    difficulty: 'Fácil',
    difficultyLevel: 'easy',
    color: 'orange',
    icon: '✦',
    tier: 'A',

    longDescription:
      'Composición de reroll a nivel 4 y 5 centrada en conseguir a Akali, Camille y Ornn a tres estrellas. Aprovecha el escalado del rasgo Solar para hacer que cada unidad multiplique su valor.',

    augments: [
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
    ],

    keyEmblems: [],

    finalChampions: ['akali', 'camille', 'ornn', 'leona', 'varus', 'sejuani', 'kayle'],

    startingChampions: ['akali', 'camille', 'leona', 'ornn'],

    recommendedItems: [
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Mano de la Justicia',
        image: '/images/items/hand-of-justice.png',
      },
      {
        name: 'Filo de la Noche',
        image: '/images/items/edge-of-night.png',
      },
      {
        name: 'Guantelete de Sterak',
        image: '/images/items/steraks-gage.png',
      },
      {
        name: 'Fajín de Mercurio',
        image: '/images/items/quicksilver.png',
      },
      {
        name: 'Filo Infinito',
        image: '/images/items/infinity-edge.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Guardia de la Corona',
        image: '/images/items/crownguard.png',
      },
    ],

    activeTraits: [
      {
        name: 'Solar',
        icon: '/images/traits/solar.png',
        count: 4,
        level: 'silver',
      },
      {
        name: 'Arrasador',
        icon: '/images/traits/arrasador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Fuegorrápido',
        icon: '/images/traits/fuegorrapido.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'akali',
        role: 'Carry asesino',
        items: ['jeweled-gauntlet', 'hand-of-justice', 'edge-of-night'],
      },
      {
        championId: 'camille',
        role: 'Luchadora frontal',
        items: ['steraks-gage', 'quicksilver', 'infinity-edge'],
      },
      {
        championId: 'ornn',
        role: 'Tanque solitario',
        items: ['gargoyle-stoneplate', 'crownguard', 'warmogs-armor'],
      },
      {
        championId: 'varus',
        role: 'Carry de rango',
        items: ['spear-of-shojin', 'last-whisper', 'infinity-edge'],
      },
      {
        championId: 'leona',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'sejuani',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'kayle',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      'No subas de nivel durante las rondas 2-1 a 2-7 para acumular oro.',
      'Rueda por Akali, Camille y Ornn en nivel 4 y 5 antes de subir.',
      'Cuando consigas las tres unidades a 3 estrellas, sube a nivel 6 y 7.',
      'Añade Sejuani y Kayle para completar las sinergias Solar.',
      'Varus en esquina izquierda y Kayle en esquina derecha proporcionan fuego cruzado.',
    ],

    tip: 'Ornn solo en el centro absorbe todo el daño gracias a su Armadura Pétrea. Akali y Camille van justo detrás para entrar a la refriega sin ser atacadas al instante.',

    board: [
      {
        championId: 'ornn',
        row: 0,
        col: 3,
        items: ['gargoyle-stoneplate', 'crownguard', 'warmogs-armor'],
      },
      {
        championId: 'leona',
        row: 1,
        col: 1,
        items: [],
      },
      {
        championId: 'akali',
        row: 1,
        col: 2,
        items: ['jeweled-gauntlet', 'hand-of-justice', 'edge-of-night'],
      },
      {
        championId: 'camille',
        row: 1,
        col: 4,
        items: ['steraks-gage', 'quicksilver', 'infinity-edge'],
      },
      {
        championId: 'sejuani',
        row: 1,
        col: 5,
        items: [],
      },
      {
        championId: 'varus',
        row: 3,
        col: 0,
        items: ['spear-of-shojin', 'last-whisper', 'infinity-edge'],
      },
      {
        championId: 'kayle',
        row: 3,
        col: 6,
        items: [],
      },
    ],
  },

  {
    id: 10,
    name: "Kha'Zix Reroll",
    category: 'DAÑO FÍSICO',
    description:
      "Kha'Zix en primera línea lateral eliminando objetivos aislados, con Diana de apoyo Lunar y Hecarim al frente.",
    image: '/images/compositions/khazix.png',
    imagePosition: 'center 15%',
    traits: ['Rival', 'Lunar', 'Vanguardia', 'Arrasador', 'Bosqueviejo'],
    gameMode: 'Slow Roll (Nivel 7)',
    difficulty: 'Avanzada',
    difficultyLevel: 'hard',
    color: 'purple',
    icon: '✦',
    tier: 'A',

    longDescription:
      "Composición agresiva centrada en Kha'Zix a 3 estrellas. Se posiciona en una esquina frontal para que salte rápidamente a la retaguardia enemiga. Diana se mantiene cerca para activar la bonificación Lunar.",

    augments: [
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
    ],

    keyEmblems: [],

    finalChampions: [
      'khazix',
      'diana',
      'hecarim',
      'ornn',
      'fiddlesticks',
      'ezreal',
      'soraka',
      'alune',
    ],

    startingChampions: ['khazix', 'ornn', 'alistar', 'leblanc'],

    recommendedItems: [
      {
        name: 'Mano de la Justicia',
        image: '/images/items/hand-of-justice.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Chispa Iónica',
        image: '/images/items/ionic-spark.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
      {
        name: 'Mejora Roja',
        image: '/images/items/red-buff.png',
      },
    ],

    activeTraits: [
      {
        name: 'Lunar',
        icon: '/images/traits/lunar.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Vanguardia',
        icon: '/images/traits/vanguardia.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Arrasador',
        icon: '/images/traits/arrasador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Bosqueviejo',
        icon: '/images/traits/bosqueviejo.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'khazix',
        role: 'Carry principal',
        items: ['hand-of-justice', 'hand-of-justice', 'rabadons-deathcap'],
      },
      {
        championId: 'diana',
        role: 'Carry secundario',
        items: ['jeweled-gauntlet', 'hand-of-justice', 'ionic-spark'],
      },
      {
        championId: 'hecarim',
        role: 'Tanque principal',
        items: ['warmogs-armor', 'gargoyle-stoneplate', 'spirit-visage'],
      },
      {
        championId: 'ezreal',
        role: 'Daño a distancia',
        items: ['red-buff', 'spear-of-shojin', 'guinsoos-rageblade'],
      },
      {
        championId: 'ornn',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'fiddlesticks',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'soraka',
        role: 'Retaguardia',
        items: [],
      },
      {
        championId: 'alune',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      "Inicia con Kha'Zix, Ornn, Alistar y LeBlanc.",
      "Acumula componentes para doble Mano de la Justicia en Kha'Zix.",
      "Haz Slow Roll a nivel 7 para conseguir a Kha'Zix y Diana de 3 estrellas.",
      "Coloca a Kha'Zix en el lateral que coincida con el carry enemigo aislado.",
      'Añade Ezreal, Soraka y Alune para rematar en juego tardío.',
    ],

    tip: "Kha'Zix en el lateral frontal (C0) para que salte sin estorbos hacia rivales aislados. Diana debe permanecer cerca para activar la bonificación Lunar.",

    board: [
      {
        championId: 'khazix',
        row: 0,
        col: 0,
        items: ['hand-of-justice', 'hand-of-justice', 'rabadons-deathcap'],
      },
      {
        championId: 'hecarim',
        row: 0,
        col: 1,
        items: ['warmogs-armor', 'gargoyle-stoneplate', 'spirit-visage'],
      },
      {
        championId: 'ornn',
        row: 0,
        col: 3,
        items: [],
      },
      {
        championId: 'fiddlesticks',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'diana',
        row: 1,
        col: 1,
        items: ['jeweled-gauntlet', 'hand-of-justice', 'ionic-spark'],
      },
      {
        championId: 'alune',
        row: 3,
        col: 0,
        items: [],
      },
      {
        championId: 'soraka',
        row: 3,
        col: 3,
        items: [],
      },
      {
        championId: 'ezreal',
        row: 3,
        col: 6,
        items: ['red-buff', 'spear-of-shojin', 'guinsoos-rageblade'],
      },
    ],
  },

  // ==========================================
  // RANGO B
  // ==========================================
  {
    id: 11,
    name: 'Veigar Reroll + Forjahechizos',
    category: 'DAÑO MÁGICO',
    description:
      'Veigar en la esquina izquierda acumulando poder de habilidad infinito con cada eliminación, protegido por Ornn en primera fila.',
    image: '/images/compositions/veigar.png',
    imagePosition: 'center 15%',
    traits: ['Forjahechizos', 'Aluxe', 'Bosqueviejo', 'Espina Negra', 'Coloso'],
    gameMode: 'Slow Roll (Nivel 5)',
    difficulty: 'Fácil',
    difficultyLevel: 'easy',
    color: 'blue',
    icon: '➤',
    tier: 'B',

    longDescription:
      'Composición de 1 de oro que busca a Veigar y Ornn de 3 estrellas. Veigar acumula poder de habilidad de forma permanente con cada baja enemiga, convirtiéndose en un monstruo en juego tardío.',

    augments: [
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Loto Adornado',
        image: '/images/augments/poder-habilidad.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
    ],

    keyEmblems: [],

    finalChampions: [
      'veigar',
      'ornn',
      'reksai',
      'alistar',
      'leblanc',
      'fiddlesticks',
      'cassiopeia',
    ],

    startingChampions: ['veigar', 'ornn', 'kobuko', 'reksai'],

    recommendedItems: [
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Mejora Azul',
        image: '/images/items/blue-buff.png',
      },
      {
        name: 'Sablepistola Hextech',
        image: '/images/items/hextech-gunblade.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Guardia de la Corona',
        image: '/images/items/crownguard.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Báculo del Vacío',
        image: '/images/items/void-staff.png',
      },
      {
        name: 'Morellonomicón',
        image: '/images/items/morellonomicon.png',
      },
    ],

    activeTraits: [
      {
        name: 'Forjahechizos',
        icon: '/images/traits/forjahechizos.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Aluxe',
        icon: '/images/traits/aluxe.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Bosqueviejo',
        icon: '/images/traits/bosqueviejo.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'veigar',
        role: 'Carry principal',
        items: ['jeweled-gauntlet', 'blue-buff', 'hextech-gunblade'],
      },
      {
        championId: 'ornn',
        role: 'Tanque solitario',
        items: ['warmogs-armor', 'crownguard', 'gargoyle-stoneplate'],
      },
      {
        championId: 'leblanc',
        role: 'Utilidad AP',
        items: ['void-staff', 'morellonomicon'],
      },
      {
        championId: 'reksai',
        role: 'Línea intermedia',
        items: [],
      },
      {
        championId: 'alistar',
        role: 'Línea intermedia',
        items: [],
      },
      {
        championId: 'fiddlesticks',
        role: 'Línea intermedia',
        items: [],
      },
      {
        championId: 'cassiopeia',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      'No compres experiencia antes de nivel 5 para maximizar probabilidades de Veigar y Ornn.',
      'Haz Slow Roll por encima de 50 de oro hasta conseguir ambos a 3 estrellas.',
      'Equipa a Veigar con Mejora Azul de inmediato para que empiece a acumular eliminaciones.',
      'Ornn al frente absorbe todo el ataque mientras Veigar limpia una a una las fichas.',
      'Añade Cassiopeia y LeBlanc en retaguardia para elevar la potencia mágica.',
    ],

    tip: 'Ornn solo en el centro de primera fila absorbe todo el impacto. Veigar se ubica en la esquina izquierda con LeBlanc y Cassiopeia en retaguardia.',

    board: [
      {
        championId: 'ornn',
        row: 0,
        col: 3,
        items: ['warmogs-armor', 'crownguard', 'gargoyle-stoneplate'],
      },
      {
        championId: 'reksai',
        row: 2,
        col: 1,
        items: [],
      },
      {
        championId: 'fiddlesticks',
        row: 2,
        col: 3,
        items: [],
      },
      {
        championId: 'alistar',
        row: 2,
        col: 5,
        items: [],
      },
      {
        championId: 'veigar',
        row: 3,
        col: 0,
        items: ['jeweled-gauntlet', 'blue-buff', 'hextech-gunblade'],
      },
      {
        championId: 'leblanc',
        row: 3,
        col: 3,
        items: ['void-staff', 'morellonomicon'],
      },
      {
        championId: 'cassiopeia',
        row: 3,
        col: 6,
        items: [],
      },
    ],
  },

  {
    id: 12,
    name: 'Xayah Reroll',
    category: 'DAÑO FÍSICO',
    description:
      'Xayah disparando ráfagas continuas de plumas protegida en retaguardia, con Ornn y Rakan asegurando el frente.',
    image: '/images/compositions/xayah.png',
    imagePosition: 'center 15%',
    traits: ['Fuegorrápido', 'Bosqueviejo', 'Hadístico', 'Coloso', 'Defensor'],
    gameMode: 'Slow Roll (Nivel 5)',
    difficulty: 'Fácil',
    difficultyLevel: 'easy',
    color: 'blue',
    icon: '✦',
    tier: 'B',

    longDescription:
      'Estrategia de 1 de oro enfocada en Xayah de 3 estrellas. Su velocidad de ataque se dispara rápidamente gracias a Fuegorrápido, mientras Varus y Tristana aportan daño sostenido a distancia.',

    augments: [
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
    ],

    keyEmblems: [],

    finalChampions: ['xayah', 'ornn', 'varus', 'rakan', 'hecarim', 'tristana', 'amumu', 'lillia'],

    startingChampions: ['xayah', 'varus', 'ornn', 'rakan'],

    recommendedItems: [
      {
        name: 'Furia del Kraken',
        image: '/images/items/krakens-fury.png',
      },
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Filo de la Muerte',
        image: '/images/items/deathblade.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Filo Infinito',
        image: '/images/items/infinity-edge.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
    ],

    activeTraits: [
      {
        name: 'Fuegorrápido',
        icon: '/images/traits/fuegorrapido.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Bosqueviejo',
        icon: '/images/traits/bosqueviejo.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Coloso',
        icon: '/images/traits/coloso.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'xayah',
        role: 'Carry principal',
        items: ['krakens-fury', 'guinsoos-rageblade', 'deathblade'],
      },
      {
        championId: 'ornn',
        role: 'Tanque principal',
        items: ['warmogs-armor', 'spirit-visage', 'gargoyle-stoneplate'],
      },
      {
        championId: 'varus',
        role: 'Carry secundario',
        items: ['infinity-edge', 'spear-of-shojin', 'last-whisper'],
      },
      {
        championId: 'rakan',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'hecarim',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'amumu',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'lillia',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'tristana',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      'Inicia con Xayah, Varus, Ornn y Rakan.',
      'Acumula copias de Xayah y Ornn en nivel 5.',
      'Consigue a Xayah de 3 estrellas antes de gastar oro en subir niveles.',
      'Varus y Tristana en la retaguardia complementan el daño.',
      'Amumu y Lillia cierran la muralla de tanques en nivel 8.',
    ],

    tip: 'Ornn en el centro de primera línea con Rakan y Hecarim como tanques secundarios. Xayah se protege en la esquina trasera con Varus y Tristana.',

    board: [
      {
        championId: 'amumu',
        row: 0,
        col: 1,
        items: [],
      },
      {
        championId: 'rakan',
        row: 0,
        col: 2,
        items: [],
      },
      {
        championId: 'ornn',
        row: 0,
        col: 3,
        items: ['warmogs-armor', 'spirit-visage', 'gargoyle-stoneplate'],
      },
      {
        championId: 'hecarim',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'lillia',
        row: 0,
        col: 5,
        items: [],
      },
      {
        championId: 'xayah',
        row: 3,
        col: 0,
        items: ['krakens-fury', 'guinsoos-rageblade', 'deathblade'],
      },
      {
        championId: 'varus',
        row: 3,
        col: 4,
        items: ['infinity-edge', 'spear-of-shojin', 'last-whisper'],
      },
      {
        championId: 'tristana',
        row: 3,
        col: 6,
        items: [],
      },
    ],
  },

  {
    id: 13,
    name: 'Solar Kayle Reroll',
    category: 'HÍBRIDA',
    description:
      'Kayle y Aphelios barriendo juntos desde la parte derecha de la retaguardia, con Sejuani absorbiendo todo el castigo frontal.',
    image: '/images/compositions/solar-kayle.png',
    imagePosition: 'center 15%',
    traits: ['Solar', 'Fuegorrápido', 'Coloso', 'Defensor', 'Lunar'],
    gameMode: 'Slow Roll (Nivel 6)',
    difficulty: 'Intermedia',
    difficultyLevel: 'medium',
    color: 'purple',
    icon: '✦',
    tier: 'B',

    longDescription:
      'Kayle es el carry principal. Prioriza su Espadafuria de Guinsoo y Sombrero Mortífero y busca subirla a 3 estrellas a nivel 6 antes de acelerar niveles. Aphelios y Varus aumentan la capacidad de perforación de armaduras.',

    augments: [
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
    ],

    keyEmblems: [],

    finalChampions: ['kayle', 'sejuani', 'leona', 'shen', 'varus', 'diana', 'amumu', 'aphelios'],

    startingChampions: ['kayle', 'leona', 'varus', 'shen'],

    recommendedItems: [
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Mejora Roja',
        image: '/images/items/red-buff.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
    ],

    activeTraits: [
      {
        name: 'Solar',
        icon: '/images/traits/solar.png',
        count: 4,
        level: 'silver',
      },
      {
        name: 'Fuegorrápido',
        icon: '/images/traits/fuegorrapido.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Coloso',
        icon: '/images/traits/coloso.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'kayle',
        role: 'Carry principal',
        items: ['guinsoos-rageblade', 'rabadons-deathcap', 'red-buff'],
      },
      {
        championId: 'sejuani',
        role: 'Tanque principal',
        items: ['gargoyle-stoneplate', 'spirit-visage', 'warmogs-armor'],
      },
      {
        championId: 'aphelios',
        role: 'Perforación física',
        items: ['last-whisper'],
      },
      {
        championId: 'varus',
        role: 'Daño a distancia',
        items: ['infinity-edge', 'spear-of-shojin'],
      },
      {
        championId: 'leona',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'shen',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'diana',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'amumu',
        role: 'Segunda línea',
        items: [],
      },
    ],

    strategySteps: [
      'Comienza con Kayle, Leona, Varus y Shen.',
      'Prioriza armar la Espadafuria de Guinsoo en Kayle cuanto antes.',
      'Conserva más de 50 de oro y haz Slow Roll a nivel 6 para Kayle y Sejuani de 3 estrellas.',
      'Añade a Diana y Aphelios para activar sinergia Lunar y Fuegorrápido.',
      'Coloca a Kayle y Aphelios juntos en el lado derecho de la última fila.',
    ],

    tip: 'Sejuani sola al frente absorbe todo el castigo. Kayle y Aphelios van juntos en la esquina derecha de la última fila para concentrar su fuego.',

    board: [
      {
        championId: 'sejuani',
        row: 0,
        col: 3,
        items: ['gargoyle-stoneplate', 'spirit-visage', 'warmogs-armor'],
      },
      {
        championId: 'diana',
        row: 1,
        col: 1,
        items: [],
      },
      {
        championId: 'leona',
        row: 1,
        col: 2,
        items: [],
      },
      {
        championId: 'shen',
        row: 1,
        col: 4,
        items: [],
      },
      {
        championId: 'amumu',
        row: 1,
        col: 5,
        items: [],
      },
      {
        championId: 'varus',
        row: 3,
        col: 2,
        items: ['infinity-edge', 'spear-of-shojin'],
      },
      {
        championId: 'kayle',
        row: 3,
        col: 5,
        items: ['guinsoos-rageblade', 'rabadons-deathcap', 'red-buff'],
      },
      {
        championId: 'aphelios',
        row: 3,
        col: 6,
        items: ['last-whisper'],
      },
    ],
  },

  {
    id: 14,
    name: 'Warwick Reroll',
    category: 'DAÑO FÍSICO',
    description:
      'Warwick y Lóbrego 3 estrellas destrozando en primera línea, con Malphite como muralla y Azir en retaguardia.',
    image: '/images/compositions/warwick.png',
    imagePosition: 'center 15%',
    traits: ['Arrasador', 'Espina Negra', 'Grietozoico', 'Coloso', 'Peleador'],
    gameMode: 'Slow Roll (Nivel 6)',
    difficulty: 'Intermedia',
    difficultyLevel: 'medium',
    color: 'orange',
    icon: '✦',
    tier: 'B',

    longDescription:
      'Composición de combate cuerpo a cuerpo feroz. Warwick y Lóbrego buscan tres estrellas para encadenar reinicios y robo de vida. Si Lóbrego no llega a 3 estrellas, se pueden transferir sus objetos de daño a Espino Rojo.',

    augments: [
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Ascensión',
        image: '/images/augments/dano-fisico.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
    ],

    keyEmblems: [],

    finalChampions: [
      'warwick',
      'lobrego',
      'malphite',
      'reksai',
      'diana',
      'espino-rojo',
      'rocoso',
      'azir',
    ],

    startingChampions: ['kobuko', 'reksai', 'lobrego', 'warwick'],

    recommendedItems: [
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Guantelete de Sterak',
        image: '/images/items/steraks-gage.png',
      },
      {
        name: 'Determinación Titánica',
        image: '/images/items/titan-resolve.png',
      },
      {
        name: 'Filo de la Noche',
        image: '/images/items/edge-of-night.png',
      },
      {
        name: 'Fajín de Mercurio',
        image: '/images/items/quicksilver.png',
      },
      {
        name: 'Mano de la Justicia',
        image: '/images/items/hand-of-justice.png',
      },
      {
        name: 'Guardia de la Corona',
        image: '/images/items/crownguard.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
    ],

    activeTraits: [
      {
        name: 'Arrasador',
        icon: '/images/traits/arrasador.png',
        count: 4,
        level: 'silver',
      },
      {
        name: 'Espina Negra',
        icon: '/images/traits/espina-negra.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Grietozoico',
        icon: '/images/traits/grietozoico.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Peleador',
        icon: '/images/traits/peleador.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'warwick',
        role: 'Carry principal',
        items: ['spear-of-shojin', 'steraks-gage', 'titan-resolve'],
      },
      {
        championId: 'lobrego',
        role: 'Carry secundario',
        items: ['edge-of-night', 'quicksilver', 'hand-of-justice'],
      },
      {
        championId: 'malphite',
        role: 'Tanque principal',
        items: ['crownguard', 'gargoyle-stoneplate', 'warmogs-armor'],
      },
      {
        championId: 'espino-rojo',
        role: 'Tercera línea AD',
        items: ['power-gauntlet'],
      },
      {
        championId: 'reksai',
        role: 'Primera línea',
        items: [],
      },
      {
        championId: 'diana',
        role: 'Segunda línea',
        items: [],
      },
      {
        championId: 'rocoso',
        role: 'Tercera línea',
        items: [],
      },
      {
        championId: 'azir',
        role: 'Retaguardia',
        items: [],
      },
    ],

    strategySteps: [
      "Inicia con Kobuko, Rek'Sai, Lóbrego y Warwick.",
      'Conserva más de 50 de oro y haz Slow Roll a nivel 6 para buscar a Warwick y Lóbrego de 3 estrellas.',
      'Equipa a Malphite con objetos de aguante en primera línea.',
      'Si no consigues a Lóbrego de 3 estrellas, transfiere sus objetos de AD a Espino Rojo.',
      'Posiciona a Warwick justo detrás de Lóbrego para que no reciba el primer impacto.',
    ],

    tip: 'Lóbrego y Malphite van en primera fila con Warwick justo detrás de Lóbrego y Diana a su lado. Azir se coloca en la esquina trasera izquierda.',

    board: [
      {
        championId: 'lobrego',
        row: 0,
        col: 2,
        items: ['edge-of-night', 'quicksilver', 'hand-of-justice'],
      },
      {
        championId: 'malphite',
        row: 0,
        col: 3,
        items: ['crownguard', 'gargoyle-stoneplate', 'warmogs-armor'],
      },
      {
        championId: 'reksai',
        row: 0,
        col: 5,
        items: [],
      },
      {
        championId: 'warwick',
        row: 1,
        col: 2,
        items: ['spear-of-shojin', 'steraks-gage', 'titan-resolve'],
      },
      {
        championId: 'diana',
        row: 1,
        col: 3,
        items: [],
      },
      {
        championId: 'espino-rojo',
        row: 2,
        col: 3,
        items: ['power-gauntlet'],
      },
      {
        championId: 'rocoso',
        row: 2,
        col: 4,
        items: [],
      },
      {
        championId: 'azir',
        row: 3,
        col: 0,
        items: [],
      },
    ],
  },

  // ==========================================
  // RANGO C
  // ==========================================
  {
    id: 15,
    name: 'Yunara Reroll',
    category: 'DAÑO FÍSICO / HÍBRIDA',
    description:
      'Composición de slow roll en nivel 5 para buscar a Yunara y Karma a 3 estrellas, con Sejuani y Yorick aguantando la primera línea.',
    image: '/images/compositions/yunara.png',
    imagePosition: 'center 20%',
    traits: ['Floración', 'Solar', 'Coloso', 'Invocador', 'Ejecutor', 'Forjahechizos'],
    gameMode: 'Slow Roll (Nivel 5)',
    difficulty: 'Intermedia',
    difficultyLevel: 'medium',
    color: 'purple',
    icon: '✦',
    tier: 'C',

    longDescription:
      'Estrategia centrada en Karma y Yunara como principales fuentes de daño mágico y físico respectivamente. Se realiza slow roll a nivel 5 con 50 de oro para conseguir a ambas a 3 estrellas, reforzando posteriormente a Sejuani y Yorick en el frente y subiendo a nivel 8 para rematar la mesa con Azir.',

    augments: [
      {
        name: 'Aumentos de reroll',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
      {
        name: 'Fuerza Incomparable',
        image: '/images/augments/dano-fisico.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema Solar',
        image: '/images/augments/emblema-solar.png',
        role: 'Refuerza las resistencias de la vanguardia',
      },
    ],

    finalChampions: ['yunara', 'karma', 'sejuani', 'yorick', 'leona', 'leblanc', 'kayle', 'azir'],

    startingChampions: ['karma', 'yunara', 'yorick', 'sejuani'],

    recommendedItems: [
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
      {
        name: 'Filo de la Muerte',
        image: '/images/items/deathblade.png',
      },
      {
        name: 'Mejora Azul',
        image: '/images/items/blue-buff.png',
      },
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
      {
        name: 'Capa Solar',
        image: '/images/items/sunfire-cape.png',
      },
      {
        name: 'Chispa Iónica',
        image: '/images/items/ionic-spark.png',
      },
    ],

    activeTraits: [
      {
        name: 'Floración',
        icon: '/images/traits/floracion.png',
        count: 3,
        level: 'gold',
      },
      {
        name: 'Solar',
        icon: '/images/traits/solar.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Coloso',
        icon: '/images/traits/coloso.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Invocador',
        icon: '/images/traits/invocador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Forjahechizos',
        icon: '/images/traits/forjahechizos.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Ejecutor',
        icon: '/images/traits/ejecutor.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'yunara',
        role: 'Carry físico principal',
        items: ['spear-of-shojin', 'last-whisper', 'deathblade'],
      },
      {
        championId: 'karma',
        role: 'Carry mágico secundario',
        items: ['blue-buff', 'jeweled-gauntlet', 'rabadons-deathcap'],
      },
      {
        championId: 'sejuani',
        role: 'Tanque principal',
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'spirit-visage'],
      },
      {
        championId: 'yorick',
        role: 'Tanque y debuff',
        items: ['sunfire-cape', 'ionic-spark'],
      },
      {
        championId: 'leona',
        role: 'Defensor frontal',
        items: [],
      },
      {
        championId: 'leblanc',
        role: 'Control mágico',
        items: [],
      },
      {
        championId: 'kayle',
        role: 'DPS secundario',
        items: [],
      },
      {
        championId: 'azir',
        role: 'Invocador tardío',
        items: [],
      },
    ],

    strategySteps: [
      'Juego temprano: Abre mesa con Karma, Yunara, Yorick y Sejuani para sostener economía sin subir de nivel.',
      'Slow Roll a nivel 5: Acumula 50 de oro y rerollea solo el excedente para buscar a Yunara y Karma a 3 estrellas.',
      'Mejora de Tanques: Asegura copias de Sejuani y Yorick para elevarlos a 3 estrellas cuando subas a nivel 6.',
      'Transición a nivel 7-8: Añade a LeBlanc y Kayle, y alcanza nivel 8 para cerrar con Azir activando Invocador y Ejecutor.',
      'Posicionamiento: Mantén a Karma y Yunara en esquinas opuestas para obligar al rival a dividir su daño.',
    ],

    tip: 'Aprovecha que Yunara y Karma comparten coste bajo; haz slow roll por encima de 50 de oro sin prisa para optimizar tus probabilidades en nivel 5.',

    board: [
      {
        championId: 'leona',
        row: 0,
        col: 0,
        items: [],
      },
      {
        championId: 'sejuani',
        row: 0,
        col: 3,
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'spirit-visage'],
      },
      {
        championId: 'yorick',
        row: 0,
        col: 4,
        items: ['sunfire-cape', 'ionic-spark'],
      },
      {
        championId: 'leblanc',
        row: 2,
        col: 1,
        items: [],
      },
      {
        championId: 'kayle',
        row: 3,
        col: 4,
        items: [],
      },
      {
        championId: 'azir',
        row: 3,
        col: 5,
        items: [],
      },
      {
        championId: 'karma',
        row: 3,
        col: 0,
        items: ['blue-buff', 'jeweled-gauntlet', 'rabadons-deathcap'],
      },
      {
        championId: 'yunara',
        row: 3,
        col: 6,
        items: ['spear-of-shojin', 'last-whisper', 'deathblade'],
      },
    ],
  },

  {
    id: 16,
    name: 'Aquelarre / Coven',
    category: 'DAÑO MÁGICO',
    description:
      'Composición vertical de Aquelarre con Lux y Morgana en retaguardia, protegidas por una densa primera línea con Elise, Centinela y Taric.',
    image: '/images/compositions/coven.png',
    imagePosition: 'center 20%',
    traits: ['Aquelarre', 'Forjahechizos', 'Conjurador', 'Vanguardia', 'Cazador', 'Arrasador'],
    gameMode: 'Fast 8',
    difficulty: 'Avanzada',
    difficultyLevel: 'hard',
    color: 'purple',
    icon: '✦',
    tier: 'C',

    longDescription:
      'Comienza con las unidades básicas de Aquelarre para sostener una racha estable. Sube con calma a nivel 8 para buscar a Morgana y Lux (coste 5). Elise y Centinela componen una formidable primera línea que absorbe el castigo mientras Lux canaliza sus ráfagas de área.',

    augments: [
      {
        name: 'Loto Adornado',
        image: '/images/augments/poder-habilidad.png',
      },
      {
        name: 'Niveles Altos',
        image: '/images/augments/niveles-altos.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema de Conjurador',
        image: '/images/augments/emblema-conjurador.png',
        role: 'Aumenta la regeneración de maná de Morgana y Lux',
      },
    ],

    finalChampions: [
      'lux',
      'morgana',
      'camille',
      'caitlyn',
      'elise',
      'cassiopeia',
      'diana',
      'taric',
      'centinela',
    ],

    startingChampions: ['camille', 'caitlyn', 'elise', 'cassiopeia'],

    recommendedItems: [
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Bastón del Vacío',
        image: '/images/items/void-staff.png',
      },
      {
        name: 'Morellonomicón',
        image: '/images/items/morellonomicon.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Valor del Titán',
        image: '/images/items/titans-resolve.png',
      },
      {
        name: 'Juramento del Protector',
        image: '/images/items/protectors-vow.png',
      },
    ],

    activeTraits: [
      {
        name: 'Aquelarre',
        icon: '/images/traits/aquelarre.png',
        count: 5,
        level: 'gold',
      },
      {
        name: 'Forjahechizos',
        icon: '/images/traits/forjahechizos.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Conjurador',
        icon: '/images/traits/conjurador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Vanguardia',
        icon: '/images/traits/vanguardia.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Cazador',
        icon: '/images/traits/aluxe.png',
        count: 1,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'lux',
        role: 'Hipercarry de área (coste 5)',
        items: ['jeweled-gauntlet', 'rabadons-deathcap', 'spear-of-shojin'],
      },
      {
        championId: 'morgana',
        role: 'Carry de desgaste AP',
        items: ['void-staff', 'morellonomicon', 'jeweled-gauntlet'],
      },
      {
        championId: 'elise',
        role: 'Tanque principal',
        items: ['warmogs-armor', 'gargoyle-stoneplate', 'titans-resolve'],
      },
      {
        championId: 'centinela',
        role: 'Tanque colosal',
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'protectors-vow'],
      },
      {
        championId: 'camille',
        role: 'Luchador frontal',
        items: [],
      },
      {
        championId: 'taric',
        role: 'Soporte defensivo',
        items: [],
      },
      {
        championId: 'diana',
        role: 'Vanguardia secundaria',
        items: [],
      },
      {
        championId: 'cassiopeia',
        role: 'Forjahechizos de apoyo',
        items: [],
      },
      {
        championId: 'caitlyn',
        role: 'Francotiradora de apoyo',
        items: [],
      },
    ],

    strategySteps: [
      'Juego temprano: Inicia con Camille, Caitlyn, Elise y Cassiopeia activando Aquelarre para no perder vida.',
      'Estabilización: Usa a Cassiopeia o Morgana temprana como portadoras temporales de los objetos de AP de Lux.',
      'Subida a nivel 8: Guarda oro para llegar a nivel 8 en fase 4-2 o 4-5 y buscar activamente a Morgana y Taric.',
      'Búsqueda de Lux: Lux es coste 5; no gastes todo tu oro desesperadamente en fase 4 antes de consolidar el frente.',
      'Posicionamiento: Agrupa la vanguardia alrededor de Centinela y coloca a Lux en la esquina más resguardada.',
    ],

    tip: 'Lux Aquelarre es una unidad de coste 5. No dependas de encontrarla en la fase 4; estabiliza primero tu mesa con Morgana y Elise.',

    board: [
      {
        championId: 'camille',
        row: 0,
        col: 0,
        items: [],
      },
      {
        championId: 'elise',
        row: 0,
        col: 2,
        items: ['warmogs-armor', 'gargoyle-stoneplate', 'titans-resolve'],
      },
      {
        championId: 'centinela',
        row: 0,
        col: 4,
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'protectors-vow'],
      },
      {
        championId: 'taric',
        row: 1,
        col: 2,
        items: [],
      },
      {
        championId: 'diana',
        row: 1,
        col: 4,
        items: [],
      },
      {
        championId: 'cassiopeia',
        row: 1,
        col: 5,
        items: [],
      },
      {
        championId: 'morgana',
        row: 2,
        col: 3,
        items: ['void-staff', 'morellonomicon', 'jeweled-gauntlet'],
      },
      {
        championId: 'lux',
        row: 3,
        col: 0,
        items: ['jeweled-gauntlet', 'rabadons-deathcap', 'spear-of-shojin'],
      },
      {
        championId: 'caitlyn',
        row: 3,
        col: 6,
        items: [],
      },
    ],
  },

  {
    id: 17,
    name: 'Alune Fast 9',
    category: 'DAÑO MÁGICO / LUNAR',
    description:
      'Composición de valor acelerado y Fast 9 que reúne a Alune, Lux y Morgana protegidas por Centinela, Taric y Rakan.',
    image: '/images/compositions/alune.png',
    imagePosition: 'center 20%',
    traits: ['Lunar', 'Avatar', 'Conjurador', 'Defensor', 'Hadístico', 'Flora Fatalis'],
    gameMode: 'Fast 9',
    difficulty: 'Muy Alta',
    difficultyLevel: 'hard',
    color: 'purple',
    icon: '✦',
    tier: 'C',

    longDescription:
      'Composición orientada a jugadores de alta economía. Se transiciona desde un juego temprano AP hasta alcanzar el nivel 9, donde se despliegan Alune y Lux compartiendo retaguardia para desatar el poder Lunar, con Morgana aplicando quemadura y Centinela aguantando todo el impacto.',

    augments: [
      {
        name: 'Sube de Nivel',
        image: '/images/augments/niveles-altos.png',
      },
      {
        name: 'Los Ricos se Hacen Más Ricos',
        image: '/images/augments/aumentos-economicos.png',
      },
      {
        name: 'Loto Adornado',
        image: '/images/augments/poder-habilidad.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema Lunar',
        image: '/images/augments/emblema-lunar.png',
        role: 'Permite alcanzar 4 Lunar y potenciar a Alune',
      },
    ],

    finalChampions: [
      'alune',
      'morgana',
      'lux',
      'diana',
      'rakan',
      'taric',
      'centinela',
      'lillia',
      'fiddlesticks',
    ],

    startingChampions: ['karma', 'diana', 'yorick', 'sejuani'],

    recommendedItems: [
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Mangual del Guerrero',
        image: '/images/items/power-gauntlet.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Sablepistola Hextech',
        image: '/images/items/hextech-gunblade.png',
      },
      {
        name: 'Morellonomicón',
        image: '/images/items/morellonomicon.png',
      },
      {
        name: 'Bastón del Vacío',
        image: '/images/items/void-staff.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Juramento del Protector',
        image: '/images/items/protectors-vow.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
    ],

    activeTraits: [
      {
        name: 'Lunar',
        icon: '/images/traits/lunar.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Conjurador',
        icon: '/images/traits/conjurador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Vanguardia',
        icon: '/images/traits/vanguardia.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Avatar',
        icon: '/images/traits/arcano.png',
        count: 1,
        level: 'gold',
      },
    ],

    championRoles: [
      {
        championId: 'alune',
        role: 'Carry mágico principal',
        items: ['jeweled-gauntlet', 'spear-of-shojin', 'power-gauntlet'],
      },
      {
        championId: 'lux',
        role: 'Hipercarry secundario AP',
        items: ['jeweled-gauntlet', 'rabadons-deathcap', 'spear-of-shojin'],
      },
      {
        championId: 'morgana',
        role: 'Soporte de curación y quemadura',
        items: ['hextech-gunblade', 'morellonomicon', 'void-staff'],
      },
      {
        championId: 'centinela',
        role: 'Tanque de élite',
        items: ['gargoyle-stoneplate', 'protectors-vow', 'warmogs-armor'],
      },
      {
        championId: 'diana',
        role: 'Daño mágico frontal',
        items: [],
      },
      {
        championId: 'taric',
        role: 'Tanque de absorción',
        items: [],
      },
      {
        championId: 'rakan',
        role: 'Control de masas frontal',
        items: [],
      },
      {
        championId: 'lillia',
        role: 'Defensora intermedia',
        items: [],
      },
      {
        championId: 'fiddlesticks',
        role: 'Interrupción de área',
        items: [],
      },
    ],

    strategySteps: [
      'Economía sólida: Prioriza acumular 50 de oro desde las fases 2 y 3 evitando gastar en rerolls prematuros.',
      'Transición intermedia: Apóyate en tableros AP con Karma o Ahri sosteniendo los objetos de Alune.',
      'Estabilización en nivel 8: Si pierdes demasiada vida en fase 4, busca al menos una copia de Centinela y Morgana antes de ir a 9.',
      'Paso a nivel 9: Con economía recuperada, empuja a nivel 9 y completa la mesa legendaria con Alune y Lux.',
      'Posicionamiento: Coloca a Alune y Lux en la misma zona de retaguardia para concentrar el aura Lunar.',
    ],

    tip: 'No quemes todo tu oro intentando alcanzar nivel 9 si tu mesa no resiste el daño enemigo; estabiliza primero en nivel 8.',

    board: [
      {
        championId: 'centinela',
        row: 0,
        col: 2,
        items: ['gargoyle-stoneplate', 'protectors-vow', 'warmogs-armor'],
      },
      {
        championId: 'taric',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'rakan',
        row: 1,
        col: 1,
        items: [],
      },
      {
        championId: 'lillia',
        row: 1,
        col: 3,
        items: [],
      },
      {
        championId: 'diana',
        row: 1,
        col: 5,
        items: [],
      },
      {
        championId: 'fiddlesticks',
        row: 2,
        col: 2,
        items: [],
      },
      {
        championId: 'morgana',
        row: 2,
        col: 4,
        items: ['hextech-gunblade', 'morellonomicon', 'void-staff'],
      },
      {
        championId: 'lux',
        row: 3,
        col: 5,
        items: ['jeweled-gauntlet', 'rabadons-deathcap', 'spear-of-shojin'],
      },
      {
        championId: 'alune',
        row: 3,
        col: 6,
        items: ['jeweled-gauntlet', 'spear-of-shojin', 'power-gauntlet'],
      },
    ],
  },

  // ==========================================
  // RANGO X
  // ==========================================
  {
    id: 18,
    name: "Rengar + Kha'Zix Incomparables",
    category: 'DAÑO FÍSICO / ASESINOS',
    requirement: 'Requiere aumento',
    description:
      'Composición experimental que depende del aumento Incomparables para disparar la economía y obtener unidades 3★ de coste bajo.',
    image: '/images/compositions/rengar-khazix.png',
    imagePosition: 'center 20%',
    traits: ['Rival', 'Grietozoico', 'Vanguardia', 'Bosqueviejo', 'Peleador'],
    gameMode: 'Slow Roll 3★',
    difficulty: 'Avanzada',
    difficultyLevel: 'hard',
    color: 'orange',
    icon: '✦',
    tier: 'X',

    longDescription:
      "Esta variante gira en torno al aumento Incomparables. Aprovecha la enorme ventaja económica para subir rápidamente a 3 estrellas a Hecarim y Mamapico, mientras Rengar destroza las líneas laterales y Kha'Zix liquida unidades aisladas en retaguardia.",

    augments: [
      {
        name: 'Incomparables',
        image: '/images/augments/incomparables.png',
      },
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Fuerza Incomparable',
        image: '/images/augments/dano-fisico.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema Grietozoico',
        image: '/images/augments/emblema-ejecutor.png',
        role: 'Refuerza las resistencias de la primera línea',
      },
    ],

    finalChampions: ['rengar', 'khazix', 'hecarim', 'mamapico', 'diana', 'rocoso', 'lobrego'],

    startingChampions: ['rengar', 'khazix', 'hecarim', 'mamapico'],

    recommendedItems: [
      {
        name: 'Filo de la Noche',
        image: '/images/items/edge-of-night.png',
      },
      {
        name: 'Mano de la Justicia',
        image: '/images/items/hand-of-justice.png',
      },
      {
        name: 'Filo Infinito',
        image: '/images/items/infinity-edge.png',
      },
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Valor del Titán',
        image: '/images/items/titans-resolve.png',
      },
      {
        name: 'Sablepistola Hextech',
        image: '/images/items/hextech-gunblade.png',
      },
    ],

    activeTraits: [
      {
        name: 'Rival',
        icon: '/images/traits/ejecutor.png',
        count: 2,
        level: 'gold',
      },
      {
        name: 'Grietozoico',
        icon: '/images/traits/grietozoico.png',
        count: 3,
        level: 'silver',
      },
      {
        name: 'Vanguardia',
        icon: '/images/traits/vanguardia.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Arrasador',
        icon: '/images/traits/resistencia.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'rengar',
        role: 'Asesino físico lateral',
        items: ['edge-of-night', 'hand-of-justice', 'infinity-edge'],
      },
      {
        championId: 'khazix',
        role: 'Cazador de objetivos aislados',
        items: ['jeweled-gauntlet', 'hand-of-justice', 'rabadons-deathcap'],
      },
      {
        championId: 'hecarim',
        role: 'Tanque e iniciador',
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'spirit-visage'],
      },
      {
        championId: 'mamapico',
        role: 'DPS continuo y sustento',
        items: ['guinsoos-rageblade', 'titans-resolve', 'hextech-gunblade'],
      },
      {
        championId: 'rocoso',
        role: 'Vanguardia de contención',
        items: [],
      },
      {
        championId: 'lobrego',
        role: 'Flanco frontal',
        items: [],
      },
      {
        championId: 'diana',
        role: 'Disrupción intermedia',
        items: [],
      },
    ],

    strategySteps: [
      'Condición previa: Juega esta composición solo si consigues el aumento Incomparables en fase 2-1.',
      'Economía temprana: Emplea la ventaja económica para comprar todas las copias de Hecarim, Mamapico y Rengar.',
      'Slow Roll: Haz rerolls continuos sobre 50 de oro para conseguir a Hecarim y Mamapico a 3 estrellas.',
      'Escalado de Asesinos: Equipa a Rengar con daño crítico y supervivencia para que penetre la retaguardia rival.',
      "Cierre de partida: Asegura a Kha'Zix para rematar a los carries enemigos que queden desprotegidos.",
    ],

    tip: 'Esta composición depende estrictamente del aumento Incomparables. No la fuerces sin él, ya que requiere su bonificación económica única.',

    board: [
      {
        championId: 'lobrego',
        row: 0,
        col: 0,
        items: [],
      },
      {
        championId: 'hecarim',
        row: 0,
        col: 2,
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'spirit-visage'],
      },
      {
        championId: 'rocoso',
        row: 0,
        col: 3,
        items: [],
      },
      {
        championId: 'mamapico',
        row: 0,
        col: 4,
        items: ['guinsoos-rageblade', 'titans-resolve', 'hextech-gunblade'],
      },
      {
        championId: 'rengar',
        row: 1,
        col: 0,
        items: ['edge-of-night', 'hand-of-justice', 'infinity-edge'],
      },
      {
        championId: 'diana',
        row: 1,
        col: 5,
        items: [],
      },
      {
        championId: 'khazix',
        row: 3,
        col: 6,
        items: ['jeweled-gauntlet', 'hand-of-justice', 'rabadons-deathcap'],
      },
    ],
  },

  {
    id: 19,
    name: 'Ezreal + Soraka Elderwood',
    category: 'HÍBRIDA / BOSQUEVIEJO',
    requirement: 'Requiere emblema',
    description:
      'Composición de Bosqueviejo con doble carry que requiere Emblema de Bosqueviejo en Soraka para potenciar su daño mágico junto a Ezreal.',
    image: '/images/compositions/ezreal-soraka.png',
    imagePosition: 'center 20%',
    traits: ['Bosqueviejo', 'Cazador', 'Ejecutor', 'Invocador', 'Peleador', 'Defensor'],
    gameMode: 'Fast 8 / Fast 9',
    difficulty: 'Alta',
    difficultyLevel: 'hard',
    color: 'green',
    icon: '✦',
    tier: 'X',

    longDescription:
      'Composición híbrida de alto nivel. Soraka se convierte en hipercarry mágico al portar el Emblema de Bosqueviejo, recibiendo armadura, resistencia mágica y poder de habilidad acumulativo. Ezreal remata desde la esquina trasera opuesta con ráfagas físicas.',

    augments: [
      {
        name: 'Emblema de Bosqueviejo',
        image: '/images/augments/emblema-bosqueviejo.png',
      },
      {
        name: 'Loto Adornado',
        image: '/images/augments/poder-habilidad.png',
      },
      {
        name: 'Sube de Nivel',
        image: '/images/augments/niveles-altos.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema de Bosqueviejo',
        image: '/images/items/elderwood-emblem.png',
        role: 'Imprescindible: equípalo en Soraka para activar la composición',
      },
    ],

    finalChampions: [
      'ezreal',
      'soraka',
      'ornn',
      'alistar',
      'leblanc',
      'hecarim',
      'xayah',
      'gnar',
      'fiddlesticks',
    ],

    startingChampions: ['xayah', 'leblanc', 'alistar', 'ornn'],

    recommendedItems: [
      {
        name: 'Emblema de Bosqueviejo',
        image: '/images/items/elderwood-emblem.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Filo de la Muerte',
        image: '/images/items/deathblade.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Sablepistola Hextech',
        image: '/images/items/hextech-gunblade.png',
      },
      {
        name: 'Guantelete de Sterak',
        image: '/images/items/steraks-gage.png',
      },
      {
        name: 'Valor del Titán',
        image: '/images/items/titans-resolve.png',
      },
    ],

    activeTraits: [
      {
        name: 'Bosqueviejo',
        icon: '/images/traits/bosqueviejo.png',
        count: 6,
        level: 'gold',
      },
      {
        name: 'Cazador',
        icon: '/images/traits/aluxe.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Ejecutor',
        icon: '/images/traits/ejecutor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Vanguardia',
        icon: '/images/traits/vanguardia.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Peleador',
        icon: '/images/traits/peleador.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'soraka',
        role: 'Carry mágico principal (con emblema)',
        items: ['elderwood-emblem', 'rabadons-deathcap', 'spear-of-shojin'],
      },
      {
        championId: 'ezreal',
        role: 'Carry físico a distancia',
        items: ['deathblade', 'last-whisper', 'spear-of-shojin'],
      },
      {
        championId: 'hecarim',
        role: 'Tanque frontal',
        items: ['gargoyle-stoneplate', 'spirit-visage', 'warmogs-armor'],
      },
      {
        championId: 'gnar',
        role: 'Bruiser frontal',
        items: ['hextech-gunblade', 'steraks-gage', 'titans-resolve'],
      },
      {
        championId: 'ornn',
        role: 'Defensor y forja',
        items: [],
      },
      {
        championId: 'alistar',
        role: 'Control y tanque',
        items: [],
      },
      {
        championId: 'fiddlesticks',
        role: 'Utilidad AP tras el frente',
        items: [],
      },
      {
        championId: 'xayah',
        role: 'DPS a distancia',
        items: [],
      },
      {
        championId: 'leblanc',
        role: 'Forjahechizos de apoyo',
        items: [],
      },
    ],

    strategySteps: [
      'Requisito obligatorio: Necesitas conseguir un Emblema Bosqueviejo pronto para asignárselo a Soraka.',
      'Inicio firme: Arranca con Xayah, LeBlanc, Alistar y Ornn acumulando acumulaciones tempranas de Bosqueviejo.',
      'Transición de objetos: Deposita los objetos de AD en LeBlanc o Xayah temporalmente hasta localizar a Ezreal.',
      'Nivel 8: Estabiliza tu primera línea con Hecarim y Ornn mejorados a 2 estrellas y equipa a Soraka.',
      'Nivel 9: Concluye la mesa introduciendo a Gnar y Fiddlesticks para maximizar el control y daño.',
    ],

    tip: 'Requiere obligatoriamente el Emblema de Bosqueviejo en Soraka; sin él, no alcanza las estadísticas necesarias para actuar como carry principal.',

    board: [
      {
        championId: 'gnar',
        row: 0,
        col: 0,
        items: ['hextech-gunblade', 'steraks-gage', 'titans-resolve'],
      },
      {
        championId: 'hecarim',
        row: 0,
        col: 2,
        items: ['gargoyle-stoneplate', 'spirit-visage', 'warmogs-armor'],
      },
      {
        championId: 'ornn',
        row: 0,
        col: 3,
        items: [],
      },
      {
        championId: 'alistar',
        row: 0,
        col: 5,
        items: [],
      },
      {
        championId: 'fiddlesticks',
        row: 1,
        col: 3,
        items: [],
      },
      {
        championId: 'leblanc',
        row: 2,
        col: 2,
        items: [],
      },
      {
        championId: 'xayah',
        row: 3,
        col: 4,
        items: [],
      },
      {
        championId: 'ezreal',
        row: 3,
        col: 0,
        items: ['deathblade', 'last-whisper', 'spear-of-shojin'],
      },
      {
        championId: 'soraka',
        row: 3,
        col: 1,
        items: ['elderwood-emblem', 'rabadons-deathcap', 'spear-of-shojin'],
      },
    ],
  },

  {
    id: 20,
    name: 'Sivir Fae',
    category: 'DAÑO FÍSICO / HADÍSTICO',
    requirement: 'Requiere emblema',
    description:
      'Composición vertical de Hadístico / Fae que requiere convertir a Sivir en Hada con Emblema para otorgarle la Corona Hadística.',
    image: '/images/compositions/sivir.png',
    imagePosition: 'center 20%',
    traits: ['Hadístico', 'Cazador', 'Defensor', 'Peleador', 'Coloso', 'Aluxe'],
    gameMode: 'Reroll Nivel 7',
    difficulty: 'Intermedia',
    difficultyLevel: 'medium',
    color: 'blue',
    icon: '✦',
    tier: 'X',

    longDescription:
      'Sivir recibe el Emblema Hadístico convirtiéndose en la receptora ideal de los objetos reales del rasgo. Tristana actúa como carry físico secundario y Lillia aporta control mágico, sostenidas por un muro defensivo liderado por Rammus y Rakan.',

    augments: [
      {
        name: 'Emblema Hadístico',
        image: '/images/augments/emblema-hadistico.png',
      },
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
      {
        name: 'Fuerza Incomparable',
        image: '/images/augments/dano-fisico.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema Hadístico (Hada)',
        image: '/images/items/fae-emblem.png',
        role: 'Imprescindible para convertir a Sivir en Hada y otorgarle la Corona',
      },
    ],

    finalChampions: [
      'sivir',
      'tristana',
      'lillia',
      'rakan',
      'vi',
      'amumu',
      'kobuko',
      'rammus',
      'xayah',
    ],

    startingChampions: ['sivir', 'tristana', 'rakan', 'vi'],

    recommendedItems: [
      {
        name: 'Emblema Hadístico',
        image: '/images/items/fae-emblem.png',
      },
      {
        name: 'Filo Infinito',
        image: '/images/items/infinity-edge.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Filo de la Muerte',
        image: '/images/items/deathblade.png',
      },
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Guantelete Deslumbrante',
        image: '/images/items/jeweled-gauntlet.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Capa Solar',
        image: '/images/items/sunfire-cape.png',
      },
    ],

    activeTraits: [
      {
        name: 'Hadístico',
        icon: '/images/traits/hadistico.png',
        count: 5,
        level: 'gold',
      },
      {
        name: 'Cazador',
        icon: '/images/traits/aluxe.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Peleador',
        icon: '/images/traits/peleador.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Coloso',
        icon: '/images/traits/coloso.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'sivir',
        role: 'Carry principal (con Emblema Hada)',
        items: ['fae-emblem', 'infinity-edge', 'spear-of-shojin'],
      },
      {
        championId: 'tristana',
        role: 'Carry físico a distancia',
        items: ['deathblade', 'guinsoos-rageblade', 'last-whisper'],
      },
      {
        championId: 'lillia',
        role: 'Utilidad y daño mágico',
        items: ['rabadons-deathcap', 'jeweled-gauntlet', 'spear-of-shojin'],
      },
      {
        championId: 'rammus',
        role: 'Tanque principal',
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'sunfire-cape'],
      },
      {
        championId: 'rakan',
        role: 'Tanque secundario',
        items: [],
      },
      {
        championId: 'kobuko',
        role: 'Vanguardia de aguante',
        items: [],
      },
      {
        championId: 'vi',
        role: 'Peleador frontal',
        items: [],
      },
      {
        championId: 'amumu',
        role: 'Coloso de choque',
        items: [],
      },
      {
        championId: 'xayah',
        role: 'Hadístico de apoyo',
        items: [],
      },
    ],

    strategySteps: [
      'Requisito: Solo viable si obtienes el Emblema Hadístico / Hada para asignárselo a Sivir.',
      'Inicio: Arranca con Sivir, Tristana, Rakan y Vi para asegurar una transición sólida y preservar vida.',
      'Reroll en nivel 7: Haz reroll para conseguir a Sivir y Tristana a 3 estrellas, reforzando a Rammus como muro frontal.',
      'Equipamiento: Prioriza los componentes de daño crítico y velocidad para Sivir junto con la Corona Hadística.',
      'Posicionamiento: Separa a Sivir y Tristana en esquinas opuestas para evitar daño en área concentrado.',
    ],

    tip: 'Requiere el Emblema Hada en Sivir para desbloquear el poder de la Corona Hadística y maximizar su DPS.',

    board: [
      {
        championId: 'kobuko',
        row: 0,
        col: 1,
        items: [],
      },
      {
        championId: 'rammus',
        row: 0,
        col: 3,
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'sunfire-cape'],
      },
      {
        championId: 'rakan',
        row: 0,
        col: 4,
        items: [],
      },
      {
        championId: 'vi',
        row: 0,
        col: 6,
        items: [],
      },
      {
        championId: 'amumu',
        row: 1,
        col: 2,
        items: [],
      },
      {
        championId: 'lillia',
        row: 1,
        col: 4,
        items: ['rabadons-deathcap', 'jeweled-gauntlet', 'spear-of-shojin'],
      },
      {
        championId: 'xayah',
        row: 2,
        col: 5,
        items: [],
      },
      {
        championId: 'sivir',
        row: 3,
        col: 0,
        items: ['fae-emblem', 'infinity-edge', 'spear-of-shojin'],
      },
      {
        championId: 'tristana',
        row: 3,
        col: 6,
        items: ['deathblade', 'guinsoos-rageblade', 'last-whisper'],
      },
    ],
  },

  {
    id: 21,
    name: 'Eclipse',
    category: 'HÍBRIDA / ECLIPSE',
    description:
      'Composición sinérgica que activa Eclipse combinando 3 Solar y 3 Lunar con reroll en nivel 6 para Kayle, Sejuani y Aphelios.',
    image: '/images/compositions/eclipse.png',
    imagePosition: 'center 20%',
    traits: ['Solar', 'Lunar', 'Coloso', 'Fuegorrápido', 'Defensor', 'Infernal'],
    gameMode: 'Reroll Nivel 6',
    difficulty: 'Alta',
    difficultyLevel: 'hard',
    color: 'purple',
    icon: '✦',
    tier: 'X',

    longDescription:
      'Composición construida en torno a la sinergia de Eclipse (3 Solar y 3 Lunar). Apunta a un reroll metódico en nivel 6 para buscar a Kayle, Sejuani, Leona y Shen a 3 estrellas antes de subir niveles para incorporar a Aphelios y Amumu.',

    augments: [
      {
        name: 'Emblema Lunar',
        image: '/images/augments/emblema-lunar.png',
      },
      {
        name: 'Sector de Intercambio',
        image: '/images/augments/economia-creciente.png',
      },
      {
        name: 'Boleto Dorado',
        image: '/images/augments/aumentos-reroll.png',
      },
    ],

    keyEmblems: [
      {
        name: 'Emblema Lunar',
        image: '/images/items/lunar-emblem.png',
        role: 'Facilita activar el bono Eclipse de 3 Solar y 3 Lunar',
      },
    ],

    finalChampions: ['kayle', 'sejuani', 'leona', 'shen', 'varus', 'diana', 'aphelios', 'amumu'],

    startingChampions: ['kayle', 'leona', 'shen', 'sejuani'],

    recommendedItems: [
      {
        name: 'Espadafuria de Guinsoo',
        image: '/images/items/guinsoos-rageblade.png',
      },
      {
        name: 'Sombrero Mortífero de Rabadon',
        image: '/images/items/rabadons-deathcap.png',
      },
      {
        name: 'Filo Infinito',
        image: '/images/items/infinity-edge.png',
      },
      {
        name: 'Último Suspiro',
        image: '/images/items/last-whisper.png',
      },
      {
        name: 'Lanza de Shojin',
        image: '/images/items/spear-of-shojin.png',
      },
      {
        name: 'Armadura Pétrea',
        image: '/images/items/gargoyle-stoneplate.png',
      },
      {
        name: 'Armadura de Warmog',
        image: '/images/items/warmogs-armor.png',
      },
      {
        name: 'Apariencia Espiritual',
        image: '/images/items/spirit-visage.png',
      },
      {
        name: 'Vesta Espinosa',
        image: '/images/items/bramble-vest.png',
      },
      {
        name: 'Garra de Dragón',
        image: '/images/items/dragons-claw.png',
      },
    ],

    activeTraits: [
      {
        name: 'Solar',
        icon: '/images/traits/solar.png',
        count: 3,
        level: 'gold',
      },
      {
        name: 'Lunar',
        icon: '/images/traits/lunar.png',
        count: 3,
        level: 'gold',
      },
      {
        name: 'Coloso',
        icon: '/images/traits/coloso.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Fuegorrápido',
        icon: '/images/traits/fuegorrapido.png',
        count: 2,
        level: 'bronze',
      },
      {
        name: 'Defensor',
        icon: '/images/traits/defensor.png',
        count: 2,
        level: 'bronze',
      },
    ],

    championRoles: [
      {
        championId: 'kayle',
        role: 'Carry mágico continuo',
        items: ['guinsoos-rageblade', 'rabadons-deathcap', 'guinsoos-rageblade'],
      },
      {
        championId: 'aphelios',
        role: 'Carry físico de remate',
        items: ['infinity-edge', 'last-whisper', 'spear-of-shojin'],
      },
      {
        championId: 'sejuani',
        role: 'Tanque principal',
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'spirit-visage'],
      },
      {
        championId: 'shen',
        role: 'Tanque secundario',
        items: ['warmogs-armor', 'bramble-vest', 'dragons-claw'],
      },
      {
        championId: 'leona',
        role: 'Defensor frontal',
        items: [],
      },
      {
        championId: 'amumu',
        role: 'Coloso de apoyo',
        items: [],
      },
      {
        championId: 'diana',
        role: 'Disrupción frontal lateral',
        items: [],
      },
      {
        championId: 'varus',
        role: 'DPS a distancia',
        items: [],
      },
    ],

    strategySteps: [
      'Juego temprano: Comienza con Kayle, Leona, Shen y Sejuani activando Solar y Defensor desde nivel 4.',
      'Slow Roll a nivel 6: Acumula 50 de oro y rerollea para conseguir a Kayle, Sejuani y Shen a 3 estrellas.',
      'Activación de Eclipse: Incorpora unidades Lunar (Diana y Aphelios) o usa el Emblema Lunar para completar 3 Solar y 3 Lunar.',
      'Sube a nivel 8: Añade a Amumu para cerrar las sinergias de Coloso y resistencia del frente.',
      'Posicionamiento: Mantén a Kayle y Aphelios en esquinas contrarias para evitar daño en área.',
    ],

    tip: 'No fuerces Fast 8: la versión óptima hace reroll en nivel 6 para asegurar a Kayle y Sejuani a 3 estrellas antes de buscar Lunar.',

    board: [
      {
        championId: 'diana',
        row: 0,
        col: 0,
        items: [],
      },
      {
        championId: 'leona',
        row: 0,
        col: 2,
        items: [],
      },
      {
        championId: 'sejuani',
        row: 0,
        col: 3,
        items: ['gargoyle-stoneplate', 'warmogs-armor', 'spirit-visage'],
      },
      {
        championId: 'shen',
        row: 0,
        col: 4,
        items: ['warmogs-armor', 'bramble-vest', 'dragons-claw'],
      },
      {
        championId: 'amumu',
        row: 0,
        col: 6,
        items: [],
      },
      {
        championId: 'varus',
        row: 2,
        col: 3,
        items: [],
      },
      {
        championId: 'kayle',
        row: 3,
        col: 0,
        items: ['guinsoos-rageblade', 'rabadons-deathcap', 'guinsoos-rageblade'],
      },
      {
        championId: 'aphelios',
        row: 3,
        col: 6,
        items: ['infinity-edge', 'last-whisper', 'spear-of-shojin'],
      },
    ],
  },
];

export default compositionsTierList;
