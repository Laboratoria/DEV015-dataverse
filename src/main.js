import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

function renderPokemonList(pokemonList) {
  const pokemonContainer = document.getElementById("pokemon-list");
  pokemonContainer.innerHTML = "";
  pokemonList.forEach((pokemon) => {
    const card = createPokemonCard(pokemon);
    pokemonContainer.appendChild(card);
  });
}

function filterPokemon(pokemonList, type) {
  if (type === "all") return pokemonList;
  return pokemonList.filter((pokemon) => pokemon.type.includes(type));
}

function sortPokemon(pokemonList, property, order) {
  return pokemonList.sort((a, b) => {
    if (order === "asc") {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  });
}

document.getElementById("filter").addEventListener("change", () => {
  const type = document.getElementById("filter").value;
  const property = document.getElementById("sort").value;
  const order = document.getElementById("sort-order").value;

  const filteredPokemon = filterPokemon(dataset, type);
  const sortedPokemon = sortPokemon(filteredPokemon, property, order);

  renderPokemonList(sortedPokemon);
});

document.getElementById("sort").addEventListener("change", () => {
  const type = document.getElementById("filter").value;
  const property = document.getElementById("sort").value;
  const order = document.getElementById("sort-order").value;

  const filteredPokemon = filterPokemon(dataset, type);
  const sortedPokemon = sortPokemon(filteredPokemon, property, order);

  renderPokemonList(sortedPokemon);
});

document.getElementById("sort-order").addEventListener("change", () => {
  const type = document.getElementById("filter").value;
  const property = document.getElementById("sort").value;
  const order = document.getElementById("sort-order").value;

  const filteredPokemon = filterPokemon(dataset, type);
  const sortedPokemon = sortPokemon(filteredPokemon, property, order);

  renderPokemonList(sortedPokemon);
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("filter").value = "all";
  document.getElementById("sort").value = "number";
  document.getElementById("sort-order").value = "asc";

  renderPokemonList(dataset);
});

// Inicialización
renderPokemonList(Data);
