import type { Tutorial } from '../../../shared/models/content.models';

export const intermediateTutorials: Tutorial[] = [
  {
    id: 7,
    slug: 'aumentos',
    level: 'intermediate',
    orderInLevel: 1,
    title: 'Aumentos',
    description:
      'Aprende a elegir aumentos de economía, combate y objetos según las necesidades de tu partida.',
    readingTime: 9,
    image: '/images/tutorials/aumentos.png',
    color: 'blue',
    content: [
      {
        type: 'heading',
        text: '¿Qué son los aumentos?',
      },
      {
        type: 'text',
        text: 'Los aumentos son bonificaciones especiales que aparecen en determinados momentos de una partida de TFT. Permiten modificar tu estrategia, fortalecer campeones, generar recursos o acceder a mecánicas particulares. Sus efectos y disponibilidad dependen del conjunto y del modo de juego.',
      },
      {
        type: 'heading',
        text: 'Categorías de aumentos',
      },
      {
        type: 'table',
        headers: ['Categoría', 'Función', 'Cuándo utilizarla'],
        rows: [
          [
            'Economía',
            'Generar oro, experiencia o recursos',
            'Cuando necesitas desarrollar tu economía',
          ],
          [
            'Combate',
            'Mejorar el rendimiento de las unidades',
            'Cuando buscas fortalecer el tablero',
          ],
          [
            'Objetos',
            'Obtener componentes u objetos especiales',
            'Cuando necesitas completar equipamiento',
          ],
          ['Rasgos', 'Potenciar sinergias específicas', 'Cuando tienes una composición compatible'],
          [
            'Campeones',
            'Modificar o fortalecer determinadas unidades',
            'Cuando puedes aprovechar su efecto',
          ],
        ],
      },
      {
        type: 'heading',
        text: 'Aumentos de economía',
      },
      {
        type: 'text',
        text: 'Los aumentos económicos proporcionan recursos para desarrollar tu tablero. Pueden entregar oro, experiencia, unidades adicionales o recompensas condicionadas. Son útiles cuando necesitas alcanzar niveles superiores o preparar una estrategia que requiere una inversión considerable.',
      },
      {
        type: 'heading',
        text: 'Aumentos de combate',
      },
      {
        type: 'text',
        text: 'Los aumentos de combate mejoran directamente la capacidad ofensiva, defensiva o de utilidad del equipo. Algunos aumentan estadísticas y otros proporcionan efectos especiales. Su valor depende de qué campeones pueden aprovecharlos y de la situación de la partida.',
      },
      {
        type: 'heading',
        text: 'Aumentos de objetos',
      },
      {
        type: 'text',
        text: 'Los aumentos relacionados con objetos pueden entregar componentes, objetos completos, herramientas de modificación o equipamiento especial. Son especialmente útiles cuando tu composición necesita determinados efectos para funcionar correctamente.',
      },
      {
        type: 'heading',
        text: 'Cómo elegir el mejor aumento',
      },
      {
        type: 'steps',
        title: 'Evaluación de un aumento',
        items: [
          'Observa los tres aumentos disponibles y comprende sus efectos.',
          'Revisa los campeones y objetos que ya tienes.',
          'Determina si necesitas economía, daño o resistencia.',
          'Evalúa qué aumento puedes aprovechar inmediatamente.',
          'Considera si la bonificación seguirá siendo útil durante las siguientes etapas.',
          'Selecciona el aumento que mejor se adapte a tu situación.',
        ],
      },
      {
        type: 'heading',
        text: 'Elegir entre economía y combate',
      },
      {
        type: 'text',
        text: 'Un aumento económico puede proporcionar ventajas a largo plazo, mientras que uno de combate puede ayudarte a ganar inmediatamente. Si tu tablero es fuerte y tienes suficiente vida, puedes considerar una opción económica. Si estás cerca de quedar eliminado, una mejora de combate suele ser más urgente.',
      },
      {
        type: 'heading',
        text: 'Adaptarse a los aumentos',
      },
      {
        type: 'text',
        text: 'No siempre debes seleccionar un aumento únicamente porque aparece en una guía. Algunas bonificaciones permiten jugar composiciones diferentes a las que habías planeado. Aprender a identificar estas oportunidades mejora tu capacidad de adaptación.',
      },
      {
        type: 'keyTip',
        text: 'El mejor aumento no siempre es el más poderoso de manera individual, sino el que genera mayor valor para tu tablero y tu estrategia.',
      },
      {
        type: 'commonMistake',
        text: 'Seleccionar un aumento de un rasgo que todavía no puedes activar puede hacerte perder fuerza durante varias rondas. Evalúa si realmente puedes aprovecharlo.',
      },
    ],
    quiz: [
      {
        question: '¿Cuál es la función principal de un aumento económico?',
        options: [
          'Modificar la apariencia del tablero',
          'Generar recursos para desarrollar tu estrategia',
          'Eliminar automáticamente a un rival',
          'Aumentar siempre las estrellas de todos los campeones',
        ],
        answer: 1,
        explanation:
          'Los aumentos económicos proporcionan recursos como oro, experiencia u otras recompensas.',
      },
      {
        question: '¿Qué debes considerar al elegir un aumento?',
        options: [
          'Únicamente su nombre',
          'La elección de otros jugadores',
          'Tu composición, economía y situación actual',
          'El color de la tarjeta',
        ],
        answer: 2,
        explanation: 'El valor de un aumento depende de cómo se adapta a tu tablero.',
      },
      {
        question: '¿Cuándo puede ser preferible un aumento de combate?',
        options: [
          'Cuando necesitas fortalecer el tablero inmediatamente',
          'Cuando no tienes campeones',
          'Cuando quieres reducir tu nivel',
          'Cuando deseas perder todas las rondas',
        ],
        answer: 0,
        explanation: 'Una mejora inmediata puede ayudarte a estabilizarte y conservar vida.',
      },
    ],
  },

  {
    id: 8,
    slug: 'el-carrusel',
    level: 'intermediate',
    orderInLevel: 2,
    title: 'El carrusel',
    description:
      'Aprende a priorizar componentes, campeones y recursos durante las rondas de selección.',
    readingTime: 7,
    image: '/images/tutorials/carrusel.png',
    color: 'blue',
    content: [
      {
        type: 'heading',
        text: '¿Qué es el carrusel?',
      },
      {
        type: 'text',
        text: 'El carrusel, también conocido como ronda de selección compartida, es una mecánica tradicional de TFT en la que los jugadores eligen campeones que pueden llevar objetos o recompensas. Su funcionamiento, frecuencia y disponibilidad pueden variar según el conjunto o modo de juego.',
      },
      {
        type: 'heading',
        text: 'Orden de selección',
      },
      {
        type: 'text',
        text: 'En el carrusel tradicional, los jugadores con menos vida suelen tener prioridad para elegir. Esto proporciona una oportunidad de recuperación, aunque perder vida deliberadamente para obtener una mejor selección no siempre compensa.',
      },
      {
        type: 'heading',
        text: 'Qué debes priorizar',
      },
      {
        type: 'list',
        items: [
          'Componentes que permitan completar objetos importantes.',
          'Campeones que necesites para mejorar tu composición.',
          'Unidades de coste elevado que puedan aportar valor económico.',
          'Objetos especiales compatibles con tu estrategia.',
          'Recursos que te permitan estabilizar tu tablero.',
        ],
      },
      {
        type: 'heading',
        text: 'Elegir por el objeto',
      },
      {
        type: 'text',
        text: 'En muchas situaciones conviene elegir un campeón por el componente que lleva. Por ejemplo, si tu carry necesita un objeto específico y ya tienes uno de sus componentes, conseguir la pieza restante puede proporcionar una mejora inmediata.',
      },
      {
        type: 'heading',
        text: 'Elegir por el campeón',
      },
      {
        type: 'text',
        text: 'En otras ocasiones, el campeón es más importante que su objeto. Esto ocurre cuando necesitas una copia para completar una mejora de dos estrellas, conseguir una unidad clave o alcanzar una sinergia.',
      },
      {
        type: 'heading',
        text: 'Elegir por valor económico',
      },
      {
        type: 'text',
        text: 'Cuando ninguna opción mejora directamente tu composición, puedes considerar una unidad de coste elevado que puedas vender o utilizar temporalmente. Debes comparar ese valor con la utilidad de los componentes disponibles.',
      },
      {
        type: 'steps',
        title: 'Preparación antes del carrusel',
        items: [
          'Revisa los componentes que tienes disponibles.',
          'Identifica los objetos que necesita tu carry principal.',
          'Comprueba si necesitas una copia específica de algún campeón.',
          'Define una primera y segunda opción de selección.',
          'Adapta tu elección según los recursos que sigan disponibles.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Antes de seleccionar, identifica qué mejora tendrá mayor impacto en tu tablero. No siempre necesitas elegir el campeón más caro.',
      },
      {
        type: 'commonMistake',
        text: 'Seleccionar una unidad únicamente por su coste puede hacerte perder un componente importante para completar los objetos de tu composición.',
      },
    ],
    quiz: [
      {
        question: '¿Qué suele determinar la prioridad de selección en un carrusel tradicional?',
        options: [
          'La cantidad de oro',
          'La vida de los jugadores',
          'El nivel del jugador',
          'La cantidad de campeones',
        ],
        answer: 1,
        explanation:
          'En el carrusel tradicional, los jugadores con menos vida suelen elegir antes.',
      },
      {
        question: '¿Cuándo conviene priorizar un componente?',
        options: [
          'Cuando permite completar un objeto importante',
          'Cuando no tienes espacio en el banco',
          'Cuando quieres reducir tu economía',
          'Cuando no necesitas objetos',
        ],
        answer: 0,
        explanation: 'Completar un objeto importante puede fortalecer inmediatamente tu tablero.',
      },
      {
        question: '¿Qué debes hacer antes de participar en un carrusel?',
        options: [
          'Vender todos tus campeones',
          'Gastar todo tu oro',
          'Identificar las necesidades de tu composición',
          'Cambiar todos tus objetos',
        ],
        answer: 2,
        explanation: 'Conocer tus necesidades permite aprovechar mejor las opciones disponibles.',
      },
    ],
  },

  {
    id: 9,
    slug: 'scouting-y-adaptacion',
    level: 'intermediate',
    orderInLevel: 3,
    title: 'Scouting y adaptación al lobby',
    description:
      'Aprende a analizar tableros enemigos, detectar composiciones disputadas y cambiar de estrategia.',
    readingTime: 10,
    image: '/images/tutorials/scouting.png',
    color: 'blue',
    content: [
      {
        type: 'heading',
        text: '¿Qué es scouting?',
      },
      {
        type: 'text',
        text: 'Scouting significa observar y analizar los tableros de los demás jugadores. Esta práctica permite identificar composiciones, objetos, campeones principales, niveles y posibles amenazas.',
      },
      {
        type: 'heading',
        text: 'Qué debes observar',
      },
      {
        type: 'list',
        items: [
          'Composiciones que están utilizando los rivales.',
          'Campeones principales y sus niveles de estrellas.',
          'Objetos ofensivos y defensivos.',
          'Posicionamiento de carries y tanques.',
          'Rasgos activos y posibles sinergias.',
          'Nivel, economía visible y fuerza aproximada del tablero.',
          'Cantidad de jugadores que buscan los mismos campeones.',
        ],
      },
      {
        type: 'heading',
        text: 'Qué significa que una composición esté disputada',
      },
      {
        type: 'text',
        text: 'Una composición está disputada, o contested, cuando varios jugadores buscan campeones similares. Como las copias de cada unidad pertenecen a un conjunto compartido, encontrar determinados campeones puede resultar más difícil cuando otros jugadores también los compran.',
      },
      {
        type: 'heading',
        text: 'Cómo detectar unidades disputadas',
      },
      {
        type: 'steps',
        title: 'Análisis del lobby',
        items: [
          'Observa los tableros de los otros siete jugadores.',
          'Identifica sus carries principales.',
          'Revisa qué campeones tienen en el banco.',
          'Compara esas unidades con las que necesita tu composición.',
          'Determina si continuar con tu estrategia sigue siendo conveniente.',
        ],
      },
      {
        type: 'heading',
        text: 'Qué significa pivotar',
      },
      {
        type: 'text',
        text: 'Pivotar significa cambiar parcial o completamente de composición cuando las circunstancias lo requieren. Puedes hacerlo si tus unidades están demasiado disputadas, encuentras campeones más fuertes o consigues objetos que favorecen otra estrategia.',
      },
      {
        type: 'heading',
        text: 'Cuándo cambiar de composición',
      },
      {
        type: 'list',
        items: [
          'Cuando varios jugadores buscan tu mismo carry.',
          'Cuando encuentras una unidad poderosa que aprovecha tus objetos.',
          'Cuando recibes aumentos que favorecen otra estrategia.',
          'Cuando tu composición no consigue estabilizarse.',
          'Cuando tienes recursos suficientes para realizar una transición.',
        ],
      },
      {
        type: 'heading',
        text: 'Cómo realizar una transición',
      },
      {
        type: 'text',
        text: 'Una transición consiste en sustituir progresivamente unidades de tu tablero inicial por campeones de una composición más fuerte. Es importante conservar suficiente daño y resistencia durante el cambio para evitar perder demasiada vida.',
      },
      {
        type: 'steps',
        title: 'Ejemplo de adaptación',
        items: [
          'Comienzas utilizando un carry de daño físico de bajo coste.',
          'Descubres que varios rivales buscan el mismo campeón.',
          'Encuentras una unidad de mayor coste compatible con tus objetos.',
          'Compras los campeones necesarios para formar una nueva composición.',
          'Sustituyes las unidades anteriores cuando el nuevo tablero sea suficientemente fuerte.',
        ],
      },
      {
        type: 'heading',
        text: 'Adaptar el posicionamiento',
      },
      {
        type: 'text',
        text: 'El scouting también permite ajustar la posición de tus campeones. Puedes separar unidades frente a daño de área, proteger carries contra amenazas específicas o modificar la ubicación de tus tanques.',
      },
      {
        type: 'keyTip',
        text: 'Revisar los tableros enemigos antes de gastar grandes cantidades de oro puede evitar que inviertas en una composición demasiado disputada.',
      },
      {
        type: 'commonMistake',
        text: 'Forzar una composición sin revisar qué están jugando los demás puede dificultar la obtención de unidades importantes.',
      },
    ],
    quiz: [
      {
        question: '¿Qué significa scouting?',
        options: [
          'Actualizar la tienda',
          'Observar y analizar los tableros rivales',
          'Comprar experiencia',
          'Vender campeones',
        ],
        answer: 1,
        explanation: 'Scouting consiste en recopilar información de los rivales.',
      },
      {
        question: '¿Qué significa que una composición esté contested?',
        options: [
          'Que tiene muchos objetos',
          'Que varios jugadores buscan las mismas unidades',
          'Que todos sus campeones tienen tres estrellas',
          'Que no utiliza rasgos',
        ],
        answer: 1,
        explanation: 'Una composición disputada comparte unidades importantes con otros jugadores.',
      },
      {
        question: '¿Qué significa pivotar?',
        options: [
          'Cambiar de composición o estrategia',
          'Aumentar automáticamente el nivel',
          'Actualizar todos los objetos',
          'Cambiar el orden de los jugadores',
        ],
        answer: 0,
        explanation: 'Pivotar permite adaptar tu composición a las circunstancias de la partida.',
      },
    ],
  },

  {
    id: 10,
    slug: 'modos-de-juego',
    level: 'intermediate',
    orderInLevel: 4,
    title: 'Modos de juego',
    description: 'Comprende las estrategias Fast 8, Fast 9, Reroll, Slow Roll y Standard.',
    readingTime: 11,
    image: '/images/tutorials/modos.png',
    color: 'blue',
    content: [
      {
        type: 'heading',
        text: 'Estrategias de desarrollo de composiciones',
      },
      {
        type: 'text',
        text: 'En TFT existen diferentes formas de administrar oro, experiencia y actualizaciones de tienda. Términos como Fast 8, Fast 9, Reroll y Slow Roll describen estrategias económicas, no modos independientes del cliente. Cada una busca alcanzar determinadas condiciones para construir un tablero competitivo.',
      },
      {
        type: 'heading',
        text: 'Fast 8',
      },
      {
        type: 'text',
        text: 'Fast 8 consiste en priorizar la economía y la experiencia para alcanzar el nivel ocho relativamente pronto. Una vez allí, el jugador utiliza oro para buscar campeones importantes, especialmente unidades de coste cuatro.',
      },
      {
        type: 'steps',
        title: 'Cómo jugar Fast 8',
        items: [
          'Construye un tablero inicial capaz de conservar vida.',
          'Acumula oro aprovechando los intereses y las rachas.',
          'Compra experiencia cuando resulte conveniente.',
          'Alcanza el nivel ocho con suficientes recursos.',
          'Actualiza la tienda para encontrar tus unidades principales.',
          'Completa el tablero con tanques, carries y sinergias.',
        ],
      },
      {
        type: 'heading',
        text: 'Fast 9',
      },
      {
        type: 'text',
        text: 'Fast 9 busca alcanzar rápidamente el nivel nueve para desplegar más unidades y mejorar las posibilidades de encontrar campeones de coste elevado. Requiere una economía sólida y suficiente vida para evitar quedar eliminado antes de completar la composición.',
      },
      {
        type: 'heading',
        text: 'Cuándo jugar Fast 9',
      },
      {
        type: 'list',
        items: [
          'Cuando tienes una economía superior a la habitual.',
          'Cuando tu tablero inicial es suficientemente fuerte.',
          'Cuando conservas una cantidad considerable de vida.',
          'Cuando recibes aumentos que favorecen la experiencia o la economía.',
          'Cuando puedes alcanzar el nivel nueve sin comprometer tu supervivencia.',
        ],
      },
      {
        type: 'heading',
        text: 'Reroll',
      },
      {
        type: 'text',
        text: 'Reroll es una estrategia centrada en conseguir varias copias de campeones específicos para mejorarlos a tres estrellas. En lugar de priorizar siempre los niveles superiores, el jugador invierte oro en actualizar la tienda desde un nivel adecuado.',
      },
      {
        type: 'heading',
        text: 'Slow Roll',
      },
      {
        type: 'text',
        text: 'Slow Roll consiste en acumular oro y utilizar principalmente el excedente para buscar campeones sin perder demasiado interés. Es frecuente en composiciones que dependen de unidades de tres estrellas.',
      },
      {
        type: 'heading',
        text: 'Standard',
      },
      {
        type: 'text',
        text: 'Standard describe una forma equilibrada de jugar, combinando subidas de nivel y actualizaciones de tienda según la fuerza del tablero. No depende necesariamente de una única unidad de tres estrellas ni de alcanzar el nivel nueve lo antes posible.',
      },
      {
        type: 'table',
        headers: ['Estrategia', 'Objetivo', 'Característica'],
        rows: [
          ['Fast 8', 'Alcanzar nivel 8', 'Buscar unidades importantes de coste 4'],
          ['Fast 9', 'Alcanzar nivel 9', 'Aprovechar unidades de coste elevado'],
          ['Reroll', 'Mejorar unidades', 'Buscar campeones de 3 estrellas'],
          ['Slow Roll', 'Mantener economía', 'Actualizar tienda con el excedente'],
          ['Standard', 'Desarrollo equilibrado', 'Adaptarse a las necesidades del tablero'],
        ],
      },
      {
        type: 'heading',
        text: 'Cómo elegir una estrategia',
      },
      {
        type: 'steps',
        title: 'Selección de estrategia',
        items: [
          'Observa los campeones que aparecen durante la apertura.',
          'Revisa los componentes y objetos disponibles.',
          'Identifica los aumentos que pueden favorecer tu economía.',
          'Comprueba si tus unidades principales están disputadas.',
          'Evalúa tu vida y capacidad de mantener una racha.',
          'Selecciona la estrategia que mejor aproveche tus recursos.',
        ],
      },
      {
        type: 'keyTip',
        text: 'No debes decidir siempre tu estrategia antes de comenzar. Las mejores decisiones dependen de los campeones, objetos y oportunidades que aparecen durante la partida.',
      },
      {
        type: 'commonMistake',
        text: 'Intentar jugar Fast 9 sin economía ni un tablero estable puede provocar que pierdas demasiada vida antes de alcanzar tu objetivo.',
      },
    ],
    quiz: [
      {
        question: '¿Cuál es el objetivo principal de Fast 8?',
        options: [
          'Conseguir unidades de una estrella',
          'Alcanzar el nivel ocho para buscar unidades importantes',
          'Mantenerse siempre en nivel cuatro',
          'Evitar comprar experiencia',
        ],
        answer: 1,
        explanation: 'Fast 8 busca llegar al nivel ocho y aprovechar sus probabilidades de tienda.',
      },
      {
        question: '¿Qué caracteriza a una estrategia reroll?',
        options: [
          'Buscar campeones de tres estrellas',
          'Subir siempre a nivel nueve',
          'No comprar campeones',
          'Utilizar únicamente unidades de cinco de oro',
        ],
        answer: 0,
        explanation:
          'Las estrategias reroll buscan mejorar campeones específicos mediante múltiples copias.',
      },
      {
        question: '¿Qué debes considerar antes de jugar Fast 9?',
        options: [
          'Únicamente el nombre de la composición',
          'La economía, vida y fuerza del tablero',
          'La cantidad de jugadores eliminados solamente',
          'El aspecto visual de los campeones',
        ],
        answer: 1,
        explanation:
          'Fast 9 necesita recursos suficientes para alcanzar el nivel nueve sin quedar eliminado.',
      },
    ],
  },

  {
    id: 11,
    slug: 'etapas-de-la-partida',
    level: 'intermediate',
    orderInLevel: 5,
    title: 'Etapas de la partida',
    description: 'Aprende a jugar la apertura, estabilización, transición y fase final.',
    readingTime: 10,
    image: '/images/tutorials/etapas.png',
    color: 'blue',
    content: [
      {
        type: 'heading',
        text: 'Cómo se organiza una partida',
      },
      {
        type: 'text',
        text: 'Una partida de TFT se divide en etapas y rondas. Cada etapa presenta oportunidades para obtener recursos, mejorar campeones y enfrentarse a otros jugadores. Comprender el ritmo de la partida ayuda a tomar mejores decisiones económicas.',
      },
      {
        type: 'heading',
        text: 'Etapa 1: apertura',
      },
      {
        type: 'text',
        text: 'Durante la apertura consigues tus primeras unidades y objetos. Debes observar qué campeones aparecen y qué combinaciones puedes construir. No es necesario decidir inmediatamente tu composición final.',
      },
      {
        type: 'list',
        items: [
          'Compra unidades que permitan activar sinergias iniciales.',
          'Busca campeones de dos estrellas.',
          'Observa los componentes disponibles.',
          'Identifica posibles carries temporales.',
          'Evita gastar oro innecesariamente.',
        ],
      },
      {
        type: 'heading',
        text: 'Etapa 2: construcción de economía',
      },
      {
        type: 'text',
        text: 'En la etapa dos comienzan los enfrentamientos importantes contra otros jugadores. Debes decidir si intentarás mantener una racha de victorias, construir economía mediante derrotas controladas o jugar de manera flexible.',
      },
      {
        type: 'heading',
        text: 'Etapa 3: desarrollo del tablero',
      },
      {
        type: 'text',
        text: 'Durante la etapa tres debes mejorar tus unidades, fortalecer la primera línea y preparar tu estrategia principal. Algunas composiciones reroll comienzan a buscar campeones específicos, mientras que otras priorizan la experiencia.',
      },
      {
        type: 'heading',
        text: 'Etapa 4: estabilización',
      },
      {
        type: 'text',
        text: 'La etapa cuatro suele ser un momento importante para fortalecer el tablero. Muchos jugadores alcanzan niveles relevantes y comienzan a buscar unidades principales. Debes evaluar si puedes continuar ahorrando o necesitas invertir oro.',
      },
      {
        type: 'heading',
        text: 'Etapa 5: composición principal',
      },
      {
        type: 'text',
        text: 'Durante esta etapa normalmente necesitas una composición funcional con carries equipados, tanques resistentes y sinergias relevantes. Las decisiones de posicionamiento y adaptación comienzan a tener mayor impacto.',
      },
      {
        type: 'heading',
        text: 'Etapas 6 y posteriores: fase final',
      },
      {
        type: 'text',
        text: 'En la fase final quedan menos jugadores y los tableros suelen ser más fuertes. Es importante completar mejoras, buscar unidades adicionales, adaptar el posicionamiento y utilizar los recursos disponibles para sobrevivir.',
      },
      {
        type: 'table',
        headers: ['Etapa', 'Prioridad habitual'],
        rows: [
          ['1', 'Conseguir unidades y recursos iniciales'],
          ['2', 'Construir economía y definir una apertura'],
          ['3', 'Mejorar el tablero y preparar la estrategia'],
          ['4', 'Estabilizar y buscar unidades principales'],
          ['5', 'Completar la composición'],
          ['6+', 'Optimizar el tablero y adaptarse a los rivales'],
        ],
      },
      {
        type: 'heading',
        text: 'Qué significa estabilizar',
      },
      {
        type: 'text',
        text: 'Estabilizar significa invertir recursos para conseguir un tablero capaz de competir y reducir las derrotas. Puede implicar subir de nivel, actualizar la tienda, completar objetos o mejorar campeones.',
      },
      {
        type: 'heading',
        text: 'Cómo administrar la vida',
      },
      {
        type: 'text',
        text: 'La vida es un recurso que permite preparar tu estrategia. Sin embargo, cuanto menos vida tengas, menor será tu margen para seguir perdiendo. Debes equilibrar la economía con la necesidad de fortalecer el tablero.',
      },
      {
        type: 'steps',
        title: 'Evaluación durante cada etapa',
        items: [
          'Revisa cuánta vida conservas.',
          'Compara la fuerza de tu tablero con la de tus rivales.',
          'Comprueba cuánto oro tienes disponible.',
          'Identifica las mejoras que puedes conseguir.',
          'Decide si ahorrar, subir de nivel o actualizar la tienda.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Los momentos adecuados para subir de nivel o gastar oro pueden variar entre conjuntos, parches y composiciones. Aprende a reconocer la fuerza de tu tablero en lugar de depender únicamente de una ronda fija.',
      },
      {
        type: 'commonMistake',
        text: 'Seguir ahorrando mientras tu tablero pierde constantemente puede hacer que llegues a la fase final con demasiado poca vida.',
      },
    ],
    quiz: [
      {
        question: '¿Cuál es una prioridad importante durante la apertura?',
        options: [
          'Comprar únicamente campeones de cinco de oro',
          'Conseguir unidades y construir un tablero inicial',
          'Gastar todo el oro en actualizaciones',
          'Completar inmediatamente la composición final',
        ],
        answer: 1,
        explanation: 'La apertura permite construir un tablero inicial y reconocer oportunidades.',
      },
      {
        question: '¿Qué significa estabilizar el tablero?',
        options: [
          'Dejar de comprar campeones',
          'Fortalecer el equipo para competir y reducir derrotas',
          'Vender todas las unidades',
          'Mantener siempre la misma formación',
        ],
        answer: 1,
        explanation:
          'Estabilizar consiste en conseguir suficiente fuerza para evitar derrotas constantes.',
      },
      {
        question: '¿Qué adquiere mayor importancia durante la fase final?',
        options: [
          'Ignorar a los rivales',
          'Guardar todos los objetos',
          'Optimizar la composición y adaptar el posicionamiento',
          'Comprar campeones aleatorios',
        ],
        answer: 2,
        explanation:
          'En la fase final es importante aprovechar cada mejora y adaptarse a los rivales restantes.',
      },
    ],
  },
];
