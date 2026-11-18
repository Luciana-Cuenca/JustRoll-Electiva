import type { Tutorial } from '../../../shared/models/content.models';

export const beginnerTutorials: Tutorial[] = [
  {
    id: 1,
    slug: 'primeros-pasos',
    level: 'beginner',
    orderInLevel: 1,
    title: 'Primeros pasos',
    description: 'Qué es TFT, cómo funciona el tablero, la tienda y las rondas.',
    readingTime: 8,
    color: 'orange',
    content: [
      { type: 'heading', text: '¿Qué es Teamfight Tactics?' },
      {
        type: 'text',
        text: 'Teamfight Tactics (TFT) es un juego de estrategia de combate automático para ocho jugadores. Cada participante construye un equipo comprando campeones, equipándolos con objetos y aprovechando sus rasgos. Los combates ocurren automáticamente y el objetivo es sobrevivir hasta el final de la partida.',
      },
      { type: 'heading', text: 'Partes del tablero' },
      {
        type: 'list',
        items: [
          'Tablero: espacio hexagonal de cuatro filas y siete columnas donde se desarrollan los combates.',
          'Banco: nueve espacios para guardar campeones que todavía no utilizas.',
          'Tienda: muestra cinco campeones disponibles para comprar.',
          'Oro: recurso utilizado para comprar campeones, experiencia y actualizaciones de tienda.',
          'Nivel: determina cuántos campeones puedes desplegar normalmente y modifica las probabilidades de la tienda.',
          'Vida: representa cuánto daño puedes recibir antes de quedar eliminado.',
          'Inventario: almacena componentes, objetos y otras recompensas disponibles.',
        ],
      },

      { type: 'heading', text: 'Cómo funciona una ronda' },
      {
        type: 'steps',
        title: 'Desarrollo de una ronda',
        items: [
          'Durante la planificación compras, vendes y posicionas campeones.',
          'Equipas objetos y decides si gastar oro en experiencia o actualizaciones de tienda.',
          'Cuando termina la planificación, los campeones combaten automáticamente.',
          'El resultado determina si conservas tu vida o recibes daño del rival.',
          'Comienza una nueva ronda y puedes volver a modificar tu tablero.',
        ],
      },
      { type: 'heading', text: 'Cómo mejorar campeones' },
      {
        type: 'text',
        text: 'Los campeones pueden tener una, dos o tres estrellas. Tres copias de una estrella se combinan para crear una unidad de dos estrellas. Tres unidades de dos estrellas forman una unidad de tres estrellas. Por lo tanto, normalmente necesitas nueve copias originales para alcanzar tres estrellas.',
      },
      {
        type: 'table',
        headers: ['Nivel de estrellas', 'Copias originales'],
        rows: [
          ['1 estrella', '1'],
          ['2 estrellas', '3'],
          ['3 estrellas', '9'],
        ],
      },
      {
        type: 'keyTip',
        text: 'El nivel del jugador y las estrellas de los campeones son diferentes. El nivel permite desplegar más unidades; las estrellas mejoran a un campeón.',
      },
      {
        type: 'commonMistake',
        text: 'Comprar campeones sin considerar sus rasgos, costes o utilidad puede llenar el banco y perjudicar tu economía.',
      },
    ],
    quiz: [
      {
        question: '¿Cuál es el objetivo principal de TFT?',
        options: [
          'Conseguir más oro',
          'Ser el último jugador en pie',
          'Comprar todos los campeones',
          'Llegar primero al nivel máximo',
        ],
        answer: 1,
        explanation: 'El objetivo es sobrevivir a los demás jugadores.',
      },
      {
        question: '¿Cuántas copias originales necesitas para obtener tres estrellas?',
        options: ['3', '6', '9', '12'],
        answer: 2,
        explanation: 'Se necesitan nueve copias originales del mismo campeón.',
      },
      {
        question: '¿Qué determina normalmente el nivel del jugador?',
        options: [
          'El daño de los objetos',
          'La vida máxima',
          'La cantidad de unidades desplegables',
          'La cantidad de campeones del banco',
        ],
        answer: 2,
        explanation: 'El nivel determina la cantidad habitual de unidades que puedes desplegar.',
      },
    ],
  },
  {
    id: 2,
    slug: 'economia',
    level: 'beginner',
    orderInLevel: 2,
    title: 'Cómo funciona la economía',
    description:
      'Aprende a administrar oro, intereses y rachas para construir composiciones fuertes.',
    readingTime: 9,
    image: '/images/tutorials/economia.png',
    color: 'orange',
    content: [
      { type: 'heading', text: 'Por qué es importante la economía' },
      {
        type: 'text',
        text: 'El oro permite comprar campeones, actualizar la tienda y adquirir experiencia. Administrarlo correctamente ayuda a completar composiciones y alcanzar niveles importantes sin desperdiciar recursos.',
      },
      { type: 'heading', text: 'Fuentes de oro' },
      {
        type: 'list',
        items: [
          'Ingresos de ronda: recibes oro automáticamente durante la partida.',
          'Intereses: obtienes ingresos adicionales al conservar determinadas cantidades de oro.',
          'Rachas de victorias: ganar combates consecutivos puede generar oro adicional.',
          'Rachas de derrotas: perder combates consecutivos también puede generar ingresos adicionales.',
          'Venta de campeones: permite recuperar oro de unidades que ya no necesitas.',
          'Recompensas especiales: aumentos y mecánicas de determinados conjuntos pueden proporcionar oro.',
        ],
      },
      { type: 'heading', text: 'Cómo funcionan los intereses' },
      {
        type: 'text',
        text: 'En el sistema tradicional recibes un oro adicional por cada diez de oro acumulados, hasta un máximo habitual de cinco. Algunas mecánicas especiales pueden modificar este sistema.',
      },
      {
        type: 'table',
        headers: ['Oro acumulado', 'Interés habitual'],
        rows: [
          ['0-9', '0'],
          ['10-19', '1'],
          ['20-29', '2'],
          ['30-39', '3'],
          ['40-49', '4'],
          ['50 o más', '5'],
        ],
      },
      { type: 'heading', text: 'Cuándo ahorrar' },
      {
        type: 'list',
        items: [
          'Cuando tu tablero puede competir sin gastar demasiado.',
          'Cuando necesitas acumular oro para alcanzar un nivel importante.',
          'Cuando buscas campeones de coste elevado.',
          'Cuando tienes suficiente vida para preparar una composición.',
          'Cuando gastar no aumentaría significativamente la fuerza de tu equipo.',
        ],
      },
      { type: 'heading', text: 'Cuándo gastar' },
      {
        type: 'list',
        items: [
          'Cuando pierdes demasiada vida y necesitas estabilizarte.',
          'Cuando puedes completar mejoras importantes.',
          'Cuando necesitas alcanzar un nivel para añadir una unidad.',
          'Cuando tu composición alcanza su momento de mayor fuerza.',
          'Cuando estás cerca de quedar eliminado.',
        ],
      },
      { type: 'heading', text: 'Rachas y economía' },
      {
        type: 'text',
        text: 'Las rachas permiten obtener ingresos adicionales. Una racha de victorias recompensa un tablero fuerte, mientras que una racha de derrotas puede ayudar a generar economía a cambio de perder vida. No conviene perder deliberadamente sin evaluar cuánto daño puedes soportar.',
      },
      {
        type: 'keyTip',
        text: 'Conservar 50 de oro es una referencia útil para maximizar el interés tradicional, pero sobrevivir siempre es más importante que mantener esa cantidad.',
      },
      {
        type: 'commonMistake',
        text: 'Ahorrar demasiado mientras pierdes todos los combates puede provocar que quedes eliminado antes de utilizar tu oro.',
      },
    ],
    quiz: [
      {
        question: '¿Para qué sirve el oro?',
        options: [
          'Cambiar al rival',
          'Comprar campeones, experiencia y actualizaciones',
          'Aumentar directamente la vida',
          'Modificar las habilidades enemigas',
        ],
        answer: 1,
        explanation: 'El oro es el recurso principal para desarrollar tu tablero.',
      },
      {
        question: '¿Cuánto interés genera normalmente tener 40 de oro?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explanation: 'En el sistema tradicional, 40 de oro generan cuatro de interés.',
      },
      {
        question: '¿Cuándo conviene gastar aunque pierdas interés?',
        options: [
          'Siempre',
          'Cuando necesitas estabilizar el tablero',
          'Nunca',
          'Cuando quieres comprar cualquier campeón',
        ],
        answer: 1,
        explanation:
          'Gastar para evitar la eliminación puede ser más importante que conservar el interés.',
      },
    ],
  },
  {
    id: 3,
    slug: 'posicionamiento',
    level: 'beginner',
    orderInLevel: 3,
    title: 'Posicionamiento',
    description: 'Aprende dónde colocar tanques, carries y unidades de apoyo.',
    readingTime: 8,
    color: 'orange',
    content: [
      { type: 'heading', text: 'Por qué importa el posicionamiento' },
      {
        type: 'text',
        text: 'La posición de los campeones influye en los objetivos que atacan, el daño que reciben y la efectividad de sus habilidades. Una formación adecuada puede cambiar el resultado de un combate.',
      },
      { type: 'heading', text: 'Primera línea' },
      {
        type: 'text',
        text: 'La primera línea suele estar formada por tanques y luchadores resistentes. Su función es absorber daño y permitir que las unidades ofensivas tengan tiempo para atacar.',
      },
      { type: 'heading', text: 'Retaguardia' },
      {
        type: 'text',
        text: 'La retaguardia normalmente contiene campeones de daño a distancia y unidades de apoyo. Deben mantenerse protegidos, aunque algunas habilidades enemigas pueden alcanzar directamente estas posiciones.',
      },
      { type: 'heading', text: 'Qué es un carry' },
      {
        type: 'text',
        text: 'Un carry es un campeón que concentra una parte importante del daño de tu composición. Generalmente recibe objetos prioritarios y necesita una posición que le permita atacar durante el mayor tiempo posible.',
      },

      { type: 'heading', text: 'Posicionamiento contra daño de área' },
      {
        type: 'text',
        text: 'Las habilidades de área pueden afectar a varios campeones simultáneamente. Separar las unidades reduce el riesgo de recibir daño múltiple, aunque algunas composiciones necesitan agruparse para aprovechar bonificaciones.',
      },
      { type: 'heading', text: 'Cómo adaptar tu formación' },
      {
        type: 'steps',
        title: 'Revisión del posicionamiento',
        items: [
          'Identifica tu tanque principal.',
          'Coloca las unidades resistentes donde puedan recibir los primeros ataques.',
          'Protege a los carries según su alcance.',
          'Observa la ubicación de los campeones enemigos.',
          'Modifica tu formación cuando detectes amenazas.',
        ],
      },
      {
        type: 'keyTip',
        text: 'No existe una formación perfecta para todas las partidas. El posicionamiento depende de las habilidades, los objetos y los rivales.',
      },
      {
        type: 'commonMistake',
        text: 'Colocar siempre al carry en la misma esquina puede hacerlo vulnerable frente a determinadas habilidades.',
      },
    ],
    quiz: [
      {
        question: '¿Cuál es la función principal de un tanque?',
        options: ['Generar oro', 'Absorber daño', 'Actualizar la tienda', 'Aumentar el nivel'],
        answer: 1,
        explanation: 'Los tanques protegen al equipo al recibir los ataques enemigos.',
      },
      {
        question: '¿Qué puede ayudar contra habilidades de daño de área?',
        options: [
          'Agrupar siempre todas las unidades',
          'Separar las unidades cuando convenga',
          'Vender los tanques',
          'No modificar el tablero',
        ],
        answer: 1,
        explanation: 'Separar las unidades puede reducir el número de campeones afectados.',
      },
      {
        question: '¿Por qué conviene revisar el tablero enemigo?',
        options: [
          'Para obtener oro',
          'Para adaptar tu posicionamiento',
          'Para cambiar sus objetos',
          'Para reducir su nivel',
        ],
        answer: 1,
        explanation: 'Observar al rival permite anticipar amenazas.',
      },
    ],
  },
  {
    id: 4,
    slug: 'campeones-rasgos-sinergias',
    level: 'beginner',
    orderInLevel: 4,
    title: 'Campeones, rasgos y sinergias',
    description: 'Descubre los costes, rasgos, bonificaciones y funciones de los campeones.',
    readingTime: 10,
    image: '/images/tutorials/rasgos.png',
    color: 'orange',
    content: [
      { type: 'heading', text: 'Qué son los campeones' },
      {
        type: 'text',
        text: 'Los campeones son las unidades utilizadas para construir tu equipo. Cada uno tiene estadísticas, habilidades, coste y rasgos que determinan su función dentro de una composición.',
      },
      { type: 'heading', text: 'Costes de los campeones' },
      {
        type: 'table',
        headers: ['Coste', 'Uso habitual'],
        rows: [
          ['1 de oro', 'Aperturas y estrategias reroll'],
          ['2 de oro', 'Composiciones económicas y unidades de apoyo'],
          ['3 de oro', 'Carries y tanques intermedios'],
          ['4 de oro', 'Unidades principales de composiciones Fast 8'],
          ['5 de oro', 'Unidades de coste elevado y habilidades especiales'],
        ],
      },
      { type: 'heading', text: 'Qué son los rasgos' },
      {
        type: 'text',
        text: 'Los rasgos son características compartidas por determinados campeones. Al reunir suficientes unidades diferentes con un mismo rasgo, se activan bonificaciones para el equipo o para los campeones relacionados.',
      },
      { type: 'heading', text: 'Cómo se activan las sinergias' },
      {
        type: 'steps',
        title: 'Ejemplo de activación',
        items: [
          'Compras un campeón que posee un rasgo determinado.',
          'Añades un segundo campeón diferente con el mismo rasgo.',
          'Si alcanzas el umbral requerido, se activa la bonificación.',
          'Incorporas más campeones compatibles para mejorar el efecto.',
          'Evalúas si la bonificación fortalece tu composición.',
        ],
      },
      { type: 'heading', text: 'Diferencia entre rasgo y composición' },
      {
        type: 'text',
        text: 'Un rasgo proporciona bonificaciones específicas. Una composición es el equipo completo de campeones, objetos y decisiones estratégicas. Una buena composición puede combinar diferentes rasgos para conseguir daño, resistencia y utilidad.',
      },
      { type: 'heading', text: 'Funciones de los campeones' },
      {
        type: 'list',
        items: [
          'Carry físico: utiliza principalmente daño de ataque.',
          'Carry mágico: aprovecha habilidades que escalan con poder de habilidad.',
          'Tanque: absorbe daño y protege al equipo.',
          'Control: utiliza habilidades que limitan las acciones enemigas.',
          'Apoyo: proporciona escudos, curación u otros beneficios.',
          'Unidad de utilidad: reduce resistencias o proporciona efectos especiales.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Una composición fuerte combina daño, resistencia y utilidad. Activar muchos rasgos no garantiza ganar.',
      },
      {
        type: 'commonMistake',
        text: 'Elegir campeones únicamente porque comparten un rasgo puede dejarte sin suficiente daño o resistencia.',
      },
    ],
    quiz: [
      {
        question: '¿Qué es un rasgo?',
        options: [
          'Un objeto',
          'Una característica compartida por campeones',
          'Un nivel de estrellas',
          'Una moneda',
        ],
        answer: 1,
        explanation: 'Los rasgos permiten activar bonificaciones al reunir unidades compatibles.',
      },
      {
        question: '¿Qué diferencia existe entre rasgo y composición?',
        options: [
          'Son iguales',
          'El rasgo otorga bonificaciones y la composición es el equipo completo',
          'Una composición solo utiliza unidades caras',
          'Los rasgos no influyen',
        ],
        answer: 1,
        explanation: 'La composición integra campeones, rasgos, objetos y estrategia.',
      },
      {
        question: '¿Qué necesita una composición equilibrada?',
        options: [
          'Solo campeones caros',
          'Un único rasgo',
          'Daño, resistencia y utilidad',
          'Ningún objeto',
        ],
        answer: 2,
        explanation: 'Las funciones complementarias permiten aprovechar mejor el equipo.',
      },
    ],
  },
  {
    id: 5,
    slug: 'objetos',
    level: 'beginner',
    orderInLevel: 5,
    title: 'Objetos',
    description: 'Aprende a combinar componentes y equipar correctamente a tus campeones.',
    readingTime: 10,
    image: '/images/tutorials/objetos.png',
    color: 'orange',
    content: [
      { type: 'heading', text: 'Qué son los objetos' },
      {
        type: 'text',
        text: 'Los objetos mejoran las estadísticas o proporcionan efectos especiales a los campeones. Una buena distribución de objetos puede aumentar considerablemente la fuerza de tu tablero.',
      },
      { type: 'heading', text: 'Componentes básicos' },
      {
        type: 'table',
        headers: ['Componente', 'Función principal'],
        rows: [
          ['Espadón', 'Daño de ataque'],
          ['Arco curvo', 'Velocidad de ataque'],
          ['Vara innecesariamente grande', 'Poder de habilidad'],
          ['Lágrima de la diosa', 'Maná'],
          ['Chaleco de cadenas', 'Armadura'],
          ['Capa negatrón', 'Resistencia mágica'],
          ['Cinturón de gigante', 'Vida'],
          ['Guantes de combate', 'Probabilidad de crítico y efectos relacionados'],
        ],
      },
      { type: 'heading', text: 'Cómo combinar objetos' },
      {
        type: 'steps',
        title: 'Crear un objeto completo',
        items: [
          'Obtén componentes mediante recompensas y rondas neutrales.',
          'Identifica qué campeón necesita una mejora.',
          'Consulta las combinaciones disponibles.',
          'Combina dos componentes para crear un objeto.',
          'Equipa el objeto al campeón que mejor aproveche su efecto.',
        ],
      },
      { type: 'heading', text: 'Objetos ofensivos' },
      {
        type: 'text',
        text: 'Los objetos ofensivos aumentan el daño de ataque, poder de habilidad, velocidad de ataque, daño crítico o frecuencia de lanzamiento de habilidades. Debes elegirlos según las estadísticas y habilidades de tu carry.',
      },
      { type: 'heading', text: 'Objetos defensivos' },
      {
        type: 'text',
        text: 'Los objetos defensivos aumentan la vida, armadura, resistencia mágica o capacidad de supervivencia. Suelen equiparse en tanques para permitir que el resto del equipo ataque durante más tiempo.',
      },
      { type: 'heading', text: 'Objetos de utilidad' },
      {
        type: 'text',
        text: 'Algunos objetos proporcionan efectos de apoyo, como reducción de resistencias, bonificaciones a aliados o debilitamiento de enemigos. Son especialmente útiles cuando complementan las necesidades de tu composición.',
      },
      { type: 'heading', text: 'Emblemas y objetos especiales' },
      {
        type: 'list',
        items: [
          'Emblemas: otorgan determinados rasgos a campeones.',
          'Objetos radiantes: versiones especiales y más poderosas de algunos objetos.',
          'Artefactos: proporcionan efectos particulares que pueden cambiar la función de una unidad.',
          'Objetos de apoyo: benefician a aliados mediante efectos especiales.',
        ],
      },
      {
        type: 'keyTip',
        text: 'No siempre necesitas el objeto perfecto. Fabricar un objeto útil puede ayudarte a ganar rondas y conservar vida.',
      },
      {
        type: 'commonMistake',
        text: 'Guardar todos los componentes esperando una combinación perfecta puede hacer que pierdas demasiada vida.',
      },
    ],
    quiz: [
      {
        question: '¿Cuántos componentes necesitas normalmente para crear un objeto completo?',
        options: ['1', '2', '3', '4'],
        answer: 1,
        explanation: 'La mayoría de objetos completos se crean combinando dos componentes.',
      },
      {
        question: '¿Qué unidades aprovechan habitualmente los objetos defensivos?',
        options: [
          'Los tanques',
          'Los campeones del banco',
          'Solo los carries',
          'Los campeones sin rasgos',
        ],
        answer: 0,
        explanation: 'Los tanques necesitan resistir ataques para proteger al equipo.',
      },
      {
        question: '¿Qué puede proporcionar un emblema?',
        options: [
          'Una actualización gratuita',
          'Un rasgo adicional',
          'Tres estrellas',
          'Experiencia',
        ],
        answer: 1,
        explanation: 'Los emblemas permiten otorgar determinados rasgos.',
      },
    ],
  },
  {
    id: 6,
    slug: 'subir-nivel-y-roll',
    level: 'beginner',
    orderInLevel: 6,
    title: 'Subir de nivel y hacer roll',
    description: 'Aprende cuándo invertir en experiencia y cuándo buscar campeones.',
    readingTime: 10,
    image: '/images/tutorials/roll.png',
    color: 'orange',
    content: [
      { type: 'heading', text: 'Qué significa subir de nivel' },
      {
        type: 'text',
        text: 'Subir de nivel aumenta normalmente la cantidad de campeones que puedes desplegar y modifica las probabilidades de encontrar unidades de distintos costes en la tienda.',
      },
      { type: 'heading', text: 'Cómo obtener experiencia' },
      {
        type: 'text',
        text: 'En el sistema tradicional recibes experiencia automáticamente entre rondas y puedes comprar experiencia adicional utilizando oro. Habitualmente cuatro de oro proporcionan cuatro puntos de experiencia, aunque algunas mecánicas pueden modificar esta regla.',
      },
      { type: 'heading', text: 'Qué significa hacer roll' },
      {
        type: 'text',
        text: 'Hacer roll significa actualizar la tienda para obtener cinco nuevas opciones de campeones. Normalmente cuesta dos de oro. Esta acción permite buscar unidades específicas y completar mejoras de estrellas.',
      },
      { type: 'heading', text: 'Probabilidades de tienda' },
      {
        type: 'text',
        text: 'Los niveles bajos favorecen las unidades económicas. Los niveles elevados permiten encontrar con mayor frecuencia campeones de coste cuatro y cinco. Los porcentajes exactos dependen de las reglas del conjunto.',
      },
      {
        type: 'table',
        headers: ['Nivel', 'Objetivo habitual'],
        rows: [
          ['4', 'Encontrar unidades económicas'],
          ['5', 'Buscar mejoras de bajo coste'],
          ['6', 'Encontrar unidades de coste dos y tres'],
          ['7', 'Estabilizar el tablero'],
          ['8', 'Buscar campeones de coste cuatro'],
          ['9', 'Encontrar unidades de coste elevado'],
          ['10', 'Ampliar el tablero y acceder a mejores probabilidades'],
        ],
      },
      { type: 'heading', text: 'Qué es reroll' },
      {
        type: 'text',
        text: 'Reroll es una estrategia centrada en conseguir suficientes copias de determinados campeones para mejorarlos a tres estrellas. Suele utilizarse con unidades de costes bajos o intermedios.',
      },
      { type: 'heading', text: 'Qué es slow roll' },
      {
        type: 'text',
        text: 'Slow roll consiste en acumular oro y utilizar principalmente el excedente para actualizar la tienda, intentando conservar los intereses.',
      },
      { type: 'heading', text: 'Qué es un rolldown' },
      {
        type: 'text',
        text: 'Un rolldown consiste en gastar una cantidad considerable de oro actualizando la tienda durante una misma fase de planificación. Su objetivo es encontrar rápidamente mejoras importantes.',
      },
      {
        type: 'steps',
        title: 'Cómo decidir entre subir de nivel y hacer roll',
        items: [
          'Identifica qué campeones necesita tu composición.',
          'Revisa el coste de tus unidades principales.',
          'Determina el nivel adecuado para encontrarlas.',
          'Evalúa tu vida y la fuerza de tu tablero.',
          'Decide si necesitas más espacio o mejorar tus campeones.',
        ],
      },
      {
        type: 'keyTip',
        text: 'Antes de gastar oro, identifica si necesitas más unidades en el tablero o mejorar las que ya tienes.',
      },
      {
        type: 'commonMistake',
        text: 'Actualizar la tienda sin un objetivo claro puede destruir tu economía.',
      },
    ],
    quiz: [
      {
        question: '¿Qué significa hacer roll?',
        options: ['Subir de nivel', 'Actualizar la tienda', 'Vender campeones', 'Cambiar objetos'],
        answer: 1,
        explanation: 'Hacer roll consiste en actualizar las opciones de campeones de la tienda.',
      },
      {
        question: '¿Cuál es el objetivo de slow roll?',
        options: [
          'Gastar todo inmediatamente',
          'Buscar mejoras conservando economía',
          'Subir siempre al máximo nivel',
          'Evitar comprar unidades',
        ],
        answer: 1,
        explanation: 'Slow roll permite buscar copias mientras intentas conservar el interés.',
      },
      {
        question: '¿Cuándo puede ser útil un rolldown?',
        options: [
          'Cuando necesitas estabilizarte',
          'Cuando no necesitas mejoras',
          'Cuando quieres reducir tu nivel',
          'Cuando quieres evitar comprar',
        ],
        answer: 0,
        explanation: 'Un rolldown permite encontrar rápidamente mejoras importantes.',
      },
    ],
  },
];
