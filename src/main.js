import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

function createPokemonCard(pokemon) {
    const li = document.createElement("li");
    li.innerHTML = `
     <div>
              <img src="${pokemon.image}" alt="${pokemon.name}">
              <h2>${pokemon.name}</h2>
              <p><strong>ELEMENTO:</strong> ${pokemon.type.join(', ')}</p>
              <p><strong>GENERACION:</strong> ${pokemon.generation}</p>
              <p><strong>REGION:</strong> ${pokemon.region}</p>
              <p><strong>NUMERO:</strong> ${pokemon.number}</p>
              <p><strong>RAREZA:</strong> ${pokemon.rarity}</p>
              <p><strong>PEQUEÑA DESCRIPCION:</strong> ${pokemon.shortDescription}</p>
              <p><strong>DESCRIPCION:</strong> ${pokemon.description}</p>
              <p><strong>DEBILIDAD:</strong> ${pokemon.weakness.join(', ')}</p>
              <p><strong>ATAQUE:</strong> ${pokemon.attack}</p>
              <p><strong>DEFENSA:</strong> ${pokemon.defense}</p>
              <p><strong>VELOCIDAD:</strong> ${pokemon.speed}</p>
              <h3>Facts</h3>
              <p><strong>NUMERO EN LA POKEDEX:</strong> ${pokemon.facts.pokedexNumber}</p>
              <p><strong>HABLAR:</strong> ${pokemon.facts.ability}</p>
              <p><strong>COLOR:</strong> ${pokemon.facts.primaryColor}</p>
          </div>
`;
return li;
}

function renderPokemonList(pokemonList) {
    const pokemonContainer = document.getElementById("pokemon-list");
    pokemonContainer.innerHTML = '';
    pokemonList.forEach(pokemon => {
        const card = createPokemonCard(pokemon);
        pokemonContainer.appendChild(card);
    });
}

function filterPokemon(pokemonList, type) {
    if (type === 'all') return pokemonList;
    return pokemonList.filter(pokemon => pokemon.type.includes(type));
}

function sortPokemon(pokemonList, property, order) {
    return pokemonList.sort((a, b) => {
        if (order === 'asc') {
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

    let filteredPokemon = filterPokemon(dataset, type);
    let sortedPokemon = sortPokemon(filteredPokemon, property, order);

    renderPokemonList(sortedPokemon);
});

document.getElementById("sort").addEventListener("change", () => {
    const type = document.getElementById("filter").value;
    const property = document.getElementById("sort").value;
    const order = document.getElementById("sort-order").value;

    let filteredPokemon = filterPokemon(dataset, type);
    let sortedPokemon = sortPokemon(filteredPokemon, property, order);

    renderPokemonList(sortedPokemon);
});

document.getElementById("sort-order").addEventListener("change", () => {
    const type = document.getElementById("filter").value;
    const property = document.getElementById("sort").value;
    const order = document.getElementById("sort-order").value;

    let filteredPokemon = filterPokemon(dataset, type);
    let sortedPokemon = sortPokemon(filteredPokemon, property, order);

    renderPokemonList(sortedPokemon);
});

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("filter").value = 'all';
    document.getElementById("sort").value = 'number';
    document.getElementById("sort-order").value = 'asc';

    renderPokemonList(dataset);
});

// Inicialización
renderPokemonList(dataset.js);