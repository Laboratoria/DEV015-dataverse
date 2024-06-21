export function renderItems(data) {
  console.log(data);
  const pokemonList = document.getElementById("pokemon-list");
  pokemonList.innerHTML = "";
  data.forEach((pokemon) => {
    const li = document.createElement("li");
    li.innerHTML = `
<div>
<img src="${pokemon.image}" alt="${pokemon.name}">
<h2>${pokemon.name}</h2>
<p><strong>ELEMENTO:</strong> ${pokemon.type.join(", ")}</p>
<p><strong>GENERACION:</strong> ${pokemon.generation}</p>
<p><strong>REGION:</strong> ${pokemon.region}</p>
<p><strong>NUMERO:</strong> ${pokemon.number}</p>
<p><strong>RAREZA:</strong> ${pokemon.rarity}</p>
<p><strong>PEQUEÑA DESCRIPCION:</strong> ${pokemon.shortDescription}</p>
<p><strong>DESCRIPCION:</strong> ${pokemon.description}</p>
<p><strong>DEBILIDAD:</strong> ${pokemon.weakness.join(", ")}</p>
<p><strong>ATAQUE:</strong> ${pokemon.attack}</p>
<p><strong>DEFENSA:</strong> ${pokemon.defense}</p>
<p><strong>VELOCIDAD:</strong> ${pokemon.speed}</p>
<h3>DATOS CURIOSOS</h3>
<p><strong>NUMERO EN LA POKEDEX:</strong> ${pokemon.facts.pokedexNumber}</p>
<p><strong>HABLAR:</strong> ${pokemon.facts.ability}</p>
<p><strong>COLOR:</strong> ${pokemon.facts.primaryColor}</p>
</div>
`;
    pokemonList.appendChild(li);
  });
}
