## Proyecto Dataverse Disney-Pixar Movies, por Camila Carreño y Daniela Martinez

### Definición de Producto
Nuestro proyecto se llama “Dreamland” el cual se utiliza para mostrar 24 tarjetas de distintas películas de Disney y Pixar donde cada una de ellas muestra una breve descripción, año de estreno, género, puntuación en IMDb y duración. Estas se pueden ordenar según abecedario y épocas donde estas están divididas en los años 1990's, 2000’s, 2010’s, 2020’s. También tiene como datos curiosos el promedio de duración de las películas las cuales duran 96.5 minutos. Por otro lado el promedio de las calificaciones que son 7.6 según IMDb.

**Temática:** Películas Disney y Pixar

## Prototipo
Yo había ponido mi imagen aquí.

## Historias de usuarias
Estas son algunas de las preguntas que respondimos para cumplir los requerimientos del usuario:

*¿Quiénes son las principales usuarias del producto?
Adultos jóvenes que sean fanáticos de las películas de Disney y que quieran buscar una película con alguna enseñanza de fondo.
*¿Cuáles son los objetivos de estas usuarias en relación con el producto?
Obtener información de películas de manera rápida, dinámica y simple, todo en un mismo lugar.
*¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
- Nombre: búsqueda alfabéticamente, para aquellos que no recuerden bien el nombre de la película, pero sí cómo empieza. O para aquellos que quieren buscar información directamente por el nombre.
- Años: seleccionar películas según la época en que fueron creadas. 
Enseñanza: una clasificación para aquellos que no saben que ver específicamente, pero si quieren profundizar una temática en particular
- Ranking: buscar de acuerdo a la opinión pública.
*¿Cuándo utilizan o utilizarían el producto?
Para tener más información de las películas que les gustan cómo la duración, las reseñas y algunas curiosidades.

## Opiniones de posibles usuarias
Antes de iniciar nuestro proyecto, realizamos algunas preguntas a posibles usuarias. Estas fueron algunas respuestas a la pregunta ¿qué te gustaría saber de las películas de Disney y Pixar? 

**Fatima:** información sobre la película, la duración para ver si puedo realizar una maratón o no, el género de la película. Usaría la página para buscar esa información.

**Pamela:** buscar información de una película como: sinopsis, qué género es, personalmente me gusta mucho los musicales y me gustaría que en la página hubiera esa opción porque normalmente solo ponen como género acción, romance, fantasía, etc, pero nunca si es musical o no. También datitos curiosos de la creación de la película, me gusta ver el proceso creativo o como es que surgió la idea

**Barbara:** lo que casi nunca veo son curiosidades de los personajes, por ejemplo de la película Luca.

## PROMPT
Al momento de identificar la información necesaria para crear nuestra página web, realizamos la redacción de nuestro prompting para poder generar la data en con Chat GPT. Nuestro Prompt redactado es el siguiente: 

*“Eres una persona que le gustan mucho las películas de Disney y Pixar desde pequeño y deseas buscar información de las películas que te gustan para aumentar el conocimiento de ellas.
Genera una reseña de la película “Elemental” que sea breve para que pueda ser compartida de manera informativa en una página web. Debe incluir los siguientes datos: una descripción breve de la película, una descripción larga, año de estreno, duración en minutos, clasificación de qué género es, clasificación del público y una clasificación de enseñanza que entrega pero definida en una palabra y un dato curioso.                                                
Utiliza un lenguaje informativo, cordial y motivador pero que no sea tan extenso.”*

IMAGENES DEL PROMPTING EN CHAT GPT PONER AQUÍ

## Filtrado, orden y datos estadísticos 

Al momento de organizar qué filtrado podríamos realizar, decidimos realizarlo por años. Pero al momento de observar nuestros datos, nos percatamos que había años que no se repetían, o sólo habían dos películas por año, es por eso que, para no realizar un filtrado que visualmente se viera largo, decimos agruparlas por épocas. 

Ejemplo de cómo organizamos las películas para el filtrado:  

**Películas 90´s:** 1995, 1998, 1993, 1999, 1997.
**Películas 2000´s:** 2009, 2007, 2008, 2004, 2002, 2001, 2002, 2009.
**Películas 2010´s:** 2017, 2016, 2015, 2014, 2013, 2010.
**Películas 2020´s:** 2023, 2022, 2020, 2021.

Y al momento de ordenar nuestras películas, decidimos realizar un orden ascendente y descendente de la data. En nuestro caso, la primera película sería Atlantis y la última es Wall-e. 

En cuanto a los datos estadísticos, como era una necesidad de las usuarias saber el tiempo de duración, se realizó el promedio de duración de las películas de Disney y Pixar, cómo también se calculó el promedio de la evaluación del público de las películas de la data.

 

 



