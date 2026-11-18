import type { Tutorial } from '../../../shared/models/content.models';

export const advancedTutorials: Tutorial[] = [
  {
    id: 12,
    slug: 'itemizacion-avanzada',
    level: 'advanced',
    orderInLevel: 1,
    title: 'Itemización avanzada',
    description:
      'Aprende a optimizar objetos, utilizar carries temporales y adaptar tu equipamiento.',
    readingTime: 11,
    image: '/images/tutorials/itemizacion.png',
    color: 'purple',
    content: [
      {
        type: 'heading',
        text: '¿Qué es la itemización avanzada?',
      },
      {
        type: 'text',
        text: 'La itemización avanzada consiste en aprovechar los componentes y objetos disponibles para maximizar la fuerza del tablero. No se trata únicamente de fabricar los objetos recomendados por una guía, sino de comprender qué estadísticas y efectos necesita cada campeón.',
      },
      {
        type: 'heading',
        text: 'Objetos ideales y objetos alternativos',
      },
      {
        type: 'text',
        text: 'Un objeto ideal es aquel que aprovecha especialmente las características de un campeón. Sin embargo, muchas unidades pueden utilizar diferentes combinaciones de manera efectiva. Debes evaluar si esperar una combinación específica proporciona más valor que fabricar un objeto útil inmediatamente.',
      },
      {
        type: 'heading',
        text: 'Qué significa hacer slam',
      },
      {
        type: 'text',
        text: 'Slam es un término utilizado para describir la fabricación inmediata de un objeto completo con los componentes disponibles. Esta decisión puede fortalecer el tablero, conservar vida y ayudar a mantener una racha.',
      },
      {
        type: 'heading',
        text: 'Cuándo hacer slam',
      },
      {
        type: 'list',
        items: [
          'Cuando el objeto mejora considerablemente tu tablero actual.',
          'Cuando necesitas ganar combates para mantener una racha.',
          'Cuando estás perdiendo demasiada vida.',
          'Cuando el objeto puede utilizarse en diferentes composiciones.',
          'Cuando tienes un campeón temporal capaz de aprovecharlo.',
          'Cuando esperar una combinación ideal representa un riesgo innecesario.',
        ],
      },
      {
        type: 'heading',
        text: 'Cuándo conservar componentes',
      },
      {
        type: 'text',
        text: 'Conservar componentes puede ser conveniente cuando tienes suficiente vida, tu tablero es estable y existe una alta probabilidad de completar una combinación importante. También puede ser útil cuando todavía no sabes qué tipo de carry utilizarás.',
      },
      {
        type: 'heading',
        text: 'Flexibilidad de objetos',
      },
      {
        type: 'text',
        text: 'La flexibilidad consiste en fabricar objetos que puedan aprovechar diferentes campeones. Esto permite cambiar de composición sin perder demasiado valor. Por ejemplo, algunos objetos de velocidad de ataque pueden funcionar en varios carries físicos, mientras que determinados objetos defensivos son útiles para distintos tanques.',
      },
      {
        type: 'heading',
        text: 'Portadores temporales de objetos',
      },
      {
        type: 'text',
        text: 'Un portador temporal es un campeón que utiliza los objetos durante las primeras etapas de la partida hasta que consigues tu carry definitivo. Lo ideal es que aproveche estadísticas similares a las del campeón final.',
      },
      {
        type: 'steps',
        title: 'Cómo utilizar un portador temporal',
        items: [
          'Identifica los objetos que necesitará tu carry definitivo.',
          'Busca una unidad inicial que aproveche estadísticas similares.',
          'Equipa los objetos para fortalecer el tablero.',
          'Utiliza esa unidad durante las primeras etapas.',
          'Consigue el campeón principal de tu composición.',
          'Transfiere los objetos mediante los mecanismos disponibles, como vender al portador o utilizar un removedor de objetos.',
        ],
      },
      {
        type: 'heading',
        text: 'Distribución de objetos',
      },
      {
        type: 'text',
        text: 'Una composición necesita equilibrar daño y resistencia. Equipar únicamente al carry principal puede dejar a la primera línea demasiado débil. De la misma manera, invertir todos los objetos en tanques puede provocar que el equipo no tenga suficiente daño para ganar.',
      },
      {
        type: 'table',
        headers: ['Tipo de unidad', 'Objetos prioritarios'],
        rows: [
          ['Carry físico', 'Daño de ataque, velocidad de ataque y crítico'],
          ['Carry mágico', 'Poder de habilidad, maná y efectos ofensivos'],
          ['Tanque principal', 'Vida, armadura y resistencia mágica'],
          ['Unidad de apoyo', 'Objetos de utilidad y efectos para aliados'],
          ['Carry secundario', 'Objetos ofensivos complementarios'],
        ],
      },
      {
        type: 'heading',
        text: 'Utilidad y reducción de resistencias',
      },
      {
        type: 'text',
        text: 'Algunos objetos permiten reducir la armadura o resistencia mágica de los enemigos. Estos efectos pueden aumentar considerablemente el daño del equipo, especialmente cuando varios campeones aprovechan el mismo tipo de reducción.',
      },
      {
        type: 'heading',
        text: 'Cómo evaluar una combinación',
      },
      {
        type: 'steps',
        title: 'Análisis de objetos',
        items: [
          'Identifica la principal fuente de daño de tu composición.',
          'Revisa qué estadísticas necesita tu carry.',
          'Comprueba si tu primera línea tiene suficiente resistencia.',
          'Considera objetos de utilidad para mejorar el daño total.',
          'Evalúa si puedes utilizar los objetos inmediatamente.',
          'Adapta las combinaciones a los componentes disponibles.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Una buena itemización no consiste en conseguir siempre tres objetos perfectos, sino en aprovechar los recursos disponibles para fortalecer todo el equipo.',
      },
      {
        type: 'commonMistake',
        text: 'Guardar componentes durante demasiadas rondas puede hacerte perder combates que habrías ganado con objetos completos.',
      },
    ],
    quiz: [
      {
        question: '¿Qué significa hacer slam?',
        options: [
          'Vender un campeón',
          'Fabricar inmediatamente un objeto completo',
          'Actualizar la tienda',
          'Cambiar de composición',
        ],
        answer: 1,
        explanation:
          'Hacer slam significa utilizar componentes para crear un objeto completo sin esperar necesariamente la combinación ideal.',
      },
      {
        question: '¿Qué es un portador temporal de objetos?',
        options: [
          'Un campeón que nunca participa en combate',
          'Una unidad que utiliza objetos hasta conseguir el carry definitivo',
          'Un campeón que no tiene rasgos',
          'Una unidad utilizada exclusivamente para vender',
        ],
        answer: 1,
        explanation:
          'Los portadores temporales permiten aprovechar los objetos durante las primeras etapas.',
      },
      {
        question: '¿Por qué es importante distribuir objetos entre carries y tanques?',
        options: [
          'Para equilibrar daño y resistencia',
          'Para conseguir oro adicional',
          'Para aumentar automáticamente el nivel',
          'Para reducir la cantidad de campeones',
        ],
        answer: 0,
        explanation:
          'Un tablero equilibrado necesita unidades que inflijan daño y otras que puedan resistir.',
      },
    ],
  },

  {
    id: 13,
    slug: 'contar-copias-y-pivotar',
    level: 'advanced',
    orderInLevel: 2,
    title: 'Contar copias y pivotar',
    description:
      'Aprende a evaluar unidades disponibles, utilizar el banco y cambiar de composición.',
    readingTime: 11,
    image: '/images/tutorials/pivotar.png',
    color: 'purple',
    content: [
      {
        type: 'heading',
        text: '¿Qué significa contar copias?',
      },
      {
        type: 'text',
        text: 'Contar copias consiste en observar cuántas unidades de un campeón están siendo utilizadas por otros jugadores y estimar cuántas podrían permanecer disponibles en la reserva compartida. Esta información ayuda a decidir si vale la pena continuar buscando un campeón específico.',
      },
      {
        type: 'heading',
        text: 'Cómo funciona la reserva compartida',
      },
      {
        type: 'text',
        text: 'En TFT, las tiendas de los jugadores utilizan una reserva compartida de campeones. Cada unidad tiene una cantidad limitada de copias. Cuando varios jugadores compran el mismo campeón, disminuye la disponibilidad de esa unidad para los demás.',
      },
      {
        type: 'heading',
        text: 'Por qué importa la cantidad de copias',
      },
      {
        type: 'text',
        text: 'Las estrategias reroll dependen de encontrar suficientes copias para mejorar unidades a tres estrellas. Si varios rivales buscan el mismo campeón, puede resultar más difícil completar la mejora. Por eso es importante analizar el lobby antes de invertir demasiado oro.',
      },
      {
        type: 'heading',
        text: 'Cómo contar copias',
      },
      {
        type: 'steps',
        title: 'Análisis de disponibilidad',
        items: [
          'Identifica el campeón que necesitas mejorar.',
          'Revisa los tableros de los demás jugadores.',
          'Observa si tienen copias adicionales en sus bancos.',
          'Cuenta las copias visibles de ese campeón.',
          'Considera las copias que ya tienes.',
          'Evalúa si continuar buscando es conveniente.',
        ],
      },
      {
        type: 'heading',
        text: 'Cómo interpretar las estrellas',
      },
      {
        type: 'table',
        headers: ['Unidad', 'Copias originales utilizadas'],
        rows: [
          ['1 estrella', '1'],
          ['2 estrellas', '3'],
          ['3 estrellas', '9'],
        ],
      },
      {
        type: 'text',
        text: 'Por ejemplo, si un rival tiene un campeón de dos estrellas y otra copia de una estrella del mismo campeón, está utilizando cuatro copias originales. Esta información es importante cuando buscas completar tu propia unidad de tres estrellas.',
      },
      {
        type: 'heading',
        text: 'Qué significa holdear',
      },
      {
        type: 'text',
        text: 'Holdear, del inglés hold, significa conservar campeones en el banco. Puedes guardar unidades para completar mejoras, preparar una transición o mantener opciones estratégicas abiertas.',
      },
      {
        type: 'heading',
        text: 'Cuándo conviene holdear',
      },
      {
        type: 'list',
        items: [
          'Cuando estás cerca de completar un campeón de dos estrellas.',
          'Cuando buscas una unidad de tres estrellas.',
          'Cuando una unidad puede formar parte de tu composición final.',
          'Cuando necesitas preparar una transición.',
          'Cuando conservarla no perjudica demasiado tu economía.',
        ],
      },
      {
        type: 'heading',
        text: 'Cuándo vender unidades del banco',
      },
      {
        type: 'text',
        text: 'No todas las unidades merecen ocupar espacio. Puede ser conveniente vender campeones que ya no utilizarás, especialmente si hacerlo te permite alcanzar un umbral de interés o liberar espacio para unidades importantes.',
      },
      {
        type: 'heading',
        text: 'Qué significa pivotar',
      },
      {
        type: 'text',
        text: 'Pivotar consiste en cambiar de composición cuando encuentras mejores oportunidades o cuando tu estrategia inicial deja de ser conveniente. Puede implicar cambiar el carry principal, modificar los rasgos o reemplazar varias unidades.',
      },
      {
        type: 'heading',
        text: 'Cuándo pivotar',
      },
      {
        type: 'list',
        items: [
          'Cuando tu composición está demasiado disputada.',
          'Cuando recibes objetos incompatibles con tu carry inicial.',
          'Cuando encuentras unidades poderosas de otra composición.',
          'Cuando un aumento favorece una estrategia diferente.',
          'Cuando tu tablero no consigue estabilizarse.',
          'Cuando tienes recursos suficientes para cambiar sin perder demasiada fuerza.',
        ],
      },
      {
        type: 'heading',
        text: 'Cómo pivotar correctamente',
      },
      {
        type: 'steps',
        title: 'Transición entre composiciones',
        items: [
          'Identifica por qué tu composición actual no está funcionando.',
          'Busca una alternativa compatible con tus objetos.',
          'Compra las unidades necesarias para preparar el cambio.',
          'Conserva temporalmente los campeones que mantienen fuerte tu tablero.',
          'Realiza la transición cuando la nueva composición pueda competir.',
          'Reorganiza objetos y posicionamiento.',
          'Completa las sinergias y mejoras restantes.',
        ],
      },
      {
        type: 'heading',
        text: 'Pivotar sin perder demasiado valor',
      },
      {
        type: 'text',
        text: 'Una transición no significa vender inmediatamente todo el tablero. Lo recomendable es conservar unidades fuertes mientras preparas los reemplazos. Esto reduce el riesgo de perder varios combates consecutivos durante el cambio.',
      },
      {
        type: 'keyTip',
        text: 'Antes de invertir grandes cantidades de oro en una unidad de tres estrellas, revisa cuántos jugadores están utilizando ese campeón.',
      },
      {
        type: 'commonMistake',
        text: 'Continuar buscando un campeón muy disputado puede consumir toda tu economía sin garantizar la mejora que necesitas.',
      },
    ],
    quiz: [
      {
        question: '¿Por qué es importante contar copias?',
        options: [
          'Para aumentar el nivel',
          'Para estimar la disponibilidad de campeones',
          'Para obtener objetos adicionales',
          'Para cambiar el orden de combate',
        ],
        answer: 1,
        explanation:
          'Contar copias permite evaluar qué tan difícil puede ser encontrar una unidad.',
      },
      {
        question: '¿Qué significa holdear?',
        options: [
          'Actualizar la tienda',
          'Conservar campeones en el banco',
          'Subir de nivel',
          'Cambiar los objetos',
        ],
        answer: 1,
        explanation: 'Holdear consiste en guardar unidades para futuras mejoras o transiciones.',
      },
      {
        question: '¿Cuál es una buena razón para pivotar?',
        options: [
          'Encontrar una composición más adecuada para tus recursos',
          'Tener demasiada vida',
          'Querer vender todos los campeones sin motivo',
          'Haber ganado una ronda',
        ],
        answer: 0,
        explanation: 'Pivotar permite aprovechar mejores oportunidades y adaptarse al lobby.',
      },
    ],
  },

  {
    id: 14,
    slug: 'errores-comunes',
    level: 'advanced',
    orderInLevel: 3,
    title: 'Errores comunes',
    description: 'Identifica diez errores frecuentes y aprende cómo corregirlos.',
    readingTime: 9,
    image: '/images/tutorials/errores.png',
    color: 'purple',
    content: [
      {
        type: 'heading',
        text: 'Por qué es importante reconocer los errores',
      },
      {
        type: 'text',
        text: 'Mejorar en TFT no depende únicamente de conocer composiciones populares. También requiere identificar decisiones que perjudican la economía, el posicionamiento y la fuerza del tablero.',
      },
      {
        type: 'heading',
        text: 'Error 1: gastar oro sin un objetivo',
      },
      {
        type: 'text',
        text: 'Actualizar constantemente la tienda sin buscar unidades específicas puede destruir tu economía. Antes de gastar, identifica qué campeones necesitas y qué mejoras esperas conseguir.',
      },
      {
        type: 'heading',
        text: 'Error 2: ahorrar demasiado',
      },
      {
        type: 'text',
        text: 'Mantener una gran cantidad de oro mientras pierdes demasiada vida puede provocar una eliminación temprana. Aprende a reconocer cuándo necesitas invertir recursos para estabilizarte.',
      },
      {
        type: 'heading',
        text: 'Error 3: forzar una composición',
      },
      {
        type: 'text',
        text: 'Intentar jugar siempre la misma composición puede ser perjudicial cuando no encuentras los campeones u objetos necesarios. Mantén abiertas varias alternativas.',
      },
      {
        type: 'heading',
        text: 'Error 4: ignorar los objetos',
      },
      {
        type: 'text',
        text: 'Guardar componentes durante demasiadas rondas puede reducir la fuerza del tablero. Considera fabricar objetos útiles aunque no sean las combinaciones ideales.',
      },
      {
        type: 'heading',
        text: 'Error 5: posicionar incorrectamente',
      },
      {
        type: 'text',
        text: 'Colocar carries en posiciones vulnerables o tanques demasiado alejados puede perjudicar el combate. Ajusta tu formación según las habilidades y posiciones enemigas.',
      },
      {
        type: 'heading',
        text: 'Error 6: no revisar a los rivales',
      },
      {
        type: 'text',
        text: 'Ignorar el scouting puede llevarte a buscar unidades demasiado disputadas. Observa los tableros enemigos para conocer sus composiciones y amenazas.',
      },
      {
        type: 'heading',
        text: 'Error 7: subir de nivel en el momento equivocado',
      },
      {
        type: 'text',
        text: 'Comprar experiencia sin considerar tu composición puede reducir el oro disponible para encontrar campeones importantes. Algunas estrategias necesitan niveles altos, mientras que otras prefieren buscar unidades económicas.',
      },
      {
        type: 'heading',
        text: 'Error 8: llenar el banco sin planificación',
      },
      {
        type: 'text',
        text: 'Guardar demasiados campeones innecesarios ocupa espacios y puede perjudicar tu economía. Conserva principalmente las unidades que contribuyen a tu estrategia.',
      },
      {
        type: 'heading',
        text: 'Error 9: no adaptar la estrategia',
      },
      {
        type: 'text',
        text: 'Una composición que funciona durante las primeras etapas puede perder fuerza posteriormente. Aprende a reemplazar unidades temporales y realizar transiciones cuando sea necesario.',
      },
      {
        type: 'heading',
        text: 'Error 10: copiar guías sin comprenderlas',
      },
      {
        type: 'text',
        text: 'Las guías muestran composiciones recomendadas, pero no pueden representar todas las situaciones de una partida. Comprender por qué funcionan los campeones, objetos y rasgos permite tomar mejores decisiones.',
      },
      {
        type: 'heading',
        text: 'Resumen de errores',
      },
      {
        type: 'table',
        headers: ['Error', 'Solución'],
        rows: [
          ['Gastar sin objetivo', 'Definir qué unidades necesitas'],
          ['Ahorrar demasiado', 'Estabilizar cuando sea necesario'],
          ['Forzar composiciones', 'Mantener alternativas'],
          ['Ignorar objetos', 'Fabricar combinaciones útiles'],
          ['Mal posicionamiento', 'Adaptar la formación'],
          ['No hacer scouting', 'Revisar los tableros rivales'],
          ['Subir de nivel incorrectamente', 'Considerar la estrategia'],
          ['Llenar el banco', 'Conservar unidades importantes'],
          ['No adaptarse', 'Preparar transiciones'],
          ['Copiar sin comprender', 'Aprender las mecánicas'],
        ],
      },
      {
        type: 'heading',
        text: 'Cómo analizar tus partidas',
      },
      {
        type: 'steps',
        title: 'Revisión después de jugar',
        items: [
          'Identifica en qué etapa comenzaste a perder demasiada vida.',
          'Revisa si gastaste oro en el momento adecuado.',
          'Evalúa si tus objetos estaban bien distribuidos.',
          'Comprueba si tu composición estaba disputada.',
          'Analiza si podrías haber cambiado de estrategia.',
          'Elige un error concreto para corregir en tu siguiente partida.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Mejorar una decisión a la vez suele ser más útil que intentar cambiar toda tu forma de jugar simultáneamente.',
      },
      {
        type: 'commonMistake',
        text: 'Evaluar una partida únicamente por la posición final puede ocultar buenas decisiones y errores importantes. Analiza también cómo utilizaste tus recursos.',
      },
    ],
    quiz: [
      {
        question: '¿Por qué es perjudicial hacer roll sin un objetivo?',
        options: [
          'Porque aumenta automáticamente el nivel',
          'Porque puede desperdiciar la economía',
          'Porque elimina los objetos',
          'Porque reduce las estrellas',
        ],
        answer: 1,
        explanation: 'Actualizar la tienda sin una estrategia puede consumir recursos necesarios.',
      },
      {
        question: '¿Qué debes hacer si tu composición está demasiado disputada?',
        options: [
          'Continuar siempre sin cambios',
          'Evaluar alternativas y posibles transiciones',
          'Vender todos tus objetos',
          'Dejar de comprar campeones',
        ],
        answer: 1,
        explanation: 'Adaptarse puede permitirte aprovechar unidades menos disputadas.',
      },
      {
        question: '¿Cuál es una buena forma de mejorar después de una partida?',
        options: [
          'Ignorar el resultado',
          'Copiar otra composición sin analizar',
          'Revisar decisiones y reconocer errores',
          'Jugar siempre exactamente igual',
        ],
        answer: 2,
        explanation:
          'Analizar las decisiones permite identificar aspectos concretos que puedes mejorar.',
      },
    ],
  },

  {
    id: 15,
    slug: 'glosario',
    level: 'advanced',
    orderInLevel: 4,
    title: 'Glosario TFT',
    description: 'Conoce los términos más utilizados en estrategias, guías y partidas de TFT.',
    readingTime: 10,
    image: '/images/tutorials/glosario.png',
    color: 'purple',
    content: [
      {
        type: 'heading',
        text: 'Introducción al vocabulario de TFT',
      },
      {
        type: 'text',
        text: 'Los jugadores de TFT utilizan numerosos términos en inglés para describir estrategias, acciones y situaciones. Comprender este vocabulario facilita la lectura de guías y la comunicación con otros jugadores.',
      },
      {
        type: 'heading',
        text: 'Economía y administración',
      },
      {
        type: 'table',
        headers: ['Término', 'Significado'],
        rows: [
          ['Econ', 'Economía y administración del oro'],
          ['Interest', 'Oro adicional obtenido por ahorrar'],
          ['Streak', 'Racha de victorias o derrotas'],
          ['Win streak', 'Racha de victorias'],
          ['Lose streak', 'Racha de derrotas'],
          ['Tempo', 'Fuerza y ritmo de desarrollo del tablero'],
          ['Greed', 'Priorizar recursos futuros asumiendo riesgos actuales'],
          ['Level up', 'Subir de nivel'],
          ['Roll', 'Actualizar la tienda'],
          ['Rolldown', 'Gastar mucho oro buscando mejoras'],
          ['Slow Roll', 'Actualizar la tienda conservando economía'],
          ['Hyper Roll', 'Gastar rápidamente para buscar copias de campeones'],
        ],
      },
      {
        type: 'heading',
        text: 'Campeones y composiciones',
      },
      {
        type: 'table',
        headers: ['Término', 'Significado'],
        rows: [
          ['Carry', 'Campeón principal encargado de generar daño o asegurar victorias'],
          ['Main tank', 'Tanque principal de la composición'],
          ['Frontline', 'Primera línea de campeones resistentes'],
          ['Backline', 'Retaguardia de unidades ofensivas y de apoyo'],
          ['Trait', 'Rasgo compartido por determinados campeones'],
          ['Synergy', 'Bonificación obtenida al combinar rasgos'],
          ['Comp', 'Composición de campeones'],
          ['Core', 'Unidades esenciales de una composición'],
          ['Flex', 'Capacidad de adaptar campeones y estrategias'],
          ['Pivot', 'Cambio de composición'],
          ['Splash', 'Incorporar unidades o rasgos complementarios'],
          ['Board', 'Conjunto de campeones desplegados'],
        ],
      },
      {
        type: 'heading',
        text: 'Tienda y unidades',
      },
      {
        type: 'table',
        headers: ['Término', 'Significado'],
        rows: [
          ['Shop', 'Tienda de campeones'],
          ['Bench', 'Banco donde se almacenan unidades'],
          ['Pool', 'Reserva compartida de campeones'],
          ['Contested', 'Unidad o composición disputada por varios jugadores'],
          ['Uncontested', 'Unidad o composición poco disputada'],
          ['Hit', 'Encontrar una unidad o mejora buscada'],
          ['Miss', 'No encontrar las unidades necesarias'],
          ['Hold', 'Conservar una unidad en el banco'],
          ['Three-star', 'Campeón de tres estrellas'],
          ['Two-star', 'Campeón de dos estrellas'],
          ['Natural', 'Encontrar una unidad sin invertir roll adicional'],
          ['Pair', 'Tener dos copias de una misma unidad de una estrella'],
        ],
      },
      {
        type: 'heading',
        text: 'Objetos',
      },
      {
        type: 'table',
        headers: ['Término', 'Significado'],
        rows: [
          ['Item', 'Objeto equipado a un campeón'],
          ['Component', 'Pieza utilizada para fabricar objetos'],
          ['Slam', 'Fabricar inmediatamente un objeto completo'],
          ['BiS', 'Best in Slot: combinación considerada ideal'],
          ['Item holder', 'Campeón que utiliza objetos temporalmente'],
          ['AD', 'Daño de ataque'],
          ['AP', 'Poder de habilidad'],
          ['AS', 'Velocidad de ataque'],
          ['Crit', 'Golpe crítico'],
          ['Mana', 'Recurso utilizado para lanzar habilidades'],
          ['Shred', 'Reducción de resistencia mágica'],
          ['Sunder', 'Reducción de armadura'],
        ],
      },
      {
        type: 'heading',
        text: 'Estrategias',
      },
      {
        type: 'table',
        headers: ['Término', 'Significado'],
        rows: [
          ['Fast 8', 'Estrategia de alcanzar rápidamente el nivel ocho'],
          ['Fast 9', 'Estrategia de alcanzar rápidamente el nivel nueve'],
          ['Reroll', 'Estrategia de buscar unidades de tres estrellas'],
          ['Standard', 'Desarrollo equilibrado de economía y niveles'],
          ['Open fort', 'Estrategia de jugar con un tablero muy débil para priorizar economía'],
          ['Strongest board', 'Utilizar el tablero más fuerte disponible'],
          ['Stabilize', 'Fortalecer el tablero para reducir derrotas'],
          ['Transition', 'Cambiar progresivamente de unidades'],
          ['Cap', 'Potencial máximo de fuerza de un tablero'],
          ['Highroll', 'Obtener resultados especialmente favorables'],
          ['Lowroll', 'Obtener resultados desfavorables'],
        ],
      },
      {
        type: 'heading',
        text: 'Combate y posicionamiento',
      },
      {
        type: 'table',
        headers: ['Término', 'Significado'],
        rows: [
          ['Scouting', 'Observar y analizar tableros rivales'],
          ['Positioning', 'Distribución de campeones en el tablero'],
          ['CC', 'Control de masas'],
          ['AoE', 'Daño o efecto de área'],
          ['Burst', 'Gran cantidad de daño en poco tiempo'],
          ['DPS', 'Daño por segundo'],
          ['Sustain', 'Capacidad de mantenerse durante combates prolongados'],
          ['Backline access', 'Capacidad de alcanzar unidades de retaguardia'],
          ['Matchup', 'Enfrentamiento entre composiciones'],
          ['Lobby', 'Conjunto de jugadores de una partida'],
        ],
      },
      {
        type: 'heading',
        text: 'Posiciones y resultados',
      },
      {
        type: 'table',
        headers: ['Término', 'Significado'],
        rows: [
          ['Top 4', 'Terminar entre los cuatro primeros'],
          ['Top 1', 'Ganar la partida'],
          ['Bot 4', 'Terminar entre los cuatro últimos'],
          ['Placement', 'Posición final de un jugador'],
          ['HP', 'Puntos de vida'],
          ['Spike', 'Momento en que una composición aumenta considerablemente su fuerza'],
          ['Outscale', 'Superar a otra composición durante etapas posteriores'],
        ],
      },
      {
        type: 'heading',
        text: 'Ejemplo de interpretación de una guía',
      },
      {
        type: 'text',
        text: 'Si una guía indica que debes jugar Fast 8 desde strongest board, hacer slam de objetos flexibles y realizar un rolldown para encontrar tu carry, significa que debes mantener un tablero fuerte, alcanzar el nivel ocho con una economía adecuada, fabricar objetos útiles y después gastar oro buscando las unidades principales.',
      },
      {
        type: 'heading',
        text: 'Cómo aprender los términos',
      },
      {
        type: 'steps',
        title: 'Aprendizaje progresivo',
        items: [
          'Comienza con los términos de economía.',
          'Aprende las funciones de los campeones.',
          'Reconoce las estrategias Fast 8, Fast 9 y Reroll.',
          'Familiarízate con el vocabulario de objetos.',
          'Practica el scouting y el posicionamiento.',
          'Consulta el glosario cuando encuentres términos desconocidos.',
        ],
      },
      {
        type: 'keyTip',
        text: 'No necesitas memorizar todo el vocabulario inmediatamente. Comprender los conceptos y aplicarlos durante las partidas es más importante que recordar sus nombres.',
      },
      {
        type: 'commonMistake',
        text: 'Utilizar términos estratégicos sin comprender su significado puede llevarte a tomar decisiones incorrectas. Aprende primero qué representa cada concepto.',
      },
    ],
    quiz: [
      {
        question: '¿Qué significa BiS?',
        options: [
          'Una estrategia de economía',
          'Una combinación considerada ideal de objetos',
          'Un campeón de cinco de oro',
          'Un tipo de aumento',
        ],
        answer: 1,
        explanation:
          'BiS significa Best in Slot y se utiliza para describir combinaciones ideales de objetos.',
      },
      {
        question: '¿Qué significa contested?',
        options: [
          'Una composición disputada por varios jugadores',
          'Un campeón de tres estrellas',
          'Un objeto especial',
          'Una estrategia de posicionamiento',
        ],
        answer: 0,
        explanation: 'Contested indica que varios jugadores buscan unidades similares.',
      },
      {
        question: '¿Qué significa strongest board?',
        options: [
          'Guardar todos los campeones',
          'Utilizar el tablero más fuerte disponible',
          'Alcanzar siempre el nivel máximo',
          'Comprar únicamente campeones de cinco de oro',
        ],
        answer: 1,
        explanation:
          'Strongest board consiste en desplegar la combinación más fuerte disponible en ese momento.',
      },
    ],
  },
];
