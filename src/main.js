import data from "./data/dataset.js";
import { renderItems } from "./view.js";
import {
  filterPokemonByElemental,
  filterPokemonByWeakness,
  filterPokemonByOrder,
  filterPokemonByWord,
  clearFiltersAndSort,
} from "./dataFunctions.js";

//  función para calcular el promedio de velocidad nos costo trabajo
function calculateAverageSpeed(pokemonList) {
  // Calcula la suma total de las velocidades de todos los Pokémon en la lista
  const totalSpeed = pokemonList 
    .map(pokemon => pokemon.speed)  // Crea un nuevo array con las velocidades de cada Pokémon
    .reduce((acc, speed) => acc + speed, 0); // Suma todas las velocidades en el array
  return (totalSpeed / pokemonList.length).toFixed(2); // Calcula el promedio dividiendo la suma total por el número de Pokémon y lo redondea a dos decimales
}

document.addEventListener("DOMContentLoaded", () => {
  function initializeApp() {  // Función para inicializar la aplicación
    renderItems(data); // Renderiza los elementos iniciales usando los datos

    // Calcular y mostrar el promedio de velocidad
    const averageSpeed = calculateAverageSpeed(data);
    document.getElementById("average-speed").textContent = `Promedio de Velocidad: ${averageSpeed}`;

  }

  // Evento de cambio en el filtro de elementos
  function handleElementalChange() { // Obtiene el valor seleccionado del filtro de elementos
    const elementalValue = document.querySelector("#elemental").value;
    // Filtra los Pokémon por el tipo de elemento seleccionado
    const elementalPokemon = filterPokemonByElemental(data, elementalValue);
    // Renderiza los Pokémon filtrados en la vista
    renderItems(elementalPokemon);

    // Actualizar promedio de velocidad
    const averageSpeed = calculateAverageSpeed(elementalPokemon);
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
  }

  // Evento de cambio en el filtro de debilidad
  function handleWeaknessChange() {
    // Obtiene el valor seleccionado del filtro de debilidad
    const weaknessValue = document.querySelector("#weakness").value;
    // Filtra los Pokémon por la debilidad seleccionada
    const weaknessPokemon = filterPokemonByWeakness(data, weaknessValue);
    // Renderiza los Pokémon filtrados en la vista
    renderItems(weaknessPokemon);

    // Actualizar promedio de velocidad
    const averageSpeed = calculateAverageSpeed(weaknessPokemon);
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`; // Actualiza el contenido del elemento con id "average-speed" para mostrar el promedio de velocidad calculado
  }

  // Evento de cambio en la selección de ordenamiento
  function handleOrderChange() {
    // Obtiene el valor seleccionado en el menú desplegable de ordenamiento
    const orderValue = document.querySelector("#order").value;
    // Filtra y ordena los Pokémon según el valor seleccionado
    const orderPokemon = filterPokemonByOrder(data, orderValue);
    // Renderiza los Pokémon ordenados en el DOM
    renderItems(orderPokemon);

    // Calcula el promedio de velocidad de los Pokémon ordenados
    const averageSpeed = calculateAverageSpeed(orderPokemon);
    // Actualiza el contenido del elemento con id "average-speed" para mostrar el nuevo promedio de velocidad
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
  }

  // Evento de cambio en la selección de palabra
  function handleWordChange() {
    // Obtiene el valor seleccionado en el menú desplegable de palabras
    const wordValue = document.querySelector("#word").value;
    // Filtra los Pokémon por la palabra seleccionada
    const wordPokemon = filterPokemonByWord(data, wordValue);

    renderItems(wordPokemon); // Renderiza los Pokémon filtrados en el DOM
 
    // Calcula el promedio de velocidad de los Pokémon filtrados
    const averageSpeed = calculateAverageSpeed(wordPokemon);
    // Actualiza el contenido del elemento con id "average-speed" para mostrar el nuevo promedio de velocidad
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
   
  }

  // Evento de clic en el botón de borrar
  function handleClearClick() {
    // Restablece el valor del filtro de elementos a "Todo"
    document.querySelector("#elemental").value = "Todo";
    // Restablece el valor del filtro de debilidad a "Todo" 
    document.querySelector("#weakness").value = "Todo";
    document.querySelector("#order").value = "Numero";
    document.querySelector("#word").value = "";
    // Aplica el filtro y orden por defecto y obtiene los datos resultantes
    const clearedData = clearFiltersAndSort(data);
    // Renderiza los Pokémon con los datos filtrados y ordenados
    renderItems(clearedData);

    // Actualizar promedio de velocidad
    const averageSpeed = calculateAverageSpeed(clearedData);
    // Actualiza el contenido del elemento con el ID "average-speed" para mostrar el promedio de velocidad calculado
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
  }

  // Asignar event listeners
  document // Asigna un event listener al filtro de elementos para manejar cambios
    .querySelector("#elemental")// Selecciona el elemento del DOM con el id "elemental" (un menú desplegable)
    .addEventListener("change", handleElementalChange);// Agrega un listener para el evento "change" (cuando el valor del menú desplegable cambia)
  document
    .querySelector("#weakness")
    .addEventListener("change", handleWeaknessChange);
  document
    .querySelector("#order")
    .addEventListener("change", handleOrderChange);
  document.querySelector("#word").addEventListener("change", handleWordChange);
  document.querySelector("#clear").addEventListener("click", handleClearClick);

  // Asignar eventos de hover para mostrar datos curiosos
  const pokemonListElement = document.querySelector("#pokemon-list"); 
  // Selecciona el contenedor de la lista de Pokémon
  pokemonListElement.addEventListener("mouseover", function (event) { // Agrega un listener para el evento "mouseover" (pasar el ratón sobre) en el elemento de la lista de Pokémon
    if (event.target.tagName === "LI") {  // Busca un elemento hijo con la clase "facts" dentro del <li> sobre el que está el ratón
      const facts = event.target.querySelector(".facts");
      if (facts) {
        // Si se encuentra un elemento con la clase "facts", cambia su estilo de display para mostrarlo
        facts.style.display = "block";
      }
    }
  });
  pokemonListElement.addEventListener("mouseout", function (event) {// Agrega un listener para el evento "mouseover" (pasar el ratón fuera) en el elemento de la lista de Pokémon
    if (event.target.tagName === "LI") {  // Busca un elemento hijo con la clase "facts" dentro del <li> sobre el que está el ratón
      const facts = event.target.querySelector(".facts");
      if (facts) {
        // Si se encuentra un elemento con la clase "facts", cambia su estilo de display para mostrarlo
        facts.style.display = "none";
      }
      
    }
  });

  // Carga inicial de la aplicación
  initializeApp();
});
