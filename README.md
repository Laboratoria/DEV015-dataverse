# PokéData Project Documentation

## Índice

* [1. INTRODUCCIÓN](#1-introducción)
* [2. RESUMEN](#2-resumen)
* [3. PROMPT UTILIZADO](#3-prompt-utilizado)
* [4. PROTOTIPO DE BAJA Y ALTA FIDELIDAD](#4-prototipo-de-baja-y-alta-fidelidad)
* [5. HISTORIAS DE USUARIO](#5-historias-de-usuario)
* [6. FUNCIONALIDADES](#6-funcionalidades)
* [7. CONSIDERACIONES TÉCNICAS](#7-consideraciones-técnicas)
* [8. PRUEBAS UNITARIAS](#8-pruebas-unitarias)
* [9. DEPLOY](#9-deploy)
* [10. CRITERIOS DE ACEPTACIÓN MÍNIMOS DEL PROYECTO](#10-criterios-de-aceptación-mínimos-del-proyecto)
* [11. DESARROLLADOR DEL PROYECTO](#11-desarrollador-del-proyecto)

***

## 1. INTRODUCCIÓN 

En este proyecto, nos sumergimos en el mundo de la inteligencia artificial para generar un conjunto de datos único. La magia se revela a través de una renderización en HTML mediante JavaScript, creando una experiencia visual cautivadora. Este conjunto de datos, presentado de manera accesible, adopta la forma de tarjetas de información y se presta a una exploración profunda gracias a filtros interactivos y acumulativos.

La interacción del usuario se potencia con herramientas estadísticas que brindan una comprensión más profunda de la información disponible. Cada tarjeta es una ventana a datos precisos, mientras que los filtros, diseñados para ser intuitivos, permiten una personalización dinámica de la visualización. En este viaje, fusionamos la potencia de la inteligencia artificial con la flexibilidad de la renderización web, ofreciendo una plataforma que no solo informa, sino que también invita a la exploración y descubrimiento. 

## 2. RESUMEN

<img width="920" alt="image" src="https://github.com/user-attachments/assets/beb79316-a0d0-4302-ae82-f1c72d777fb4">


En este proyecto, desarrollamos una página web para explorar un conjunto de datos creado mediante la inteligencia artificial a través de instrucciones específicas. La estructura de la página se ajustó considerando las necesidades de los usuarios, utilizando historias de usuario para su adaptación.

La interfaz consta de diversos filtros que permiten refinar, agrupar y organizar el conjunto de datos, presentando un conjunto de tarjetas con información detallada sobre el tema. Además, se incorporó un botón que posibilita "limpiar" cada campo y regresar a la visualización predeterminada de datos (inicio).

Dado que utilizamos distintos dispositivos en la actualidad, implementamos consultas de medios mediante CSS en la aplicación para asegurar una visualización óptima tanto en dispositivos móviles como en computadoras, facilitando el acceso a la información.

## 3. PROMPT UTILIZADO

En esta ocasión, nos hemos apoyado en la inteligencia artificial para generar nuestra propia base de datos. Decidimos crear una página dedicada a tarjetas de Pokemon. Los datos que solicitamos para construir nuestro conjunto de datos son los siguientes:
<img width="471" alt="image" src="https://github.com/Dynah1970/DEV015-dataverse/assets/169708716/1387069d-a4f8-4777-93b5-449524435fa9">
1. ID:
2. Nombre:
3. ELEMENTO:
4. GENERACION:
5. REGION:
6. NUMERO:
7. RAREZA:
8. PEQUEÑA DESCRIPCION:
9. DESCRIPCION:
10. DEBILIDAD:
11. ATAQUE:
12. DEFENSA:
13. VELOCIDAD:
14. DATOS CURIOSOS:
15. NUMERO:
16. HABILIDAD:
17. COLOR PRINCIPAL:

El total de Pokemones en nuestro dataset es de 24.

## 4. PROTOTIPO DE BAJA Y ALTA FIDELIDAD

Esta aplicación web ha sido construida a partir de dos tipos de prototipos: uno de baja fidelidad y otro de alta fidelidad. Ambos prototipos han sido cuidadosamente diseñados para incorporar requisitos esenciales, garantizando así una plataforma fácil de utilizar para cualquier usuario.

### Prototipo de baja fidelidad

Se comenzó el diseño con un boceto rápido a mano para la interfaz de usuario. En esta fase, el enfoque se centra en la disposición general de los elementos en la página. Se identificaron los elementos esenciales que se quería incorporar en la interfaz, como las tarjetas, filtros e información. Este enfoque manual permite experimentar con varias ideas y conceptos antes de avanzar a etapas más detalladas del diseño.


<img width="275" alt="image" src="https://github.com/Dynah1970/DEV015-dataverse/assets/169708716/d8d0f89f-abdf-4be6-9843-8cf01395fb31">


### Prototipo de alta fidelidad

El prototipo de alta fidelidad fue diseñado utilizando la aplicación CANVA. En este proceso, se establecieron elementos clave, como la paleta de colores, el estilo visual y el funcionamiento inicial. Este prototipo de alta fidelidad sirve como una representación avanzada y detallada de la visión conceptual.

<img width="512" alt="image" src="https://github.com/Dynah1970/DEV015-dataverse/assets/169708716/0f047e5a-3d6e-4f1b-b25c-c0356360b527">


## 5. HISTORIAS DE USUARIO

En el desarrollo de las historias de usuario, se ha seguido un enfoque centrado en el visitante, incorporando una serie de preguntas que consideran las necesidades y expectativas del navegante final. Estas preguntas han sido fundamentales para estructurar un proceso lógico e intuitivo dentro de la aplicación web.

A partir de las respuestas recopiladas, se ha implementado un plan de trabajo que ha permitido establecer objetivos claros. Este enfoque ha sido esencial para diseñar una serie de prototipos que aborden de manera específica las necesidades planteadas en las historias de usuario. Este proceso orientado al usuario ha sido clave para asegurar que la aplicación no solo cumpla con los requisitos técnicos, sino que también ofrezca una experiencia satisfactoria y efectiva para el visitante final.

<img width="488" alt="image" src="https://github.com/Dynah1970/DEV015-dataverse/assets/169708716/23af91a8-0455-478a-9cd3-50823a8fa338">


Para consultar las siguientes historias de usuario, puedes entrar a este enlace.https://docs.google.com/document/d/1-8Qg1iZ3A9PAYPs_Uav1GLNPVLmEqdMVvFYjQuiYPTw/edit?usp=sharing

## 6. FUNCIONALIDADES

### Características principales de las Tarjetas Pokémon

- Visualización dinámica y atractiva de tarjetas Pokémon en formato semántico `<div>`.
- Resalta nombre, elemento, generación, número, rareza, pequeña descripción, descripción, debilidad, ataque, defensa, velocidad, datos curiosos, habilidad, color principal.
- Filtrado y ordenamiento por elementos, debilidad, características, y alfabéticamente.
- Interfaz semántica con microdatos (`itemscope`, `itemtype`, `itemprop`).
- Estadísticas dinámicas sobre cantidad y tipos de Pokémon.
- Controles `<select>` para filtros y botón de reinicio.
- Operaciones acumulativas de filtrado y ordenamiento.
- Funcionalidad "Leer más" para revelar información adicional.
- Diseño adaptable para móviles, tablets y desktops.

## 7. CONSIDERACIONES TÉCNICAS

La aplicación web está compuesta por varios tipos de archivos, incluyendo aquellos escritos en los lenguajes HTML, JavaScript (JS) y CSS:

- `src/index.html`
- `src/main.js`
- `dataset.js`
- `src/dataFunctions.js` (incluye la función `computeStats(data)`)
- `src/data`
- `test/dataFunctions.spec.js`
- `test/data.js`
- `src/view.js` (incluye la función `renderItems(data)`)

## 8. PRUEBAS UNITARIAS 

A lo largo del proyecto, hemos implementado un total de 10 pruebas unitarias que evalúan el funcionamiento de los filtros de Género, Punto de Vista (POV) y los ordenamientos ascendente y descendente. Estas pruebas unitarias han sido diseñadas para garantizar la integridad y precisión de estas funcionalidades dentro de la aplicación. Estas pruebas se ejecutan utilizando el comando `npm run test`.

## 9. DEPLOY

La aplicación se encuentra publicada a través de Github Pages, accesible a todo usuario.
https://dynah1970.github.io/DEV015-dataverse/

## 10. CRITERIOS DE ACEPTACIÓN MÍNIMOS DEL PROYECTO

### Criterios de código

La aplicación debió aprobar los siguientes test para considerarse como un buen proyecto a nivel estructural:

- `npm run test:oas-html`
- `npm run test:oas-css`
- `npm run test:oas-web-api`
- `npm run test:oas-js`
- `npm run test:oas-prompting`
- `npm run test:oas`

#### HTML
- **Uso de HTML semántico**
  - Tiene un `<header>` con un logotipo de Pokémon y un título principal `<h1>`.
  - Tiene un `<footer>` con un párrafo que menciona a los desarrolladores del programa.
  - Tiene un `<main>` que contiene secciones de controles (entradas y selecciones) para filtrar y ordenar los Pokémon.
  - Todas las etiquetas de controles (`<select>`) tienen `<label>`.
  - `<ul>` está usado para mostrar los datos de los Pokémon.
  - Los hijos de `<li>` usan atributos de microdatos `itemscope` e `itemprop`.


#### CSS

**Uso de selectores de CSS**
  - Uso de selector class para los items `<li>`.
  - Uso de flexbox en sentido row y column.
  - Uso de flexbox para el elemento que contiene los items.
  - Uso de flexbox para el elemento que contiene los UI inputs.

#### Web APIs

- Uso de selectores del DOM.
- Manejo de eventos del DOM (listeners, propagación, delegación).
- Manipulación dinámica del DOM.

#### JavaScript

- Variables (declaración, asignación, ámbito).
- Uso de condicionales (`if-else`, `switch`, operador ternario, lógica booleana).
- Funciones (params, args, return).
- Arrays (arreglos).
- Objetos.
- Módulos de ECMAScript (ES Modules).

## 11. DESARROLLADOR DEL PROYECTO

Información sobre Las desarrolladoras del proyecto:




<img width="313" alt="image" src="https://github.com/Dynah1970/DEV015-dataverse/assets/169708716/3b82117e-48b3-4ab6-aac9-96f5721e5f7c">

- Daniela Trejo

- <img width="279" alt="image" src="https://github.com/Dynah1970/DEV015-dataverse/assets/169708716/0dde3785-a9fa-40dd-ab95-d97b3c11cf80">

- Dinah Gomez






 
