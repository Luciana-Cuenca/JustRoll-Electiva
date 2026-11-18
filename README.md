# JUST ROLL — Angular
repositorio antiguo en React https://github.com/Luciana-Cuenca/JustRoll.git
Migración completa de la aplicación React a una aplicación Angular con TypeScript estricto. Conserva el contenido, las rutas, los estilos y los recursos del original.

## Ejecutar

```bash
npm install
npm start
```

Abrir `http://localhost:4200`. También se puede usar `npm run dev`.

```bash
npm run build        # Producción: dist/justroll-angular/browser
npm run typecheck    # Tipos de TypeScript
npm test             # Compilación AOT estricta + pruebas de integración del DOM
npm run test:reference # Comparación con ../JustRoll1 (requiere el React original)
```

Para comparar con el original ubicado en otra carpeta, definir `REACT_REFERENCE_DIR`. La comparación incluye todas las páginas y todos los detalles de composiciones, tutoriales y noticias, además de verificar que los CSS y archivos públicos sean idénticos. Estas pruebas no sustituyen una comparación de capturas en un navegador. La revisión visual en escritorio y móvil queda pendiente por las restricciones del entorno de ejecución.

## Arquitectura

Una única aplicación desplegable, organizada como monolito modular con componentes standalone y carga diferida por funcionalidad:

| Carpeta                         | Responsabilidad                                                    |
| ------------------------------- | ------------------------------------------------------------------ |
| `src/app/core/layout`           | Navegación y pie de página de la aplicación                        |
| `src/app/core/data`             | Datos tipados y servicios de consulta de cada catálogo             |
| `src/app/features/home`         | Inicio y sus cinco secciones                                       |
| `src/app/features/compositions` | Tier list, tarjetas, detalle, campeones, objetos y tablero         |
| `src/app/features/tutorials`    | Ruta de aprendizaje, lectura, bloques de contenido y cuestionarios |
| `src/app/features/news`         | Selector de set, artículos y panel de lectura                      |
| `src/app/shared/models`         | Contratos de datos sin dependencias de la interfaz                 |
| `src/app/shared/ui`             | Ciclo de vida de ventanas modales y utilidades de presentación     |
| `src/styles`                    | Hojas de estilo originales y su orden de cascada                   |
| `public`                        | Recursos públicos originales                                       |
| `tests`                         | Pruebas de interacción y comparación con React                     |

Los componentes de presentación reciben datos mediante inputs tipados y comunican acciones mediante outputs. Los servicios suministran los catálogos; ningún componente de una funcionalidad importa componentes de otra. Los estados de selección pertenecen a cada página. El cierre con Escape, bloqueo de scroll y restauración del foco están centralizados en una directiva reutilizable. `OnPush` limita las actualizaciones de la interfaz y los tableros se calculan cuando cambian sus entradas.

Las hojas CSS se mantienen globales para preservar exactamente la cascada existente. Los hosts de componentes usan `display: contents` para conservar la distribución. No se ha cambiado el diseño ni el contenido del juego. Las fuentes y las imágenes remotas conservan sus URLs originales y requieren conexión, igual que en React; los recursos ausentes mantienen sus alternativas originales.

## Rutas

| Ruta                  | Función                                     |
| --------------------- | ------------------------------------------- |
| `/`                   | Inicio                                      |
| `/composiciones`      | Composiciones por rango                     |
| `/composiciones?id=1` | Apertura directa de una composición         |
| `/tutoriales`         | Tutoriales y cuestionarios                  |
| `/noticias`           | Set actual                                  |
| `/noticias#set-19`    | Próximo set                                 |
| `/guias`              | Redirección a noticias, como en el original |
| Cualquier otra        | Página 404                                  |

En alojamiento de producción, configurar el servidor para devolver `index.html` en rutas de la aplicación. El build no requiere backend, microservicios ni React.

La caché persistente del CLI está desactivada para evitar un fallo del complemento nativo de caché con el Node instalado en este equipo. El build funciona con la configuración incluida.

El proyecto React original se utiliza únicamente como referencia externa para las pruebas de paridad. La aplicación Angular no depende de React para compilarse ni ejecutarse.

## Integración de las entregas

Las ramas 15 a 27 parten del mismo commit de `develop-refactor`. Cada rama contiene exclusivamente su entrega. Integrar los componentes 15–24, el arranque y las rutas 25, los recursos y las dependencias 26 y finalmente la documentación 27. La compilación completa requiere las entregas 15–26.

Después de integrarlas, ejecutar `npm ci`, `npm test` y `npm run typecheck`. La comparación con React se ejecuta con `REACT_REFERENCE_DIR=/ruta/al/original npm run test:reference` y requiere las dependencias instaladas en el proyecto original.
