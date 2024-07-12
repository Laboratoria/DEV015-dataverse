# Dataverse - Spiderverse

## Índice

* [1. Definición del Producto](#1-Deficicion-del-producto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Promp para Generar los datos](#4-promp-para-generar-los-datos)
* [5. Diseño de la Interfaz de Usuario](#5-diseño-de-la-interfaz-de-usuario)
* [6. Test de Usabilidad](#6-test-de-usabilidad)
***

## 1. Definición del Producto

La página web generada con HTLM, CSS y JavaScript, *Spiderman Across The Spiderverse* muestra 24 tarjetas se los personajes más relevantes del Spiderverse. Donde los usuarios pueden ver información relevante de personajes del multiverso de Spiderman conocidos como Spider-Society o Spider-People, que son los diferentes Spiderman de cada universo alterno. 

## 2. Funcionalidades

  - **Filtrar**:  la página posee un botón desplegable que da las opciones de filtrar por género y por grupo de edad. 

  - **Ordenar**: la página posee un botón desplegable que permite ordenar por nombre de manera alfabéticamente ascendente y descendente. 

  - **Botón Datos curiosos**: muestra estadísticas sobre los personajes mostrados. 
  
  - **Botón de Limpiar**:  limpia los filtros devuelve la página a su forma original. 

  - **Responsive**:  la página puede ser utilizada en diferentes tamaños de pantallas y dispositivos. 

## 3. Historias de Usuario

#### Sprint 1 
Para generar la data elegimos un tema.
  -Escribir un prompt para que la IA nos genere la data de acuerdo al tema escogido.
  -Testear la data generada por la IA para confirmar que cumpla los requisitos.
  -Editar el prompt según errores arrojados por el test y repetir.
  -Realizar prototipo de baja fidelidad.

#### Sprint 2 
Como usuari@s necesitamos que la data se visualice como tarjetas en la página web y que estas tarjetas se adecuen a cualquier tamaño de dispositivo.

#### Sprint 3 
L@s usuari@s necesitamos poder filtrar los datos por género y por edad; y ordenar los datos por orden alfabético por los nombres de los personajes de manera ascendente o descendente.

#### Sprint 4 
L@s usuari@s necesitan ver estadísticas (*Datos Curuisos*) sobre la personajes, para esto se necesita diseñar el prototipo de alta fidelidad donde se muestre un botón que tenga la función de mostrar y esconder las estadísticas indicadas.

## 4. Promp para generar los datos

Utilizamos ChatGPT para generar los datos que usaremos con el siguient promp el cual editamos y fuimos mejorando segun las pruebas arrojadas por los test.
![promp spiderverse](https://res.cloudinary.com/db3qclbrk/image/upload/v1719523450/image_pckjlm.png)

## 5. Diseño de la Interfaz de usuario

Realizamos el prototipo de alta fidelidad en base a las historias de usuarias y lo mejoramos de acuerdo al feedback recibido.
![prototipo para movil](https://res.cloudinary.com/db3qclbrk/image/upload/v1719523450/image_1_zha5xj.png)

![prototipo para pc](https://res.cloudinary.com/db3qclbrk/image/upload/v1719523563/image_2_tcqh3a.png)

## 6. Test de Usabilidad

  - En dispositivos móviles la barra de navegación se veía muy pequeña y no se podía ver el texto. 
  **Solución**: Modificarla y crear un menú hamburguesa que se despliegue cuando el usuario lo necesite. 

  - El texto “Reset” del botón limpiar llegaba a confundir a los usuarios. 
  **Solución**: Modificar el texto “Reset” por “Limpiar” .

  - El botón “Reset” al presionarlo limpiaba la data y la volvía a la forma original, pero al ser usado nuevamente tomaba el ultimo filtro. 
  **Solución**: En el código colocamos una línea para limpiar la data filtrada almacenada que se mantenía en el botón de ordenar. 

***Equipo de Trabajo***
[Anyerlin Rodriguez](https://github.com/Angiers18/DEV015-dataverse)
[Fernanda Castillo](https://github.com/fe-ercg)