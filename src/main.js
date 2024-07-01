import data from "./data/dataset.js";
import { renderPokemonList } from "./view.js";
import {
  filterPokemonByElemental,
  filterPokemonByWeakness,
  filterPokemonByOrder,
  filterPokemonByWord,
  clearFiltersAndSort,
} from "./dataFunctions.js";

document.addEventListener("DOMContentLoaded", () => {
  function initializeApp() {
    renderPokemonList(data);
  }

  // Evento de cambio en el filtro de elementos
  function handleElementalChange() {
    const elementalValue = document.getElementById("elemental").value;
    const elementalPokemon = filterPokemonByElemental(data, elementalValue);
    renderPokemonList(elementalPokemon);
  }

  // Evento de cambio en el filtro de debilidad
  function handleWeaknessChange() {
    const weaknessValue = document.getElementById("weakness").value;
    const weaknessPokemon = filterPokemonByWeakness(data, weaknessValue);
    renderPokemonList(weaknessPokemon);
  }

  // Evento de cambio en la selección de ordenamiento
  function handleOrderChange() {
    const orderValue = document.getElementById("order").value;
    const orderPokemon = filterPokemonByOrder(data, orderValue);
    renderPokemonList(orderPokemon);
  }

  // Evento de cambio en la selección de palabra
  function handleWordChange() {
    const wordValue = document.getElementById("word").value;
    const wordPokemon = filterPokemonByWord(data, wordValue);
    renderPokemonList(wordPokemon);
  }

  // Evento de clic en el botón de borrar
  function handleClearClick() {
    document.getElementById("elemental").value = "Todo";
    document.getElementById("weakness").value = "Todo";
    document.getElementById("order").value = "Numero";
    document.getElementById("word").value = "";
    const clearedData = clearFiltersAndSort(data);
    renderPokemonList(clearedData);
  }

  // Asignar event listeners
  document
    .getElementById("elemental")
    .addEventListener("change", handleElementalChange);
  document
    .getElementById("weakness")
    .addEventListener("change", handleWeaknessChange);
  document
    .getElementById("order")
    .addEventListener("change", handleOrderChange);
  document.getElementById("word").addEventListener("change", handleWordChange);
  document.getElementById("clear").addEventListener("click", handleClearClick);

   // Asignar eventos de hover para mostrar datos curiosos
   const pokemonListElement = document.getElementById("pokemon-list");
   pokemonListElement.addEventListener("mouseover", function (event) {
     if (event.target.tagName === "LI") {
       const facts = event.target.querySelector(".facts");
       if (facts) {
         facts.style.display = "block";
       }
     }
   });
 
   pokemonListElement.addEventListener("mouseout", function (event) {
     if (event.target.tagName === "LI") {
       const facts = event.target.querySelector(".facts");
       if (facts) {
         facts.style.display = "none";
       }
     }
   });
 
  

  // Carga inicial de la aplicación
  initializeApp();
});
