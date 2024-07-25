/* eslint-disable no-unused-vars */
export function renderItems(pokemonList) { /* toma un argumento pokemonList. Este argumento es esperado para ser una lista de objetos */
  const pokemonListElement = document.getElementById("pokemon-list"); /* Selecciona el elemento HTML con el id pokemon-list, que es un contenedor <ul> para los elementos de la lista de Pokémon.*/
  pokemonListElement.innerHTML = ""; /*Limpia el contenido HTML del contenedor para asegurarse de que los elementos antiguos sean eliminados antes de agregar nuevos elementos.*/

  pokemonList.forEach((pokemon) => {  /*Itera sobre cada objeto Pokémon en la lista pokemonList.*/
    const li = document.createElement("li"); /*Crea un nuevo elemento <li> que representará un Pokémon en la lista.*/
    li.setAttribute("itemscope", "true"); // Establece el atributo itemscope en "true" para indicar que este <li> es un contenedor para datos estructurados.

    li.setAttribute("itemtype", "http://schema.org/ItemPokemon"); // Establece el atributo itemtype para definir el tipo de datos estructurados como "ItemPokemon" según Schema.org.

    const imageUrl = pokemon.imageUrl // Declara una constante llamada imageUrl y asigna su valor basado en si pokemon.imageUrl existe o no.
      ? `<img src="${pokemon.imageUrl}" alt="${pokemon.name}" itemprop="imageUrl">`
      : ""; // Si pokemon.imageUrl tiene un valor, crea una cadena HTML para una etiqueta <img> con la URL de la imagen y el nombre del Pokémon como texto alternativo. También incluye un atributo itemprop para datos estructurados.
    const name = pokemon.name ? `<h3 itemprop="name">${pokemon.name}</h3>` : ""; // Declara una constante llamada name y asigna su valor basado en si pokemon.name existe o no.
    const type = pokemon.type // Declara una constante llamada type y asigna su valor basado en si pokemon.type existe o no.
      ? `<p><strong>ELEMENTO:</strong> ${pokemon.type}</p>`// Si pokemon.type tiene un valor, crea una cadena HTML para una etiqueta <p> que muestra el tipo del Pokémon, precedido por el texto "ELEMENTO:" en negrita.
      : ""; // Si pokemon.imageUrl no tiene un valor, asigna una cadena vacía a la constante imageUrl, lo que significa que no se mostrará ninguna etiqueta <img>.
    const generation = pokemon.generation
      ? `<p><strong>GENERACION:</strong> ${pokemon.generation}</p>`
      : "";
    const region = pokemon.region
      ? `<p><strong>REGION:</strong> ${pokemon.region}</p>`
      : "";
    const number = pokemon.number
      ? `<p><strong>NUMERO:</strong> ${pokemon.number}</p>`
      : "";
    const rarity = pokemon.rarity
      ? `<p><strong>RAREZA:</strong> ${pokemon.rarity}</p>`
      : "";
    const shortDescription = pokemon.shortDescription
      ? `<p><strong>PEQUEÑA DESCRIPCION:</strong> ${pokemon.shortDescription}</p>`
      : "";
    /*Inserta contenido HTML dinámicamente en el elemento del DOM especificado por `element`.*/
    /*Como resultado, el contenido del elemento en la página web se actualiza para reflejar el nuevo HTML proporcionado.*/
    li.innerHTML = ` 
               <div class="pokemon-card">
            <div class="card-inner">
          <div class="card-front">
            ${imageUrl}
            ${name}
            ${type}
            ${generation}
            ${region}
            ${number}
            ${rarity}
            ${shortDescription}
            <button class="flip-btn">Leer más</button>
          </div>
          <div class="card-back hidden">
            <p><strong>DESCRIPCION:</strong> ${pokemon.description}</p>
            <p><strong>DEBILIDAD:</strong> ${pokemon.weakness}</p>
            <p><strong>ATAQUE:</strong> ${pokemon.attack}</p>
            <p><strong>DEFENSA:</strong> ${pokemon.defense}</p>
            <p><strong>VELOCIDAD:</strong> ${pokemon.speed}</p>
            <p><strong>DATOS CURIOSOS:</strong></p>
            <p><strong>POKEDEX NUMERO:</strong> ${pokemon.facts.pokedexNumber}</p>
            <p><strong>HABILIDAD:</strong> ${pokemon.facts.ability}</p>
            <p><strong>COLOR PRINCIPAL:</strong> ${pokemon.facts.primaryColor}</p>
            <button class="flip-btn">Leer menos</button>
          </div>
        </div>
      </div>
    `;

    // Event listener para mostrar detalles al hacer clic en "Leer más"
    const flipBtns = li.querySelectorAll(".flip-btn"); // Esta línea busca todos los elementos dentro del elemento li que tienen la clase flip-btn y los almacena en la constante flipBtns.`
    flipBtns.forEach((btn) => { // Recorre cada botón en la lista `flipBtns`
      btn.addEventListener("click", () => { // Añade una acción para cuando al boton le den click

        const cardInner = btn.closest(".card-inner"); // Encuentra el elemento más cercano con la clase "card-inner" que contiene el botón clickeado
        cardInner.classList.toggle("flip"); // Alterna la clase "flip" en el elemento `cardInner`
        // Esto mostrará u ocultará la parte trasera de la tarjeta

        const cardFront = cardInner.querySelector(".card-front"); // Busca el elemento con la clase "card-front" dentro de `cardInner` y guárdalo en la variable `cardFront`
        const cardBack = cardInner.querySelector(".card-back");// Busca el elemento con la clase "card-back" dentro de `cardInner` y guárdalo en la variable `cardBack`

        if (cardInner.classList.contains("flip")) { // Verifica si `cardInner` tiene la clase "flip"
          cardBack.classList.remove("hidden"); // Si tiene la clase "flip", quita la clase "hidden" de `cardBack` para mostrar la parte trasera de la tarjeta
          cardFront.classList.add("hidden");// También agrega la clase "hidden" a `cardFront` para ocultar la parte delantera de la tarjeta
        } else {
          cardBack.classList.add("hidden");// Si no tiene la clase "flip", agrega la clase "hidden" a `cardBack` para ocultar la parte trasera de la tarjeta
          cardFront.classList.remove("hidden");// También quita la clase "hidden" de `cardFront` para mostrar la parte delantera de la tarjeta
        }
      });
    });

    pokemonListElement.appendChild(li); // Agrega el elemento <li> (que representa un Pokémon) al contenedor de la lista de Pokémon
  });

  return pokemonListElement;  // Devuelve el elemento que contiene la lista
}



// Modificación de renderDOM
function renderDOM(pokemonList) { 
  // Selecciona el elemento del DOM con id 'root' donde se añadirá el contenido
  const rootElement = document.querySelector('#root');
  // Llama a la función renderItems para obtener los elementos HTML de la lista de Pokémon
  const items = renderItems(pokemonList);
  // Verifica si el resultado de renderItems es un HTMLElement
  if (items instanceof HTMLElement) {
    // Si es un HTMLElement, lo agrega como un hijo del elemento 'root'
    rootElement.appendChild(items);

  } else {
    // Si no es un HTMLElement, lanza un error indicando que renderItems debería retornar un HTMLElement
    throw new Error('Error: renderItems should return an HTMLElement');
  }
}


function calculateAverageSpeed(pokemonList) {
  // Calcula la velocidad total sumando las velocidades de todos los Pokémon en la lista
  const totalSpeed = pokemonList

    .map(pokemon => pokemon.speed) // Crea un array con las velocidades de los Pokémon
    .reduce((acc, speed) => acc + speed, 0); // Suma todas las velocidades del array
  return (totalSpeed / pokemonList.length).toFixed(2); // Calcula el promedio de velocidad dividiendo la velocidad total por la cantidad de Pokémon, y lo redondea a 2 decimales
}


// Llamada a renderDOM cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Define la lista de Pokémon que se usará para renderizar los elementos
  const pokemonList = [ /* Aquí va tu lista de Pokémon */ ];
  // Llama a renderDOM para agregar los elementos de Pokémon al DOM
  renderDOM(pokemonList);
});
