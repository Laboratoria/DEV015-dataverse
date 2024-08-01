# Dataverse

**Dataverse** es una aplicación web que permite visualizar, filtrar, ordenar y calcular estadísticas sobre personajes ficticios de la serie *Los Bridgerton*. La aplicación ofrece una interfaz amigable para explorar los datos y obtener información detallada sobre cada personaje.

## Descripcion del Proyecto

1. Decidimos un tema inicial, que era Crepúsculo.
2. Creamos un primer prototipo en papel.
3. Buscamos Historias de Usuarias relacionadas con Crepúsculo, pero no conseguimos suficiente información. 
4. Decidimos cambiar el tema a Los Bridgerton.
5. Comenzamos a recolectar Historias de Usuarias sobre Los Bridgerton.
6. Basándonos en las Historias de Usuarias, investigamos sobre cómo hacer prompts para la IA.
7. Realizamos prompts en ChatGPT para obtener información sobre los personajes.
8. Investigamos sobre el diseño de interfaz para la aplicación.
9. Creamos un prototipo en Figma siguiendo las mejores prácticas de diseño de interfaz.
10. Buscamos imágenes de los personajes y las guardamos en la página de Postimage.
11. Creamos varios fondos con Bing, pero ninguno cumplió con nuestras expectativas, así que usamos algo creado en Canvas.
12. Comenzamos a codificar en HTML y CSS.
13. Investigamos sobre microdatos, incluyendo los atributos itemscope, itemtype y itemprop.
14. Creamos el set de datos con la información de los personajes.
15. Implementamos la visualización de los datos.
16. Investigamos sobre Flexbox y lo aplicamos en el CSS.
17. Realizamos pruebas unitarias y corregimos los errores encontrados.
18. Implementamos la función de filtrado.
19. Implementamos la función de ordenamiento.
20. Ajustamos el filtrado y el ordenamiento para que funcionaran conjuntamente, solicitando ayuda cuando fue necesario.
21. Implementamos el cálculo de estadísticas.
22. Concluimos el cálculo de estadísticas y comenzamos a redactar el README.
23. Añadimos las imágenes correspondientes al prototipo y los prompts utilizados.

## Índice

- [Historias de Usuarias](#historias-de-usuarias)
- [Prompt utilizados en la IA chatGPT](#prompt-utilizados-en-la-IA-chatGPT)
- [Prototipo Figma](#prototipo-figma)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Historias de Usuarias

1. Historia de Usuaria 1: "Quiero una pagina donde pueda ver las fotos de los personajes con su nombre para poder imaginarlos cuando leo el libro."
2. Historia de Usuaria 2: "Quiero saber la edad de los personajes de la serie." 
3. Historia de Usuaria 3: "Quiero saber quienes estan casados, quienes son viudos, solteros y cuales son amantes de los personajes."
4. Historia de Usuaria 4: "Me gustaria saber las diferencias entre el libro y la serie de Netflix."

## Promt utilizados en la IA chatGPT

"Eres una persona que ha visto la serie Bridgerton y se ha obsesionado con ella, lo que ha hecho que quieras leer los libros y saber cuales son las diferencias entre el libro y la serie.

Escribe un resumen de los 24 personajes principales donde pueda ver las diferencias entre el libro y la serie
El mensaje debe destacar las principales diferencias enbtre el libro y la serie de Netflix.

Utiliza un lenguaje parecido al de lady Whistlendown."

## Prototipo Figma

El prototipo para la página web de visualización de datos fue creado en Figma y muestra el diseño y la estructura de la interfaz de usuario. Puedes ver el prototipo completo en el siguiente enlace:

[Prototipo en Figma](https://www.figma.com/design/pW3dCEYwhMX7fJ3fE2odf0/Untitled)

## Tecnologías Usadas

- **HTML5**: Estructuración del contenido web.
- **CSS3**: Estilización de la página.
- **JavaScript**: Lógica de la aplicación.
- **Google Fonts**: Tipografías personalizadas.

## Características

- Filtrado de personajes por familia.
- Ordenamiento de personajes por nombre.
- Cálculo y visualización de estadísticas sobre el estado sentimental de los personajes.
- Interfaz interactiva con botones y formularios.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/Maye85/dataverse.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd dataverse
    ```

3. Abre el archivo `index.html` en tu navegador para ver la aplicación en acción.

## Uso

1. **Filtrar Personajes**: Usa el menú desplegable "Filtrar por familia" para seleccionar una familia y ver solo los personajes de esa familia.
2. **Ordenar Personajes**: Usa el menú desplegable "Ordenar por nombre" para ordenar los personajes filtrados por nombre, ya sea de forma ascendente o descendente.
3. **Calcular Estadísticas**: Haz clic en el botón "Calcular Estadísticas" para ver un resumen de las estadísticas sentimentales de todos los personajes.

## Estructura del Proyecto

- **`index.html`**: Página principal que estructura la aplicación.
- **`style.css`**: Archivo de estilos que define la apariencia de la aplicación.
- **`src/main.js`**: Archivo principal de JavaScript que inicializa la aplicación y maneja los eventos.
- **`src/dataFunctions.js`**: Contiene funciones para filtrar, ordenar y calcular estadísticas.
- **`src/view.js`**: Contiene la función para renderizar los personajes en la interfaz.
- **`data/dataset.js`**: Archivo con los datos de los personajes.

### Ejemplos de Código

**`src/main.js`**:
```javascript
import {characters} from './data/dataset.js';
import { renderItems } from './view.js';
import { calcularEstadisticas, getCharacters, filterCharactersByFamily, sortCharactersByName } from './dataFunctions.js';

function init() {
  // Inicialización de la aplicación y configuración de eventos.
}

document.addEventListener('DOMContentLoaded', init);