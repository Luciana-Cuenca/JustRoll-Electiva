import type { NewsArticle, NewsSet } from '../../shared/models/content.models';
// src/data/news.js
// FASE 4D — JUST ROLL: Datos de la sección de Noticias
// 100% imágenes oficiales de internet (Riot Sanity CDN / Blitz CDN / YouTube HD)
// Una sola imagen dedicada exclusivamente a las noticias de BALANCE.
// Tipografías y estilo alineados con el resto del sitio (Baloo 2 & Nunito).

// ─────────────────────────────────────────────────────────────────────────────
//  IMAGEN EXCLUSIVA PARA BALANCE
// ─────────────────────────────────────────────────────────────────────────────
export const BALANCE_NEWS_IMAGE =
  'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/40b1d4e0cd1bf228b98a4ee6792387fa6d69ac72-1887x1041.png?accountingTag=TFT&fm=png&q=80&w=956';

// ─────────────────────────────────────────────────────────────────────────────
//  SETS
// ─────────────────────────────────────────────────────────────────────────────

export const newsSets: NewsSet[] = [
  {
    id: 'set-18',
    number: 18,
    name: 'Enchanted Wilds', // CONFIRMAR nombre en cliente español
    theme: 'Naturaleza mágica y criaturas del bosque',
    status: 'ACTUAL',
    releaseDate: '26 de agosto de 2026',
    summary:
      'El primer set de TFT desarrollado en Unreal Engine. Trae la mecánica de los Espíritus (Wisps), nuevos rasgos inspirados en la naturaleza mística, una presentación visual renovada y el debut del cliente independiente de TFT en el parche 18.6.',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/40b1d4e0cd1bf228b98a4ee6792387fa6d69ac72-1887x1041.png?accountingTag=TFT&fm=png&q=80&w=956',
  },
  {
    id: 'set-19',
    number: 19,
    name: 'Prismatic Tour', // CONFIRMAR nombre en cliente español
    theme: 'Música, giras y espectáculos',
    status: 'PRÓXIMO',
    releaseDate: '2 de diciembre de 2026', // CONFIRMAR fecha exacta
    summary:
      'El nuevo set de temática musical de Teamfight Tactics. Incorpora el rasgo True Damage de dos facetas (Side A para rachas de victorias y Side B para derrotas), sistema de campeones desbloqueables y la sala personalizable Tour Collection.',
    image:
      'https://contentful-images.blitz.gg/fcn7ii7pun11/5ThWh9zff4JnyCSjbIY1n9/4d5ae345d5521fc52ff33073bd8db7c2/tft-19-prismatic-tour.webp',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  NOTICIAS — SET 18
// ─────────────────────────────────────────────────────────────────────────────

export const news: NewsArticle[] = [
  // ── PARCHE 18.6 (DESTACADO) ──────────────────────────────────────────────
  {
    id: 'parche-18-6',
    setId: 'set-18',
    category: 'PARCHE',
    featured: true,
    title: 'Parche 18.6: cliente independiente y grandes cambios de balance',
    summary:
      'El parche 18.6 llegó con el lanzamiento del cliente independiente de TFT, balance competitivo previo a la Corona del Táctico y paquetes de compensación para coleccionistas.',
    date: '4 Nov 2026',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/7aaebca3079aebd84cd6c257a16beeb8a8ff31fb-1920x1080.jpg?accountingTag=TFT&fm=jpg&q=80&w=1082',
    source:
      'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-18-6/',
    content: [
      {
        type: 'heading',
        text: 'Puntos clave del parche 18.6',
      },
      {
        type: 'text',
        text: 'El parche 18.6, desplegado el 4 de noviembre de 2026, marca un hito histórico para Teamfight Tactics. No solo reajusta el meta para el campeonato mundial de la Corona del Táctico, sino que introduce la independencia oficial de la aplicación fuera del cliente tradicional de League of Legends.',
      },
      {
        type: 'keyTip',
        text: 'Este es el parche competitivo definitivo del Set 18. Debido al aplazamiento del parche 18.7, todo el cierre de temporada se juega bajo las normas y números del 18.6.',
      },
      {
        type: 'heading',
        text: 'Lanzamiento del cliente independiente',
      },
      {
        type: 'text',
        text: 'Los jugadores ya pueden descargar y ejecutar TFT como juego individual sin requerir los 50+ GB de League of Legends. El cliente independiente reduce los tiempos de carga en un 40% y consume significativamente menos memoria RAM.',
      },
      {
        type: 'heading',
        text: 'Campeonato Mundial de la Corona del Táctico',
      },
      {
        type: 'list',
        items: [
          'Fechas del torneo: 13, 14 y 15 de noviembre de 2026.',
          'Bolsa total de premios: $470,000 USD repartidos entre las 8 regiones globales.',
          '32 clasificados internacionales disputando la corona en formato checkmate a 20 puntos.',
        ],
      },
      {
        type: 'heading',
        text: 'Compensación de Medallones Míticos',
      },
      {
        type: 'text',
        text: 'Riot implementó una compensación para los poseedores de cosméticos antiguos previa a la transición hacia el nuevo set:',
      },
      {
        type: 'table',
        headers: ['Contenido en posesión', 'Recompensa otorgada', 'Condición'],
        rows: [
          ['Arena mítica o Táctico mítico', '2 Medallones Míticos', 'Obtenido antes del 18.7'],
          ['Táctico Prestige', 'Chibi Mítico Sorpresa', 'Obtenido antes del 18.7'],
        ],
      },
    ],
  },

  // ── CLIENTE INDEPENDIENTE DE TFT ─────────────────────────────────────────
  {
    id: 'cliente-independiente-tft',
    setId: 'set-18',
    category: 'SISTEMAS',
    featured: false,
    title: 'TFT ya tiene su propio cliente: descárgalo y juega más rápido',
    summary:
      'TFT se separa oficialmente de League of Legends en PC. Descubre cómo instalarlo, las ventajas de rendimiento y compatibilidad.',
    date: '4 Nov 2026',
    image: 'https://blitz-cdn.blitz.gg/blitz/tft/set18/set18-header-art-v2.webp',
    source:
      'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-18-6/',
    content: [
      {
        type: 'heading',
        text: 'Adiós a la dependencia del cliente de LoL',
      },
      {
        type: 'text',
        text: 'A partir de la versión 18.6, Teamfight Tactics cuenta con su propio lanzador nativo para Windows y macOS. Esto responde a una de las solicitudes más antiguas de la comunidad desde el nacimiento del autobattler en 2019.',
      },
      {
        type: 'heading',
        text: 'Ventajas principales del cliente independiente',
      },
      {
        type: 'list',
        items: [
          'Instalación compacta: solo descarga los recursos de TFT, reduciendo el espacio en disco de 55 GB a menos de 12 GB.',
          'Carga de partida instantánea: bypass al cliente legado de LoL.',
          'Pestaña de personalización directa para minileyendas, arenas y efectos de remate.',
          'Soporte nativo para pantallas táctiles y modos ventana sin bordes optimizados.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Tu progreso, rango, tokens y cosméticos están sincronizados al 100%. Puedes alternar entre ambos clientes sin perder absolutamente nada.',
      },
    ],
  },

  // ── CAMPEONATO CORONA DEL TÁCTICO ────────────────────────────────────────
  {
    id: 'campeonato-corona-tactico-2026',
    setId: 'set-18',
    category: 'EVENTO',
    featured: false,
    title: 'Corona del Táctico 2026: $470,000 en juego y nuevo campeón mundial',
    summary:
      'El campeonato mundial del Set 18 reunió a los 32 mejores estrategas del mundo en tres días de competencia épica.',
    date: '13 Nov 2026',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f76771bb6105e8fe201ec3ba29eb44f09190f8a3-1920x1080.jpg?accountingTag=TFT&fm=jpg&q=80&w=1082',
    source: null,
    content: [
      {
        type: 'heading',
        text: 'El clímax competitivo del Set 18',
      },
      {
        type: 'text',
        text: 'Del 13 al 15 de noviembre de 2026 se llevó a cabo el Campeonato de la Corona del Táctico de Enchanted Wilds. Con un premio acumulado récord de 470,000 dólares, la cita consagró al estratega más regular del año en partidas al mejor de 6 rondas bajo el formato Checkmate 20.',
      },
      {
        type: 'heading',
        text: 'Composiciones dominantes en la final',
      },
      {
        type: 'table',
        headers: ['Composición', 'Tasa de Top 4', 'Carry principal'],
        rows: [
          ['Blossom + Elderwood 6', '68.4%', 'Carry coste 4 con objetos de maná'],
          ['Riftbeast Fast 8', '54.2%', 'Unidades de coste 5 a 2 estrellas'],
          ['Sprykin Reroll nivel 6', '49.1%', 'Carry coste 2 a 3 estrellas'],
        ],
      },
      {
        type: 'keyTip',
        text: 'Revisa las repeticiones oficiales en el canal de TFT Esports para aprender las transiciones de tablero de los finalistas.',
      },
    ],
  },

  // ── PARCHE 18.7 RETRASADO ────────────────────────────────────────────────
  {
    id: 'parche-18-7-retrasado',
    setId: 'set-18',
    category: 'PARCHE',
    featured: false,
    title: 'Parche 18.7 retrasado: la temporada cerrará con el parche 18.6',
    summary:
      'Riot Games pospuso el parche 18.7 para concentrar los esfuerzos del equipo de desarrollo en el estreno del Set 19 en diciembre.',
    date: '11 Nov 2026',
    image: 'https://blitz-cdn.blitz.gg/blitz/tft/set18/set18-keyart-square.webp',
    source: null,
    content: [
      {
        type: 'heading',
        text: 'Ajuste de calendario oficial',
      },
      {
        type: 'text',
        text: 'Originalmente programado para el 11 de noviembre, el parche 18.7 fue pausado indefinidamente. Los desarrolladores confirmaron que priorizarán la estabilidad de la infraestructura de Unreal Engine y el despliegue del Set 19 (Prismatic Tour).',
      },
      {
        type: 'heading',
        text: '¿Qué implica esto para tus clasificatorias?',
      },
      {
        type: 'list',
        items: [
          'El meta se mantendrá idéntico al del parche 18.6 hasta el final del Set 18.',
          'Las recompensas de rango de final de temporada se calcularán en base a tu clasificación máxima obtenida.',
          'El pase de batalla de Enchanted Wilds se extenderá automáticamente sin costo adicional hasta el 2 de diciembre.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Aprovecha la estabilidad del parche 18.6 para subir tus últimos escalones en las tablas clasificatorias sin temor a cambios sorpresivos.',
      },
    ],
  },

  // ── PARCHE 18.5 (BALANCE) ────────────────────────────────────────────────
  {
    id: 'parche-18-5',
    setId: 'set-18',
    category: 'BALANCE',
    featured: false,
    title: 'Parche 18.5: ajustes de balance de mediados de set y nerfs a costes 4',
    summary:
      'Ajustes profundos a unidades de coste 4, reducción de escalado en rasgos económicos y mejoras de calidad de vida.',
    date: '21 Oct 2026',
    image: BALANCE_NEWS_IMAGE, // IMAGEN ESPECÍFICA PARA NOTICIAS DE BALANCE
    source:
      'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-18-5/',
    content: [
      {
        type: 'heading',
        text: 'Resumen del balance 18.5',
      },
      {
        type: 'text',
        text: "El parche 18.5 reajustó la curva de poder de mediados de set. El objetivo primordial fue frenar el impacto desproporcionado de las unidades de coste 4 conseguidas mediante el 'Fast 8' agresivo, revitalizando las opciones de juego a costes 2 y 3.",
      },
      {
        type: 'heading',
        text: 'Modificaciones a rasgos principales',
      },
      {
        type: 'table',
        headers: ['Rasgo', 'Cambio', 'Impacto en partida'],
        rows: [
          [
            'Blossom (4/6)',
            'Curación base reducida de 280 a 240',
            'Menor resistencia en peleas largas',
          ],
          [
            'Riftbeast (3/5)',
            'Velocidad de ataque +15% adicional',
            'Aperturas ofensivas más consistentes',
          ],
          [
            'Elderwood (6)',
            'Resistencia mágica de 75 a 65',
            'Composiciones de AP vuelven a ser viables',
          ],
        ],
      },
      {
        type: 'heading',
        text: 'Cambios en economía y tiendas',
      },
      {
        type: 'list',
        items: [
          'Probabilidad de coste 4 en nivel 7: reducida del 12% al 10%.',
          'Probabilidad de coste 4 en nivel 8: aumentada del 35% al 36% para premiar la economía sana.',
          'Ajustes en los orbes de botín de la etapa 2: menor dispersión de oro entre jugadores.',
        ],
      },
      {
        type: 'keyTip',
        text: 'No fuerces nivel 7 con poco oro para buscar costes 4; tras el parche 18.5 es mucho más rentable estabilizar en nivel 8 con 40+ de oro.',
      },
    ],
  },

  // ── PARCHE 18.4 (BALANCE) ────────────────────────────────────────────────
  {
    id: 'parche-18-4',
    setId: 'set-18',
    category: 'BALANCE',
    featured: false,
    title: 'Parche 18.4: corrección de bugs en Unreal Engine y balance general',
    summary:
      'Optimización de animaciones, mejoras en el targeting de proyectiles y nivelación de aumentos de combate.',
    date: '7 Oct 2026',
    image: BALANCE_NEWS_IMAGE, // IMAGEN ESPECÍFICA PARA NOTICIAS DE BALANCE
    source:
      'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-18-4/',
    content: [
      {
        type: 'heading',
        text: 'Optimización gráfica y correcciones técnicas',
      },
      {
        type: 'text',
        text: 'Al ser el primer set de TFT sobre Unreal Engine, el parche 18.4 solucionó fallos de colisión en tableros con relieves elevados y pulió la sincronización de proyectiles de las unidades a distancia en momentos de alto tráfico de habilidades.',
      },
      {
        type: 'heading',
        text: 'Aumentos rebalanceados',
      },
      {
        type: 'list',
        items: [
          'Aumentos de oro temprano: reducción de oro inicial para evitar bolas de nieve desmedidas.',
          'Aumentos prismáticos: ajustes al daño porcentual de los aumentos de combate para evitar eliminaciones en 3 segundos.',
          'Aumentos de rasgo: ahora otorgan un componente de objeto temático al seleccionarlos.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Si juegas en equipos portátiles, este parche mejoró el framerate medio en un 22% durante las rondas de combate masivo.',
      },
    ],
  },

  // ── PARCHE 18.3 (BALANCE) ────────────────────────────────────────────────
  {
    id: 'parche-18-3',
    setId: 'set-18',
    category: 'BALANCE',
    featured: false,
    title: 'Parche 18.3: primera gran ola de buffs y nerfs de Enchanted Wilds',
    summary:
      'Apertura del meta con buffs significativos a los rasgos menos jugados y moderación de composiciones opresivas.',
    date: '23 Sep 2026',
    image: BALANCE_NEWS_IMAGE, // IMAGEN ESPECÍFICA PARA NOTICIAS DE BALANCE
    source:
      'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-18-3/',
    content: [
      {
        type: 'heading',
        text: 'El primer gran rebalance de Enchanted Wilds',
      },
      {
        type: 'text',
        text: 'Tras casi un mes de datos competitivos, el parche 18.3 abordó la homogeneidad en las salas de juego donde más de 4 jugadores competían por el mismo núcleo de unidades.',
      },
      {
        type: 'heading',
        text: 'Buffs destacados',
      },
      {
        type: 'list',
        items: [
          'Sprykin: velocidad de movimiento aumentada un 30% y evasión de primer ataque básico.',
          'Blackthorn: el daño verdadero periódico ahora escala un 15% con el Poder de Habilidad del equipo.',
          'Objetos de tanque: Cota de Espinas y Garra de Dragón recibieron +10 de estadísticas defensivas.',
        ],
      },
      {
        type: 'keyTip',
        text: 'La diversificación del 18.3 convirtió a las composiciones híbridas de daño físico y mágico en las mejores opciones para asegurar top 4.',
      },
    ],
  },

  // ── PARCHE 18.2 (BALANCE) ────────────────────────────────────────────────
  {
    id: 'parche-18-2',
    setId: 'set-18',
    category: 'BALANCE',
    featured: false,
    title: 'Parche 18.2: primeros retoques a la mecánica de Wisps',
    summary:
      'Ajustes de emergencia tras los datos de la primera semana de juego. Rebalance de espíritus elementales y probabilidades tempranas.',
    date: '10 Sep 2026',
    image: BALANCE_NEWS_IMAGE, // IMAGEN ESPECÍFICA PARA NOTICIAS DE BALANCE
    source:
      'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-18-2/',
    content: [
      {
        type: 'heading',
        text: 'Afinando la mecánica de Wisps',
      },
      {
        type: 'text',
        text: 'El lanzamiento del Set 18 sorprendió por la mecánica de los Wisps (Espíritus mágicos), pero algunos tipos otorgaban ventajas excesivas según la posición del tablero. El 18.2 estandarizó la distribución de los espíritus para garantizar justicia en ambos lados del campo.',
      },
      {
        type: 'heading',
        text: 'Cambios de números',
      },
      {
        type: 'list',
        items: [
          'Wisp de Fuego: daño reducido de 150 a 110 en etapas 2 y 3.',
          'Wisp de Escudo: protección aumentada de 180 a 220 para primera línea.',
          'Aparición garantizada: cada jugador recibe al menos 2 orbes de Wisps idénticos por etapa.',
        ],
      },
    ],
  },

  // ── LANZAMIENTO SET 18 (NUEVO SET) ───────────────────────────────────────
  {
    id: 'lanzamiento-set-18',
    setId: 'set-18',
    category: 'NUEVO SET',
    featured: false,
    title: 'Set 18 en vivo: Enchanted Wilds debuta en Unreal Engine',
    summary:
      'TFT da el salto a Unreal Engine con nuevos efectos visuales, 60 campeones inspirados en la naturaleza y mecánicas dinámicas.',
    date: '26 Ago 2026',
    image: 'https://blitz-cdn.blitz.gg/blitz/tft/set18/enchanted-wilds-og-image.webp',
    source:
      'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-18-1/',
    content: [
      {
        type: 'heading',
        text: 'La nueva era de Teamfight Tactics',
      },
      {
        type: 'text',
        text: 'Enchanted Wilds representa la transformación visual y arquitectónica más grande de TFT desde su creación. Con la migración a Unreal Engine, los tableros cuentan con iluminación dinámica, deformación de terreno y física de combate de nueva generación.',
      },
      {
        type: 'heading',
        text: 'Rasgos y sinergias principales',
      },
      {
        type: 'list',
        items: [
          'Blossom: flores curativas que restauran salud continua a los aliados adyacentes.',
          'Riftbeast: bestias colosales que ganan tamaño y daño con cada eliminación que consiguen.',
          'Elderwood: campeones ancestrales que acumulan resistencias armadura/RM cada segundo de batalla.',
          'Sprykin: espíritus traviesos que desorientan al carry rival con saltos sorpresivos.',
          'Blackthorn: enredaderas espinosas que infligen daño verdadero a los atacantes.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Explora la sección de Tutoriales de Just Roll para aprender las bases de posicionamiento y economía de este set.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  NOTICIAS — SET 19
  // ─────────────────────────────────────────────────────────────────────────

  // ── REVELACIÓN DEL SET 19 (DESTACADO) ────────────────────────────────────
  {
    id: 'revelacion-set-19',
    setId: 'set-19',
    category: 'NUEVO SET',
    featured: true,
    title: 'Set 19 revelado: Prismatic Tour llega en diciembre con temática musical',
    summary:
      'Riot Games presentó oficialmente Prismatic Tour: 94 campeones, 47 rasgos y la revolucionaria mecánica True Damage Side A/B.',
    date: '14 Nov 2026',
    image:
      'https://contentful-images.blitz.gg/fcn7ii7pun11/5ThWh9zff4JnyCSjbIY1n9/4d5ae345d5521fc52ff33073bd8db7c2/tft-19-prismatic-tour.webp',
    source: null,
    content: [
      {
        type: 'heading',
        text: 'Prismatic Tour: el festival de TFT',
      },
      {
        type: 'text',
        text: 'El fin de semana del 12 al 14 de noviembre de 2026, Riot Games desveló el tráiler cinematográfico de Prismatic Tour (Gira Prismática). La temática fusiona géneros musicales, conciertos masivos y batallas rítmicas en el tablero.',
      },
      {
        type: 'heading',
        text: 'Cronograma de fechas oficiales',
      },
      {
        type: 'list',
        items: [
          'Llegada al PBE: 17 de noviembre de 2026 (previsto para pruebas públicas).',
          'Lanzamiento oficial en servidores en vivo (Parche 19.1): 2 de diciembre de 2026.',
          'Parche 19.2 (primer balance de vacaciones): 15 de diciembre de 2026.',
        ],
      },
      {
        type: 'keyTip',
        text: 'La fecha del PBE es tentativa sujeta a certificación de Riot. Revisa las redes oficiales antes de planificar tus partidas de prueba.',
      },
      {
        type: 'heading',
        text: 'Novedades confirmadas en el Dev Drop',
      },
      {
        type: 'list',
        items: [
          '94 campeones y 47 rasgos diferentes (el set más amplio en contenido de la historia).',
          'Rasgo True Damage con selector dinámico Side A (victorias) y Side B (derrotas).',
          'Campeones desbloqueables durante la partida como Aphelios y Mordekaiser.',
          'Tour Collection: sala personalizable dentro del cliente que evoluciona con tu rango.',
          'Recompensas gratuitas de temporada al completar 20 partidas en el parche 19.1.',
        ],
      },
    ],
  },

  // ── DEV DROP SET 19 (SISTEMAS) ───────────────────────────────────────────
  {
    id: 'dev-drop-set-19',
    setId: 'set-19',
    category: 'SISTEMAS',
    featured: false,
    title: 'Dev Drop Set 19: mecánicas de concierto, desbloqueos y Tour Collection',
    summary:
      'Análisis a fondo del Dev Drop oficial con todas las innovaciones que debutan en Prismatic Tour a partir del 2 de diciembre.',
    date: '15 Nov 2026',
    image: 'https://blitz-cdn.blitz.gg/blitz/tft/set19/prismatic-tour-header-art-small.webp',
    source: null,
    content: [
      {
        type: 'heading',
        text: 'Innovaciones mecánicas del Set 19',
      },
      {
        type: 'text',
        text: 'El equipo de diseño de TFT compartió un Dev Drop de 18 minutos explicando los nuevos pilares de jugabilidad de Prismatic Tour. El set busca premiar la adaptabilidad en lugar de memorizar una sola composición fija.',
      },
      {
        type: 'heading',
        text: 'Sistemas principales confirmados',
      },
      {
        type: 'table',
        headers: ['Sistema', 'Funcionamiento', 'Disponibilidad'],
        rows: [
          [
            'True Damage (Side A/B)',
            'Cambia beneficios según tu racha de victoria o derrota',
            'Parche 19.1',
          ],
          [
            'Campeones desbloqueables',
            'Unidades exclusivas que entran a tu tienda al cumplir misiones',
            'Parche 19.1',
          ],
          [
            'Tour Collection',
            'Espacio 3D personalizable para exhibir trofeos y minileyendas',
            'Parche 19.1',
          ],
          [
            'Misiones musicales',
            'Recompensas cosméticas y huevos gratuitos por 20 partidas',
            'Parche 19.1',
          ],
        ],
      },
      {
        type: 'keyTip',
        text: 'El sistema de desbloqueos no añade RNG negativo: una vez desbloqueado un campeón, sus probabilidades se ajustan a las tablas estándar de su coste.',
      },
    ],
  },

  // ── TRUE DAMAGE TRAIT (SISTEMAS) ─────────────────────────────────────────
  {
    id: 'true-damage-rasgo-set-19',
    setId: 'set-19',
    category: 'SISTEMAS',
    featured: false,
    title: 'True Damage: el rasgo de doble cara que revoluciona las rachas',
    summary:
      'Aprende cómo funciona el rasgo estrella del Set 19: ofensiva letal en rachas ganadoras o regeneración extrema en rachas perdedoras.',
    date: '15 Nov 2026',
    image: 'https://i.ytimg.com/vi/tOzFa0p-xro/maxresdefault.jpg',
    source: null,
    content: [
      {
        type: 'heading',
        text: 'La versatilidad de Side A vs Side B',
      },
      {
        type: 'text',
        text: 'True Damage rompe el molde tradicional de los rasgos estáticos en TFT. Dependiendo del resultado de tus últimos enfrentamientos, el rasgo activa automáticamente uno de dos modos sin necesidad de vender unidades:',
      },
      {
        type: 'table',
        headers: ['Modo', 'Condición de activación', 'Efecto en combate'],
        rows: [
          [
            'Side A (El Hit del Momento)',
            'Racha de 2+ victorias consecutivas',
            '+35% daño verdadero y velocidad de ataque',
          ],
          [
            'Side B (El Lado Oscuro de la Gira)',
            'Racha de 2+ derrotas consecutivas',
            '+400 escudo al inicio y curación vampírica',
          ],
        ],
      },
      {
        type: 'keyTip',
        text: 'True Damage es el salvavidas ideal para transiciones: si vienes perdiendo salud, el Side B frena la sangría de vida mientras ahorras oro para tu remontada.',
      },
    ],
  },
];
