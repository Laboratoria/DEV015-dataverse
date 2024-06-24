export function renderPokemonList(pokemonList) {
  const pokemonListElement = document.getElementById('pokemon-list');
  pokemonListElement.innerHTML = '';
  
  pokemonList.forEach((pokemon) => {
    const li = document.createElement('li');
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'http://schema.org/Thing'); // Schema.org no tiene 'Pokemon'

    const image = pokemon.image ? `<img src="${pokemon.image}" alt="${pokemon.name}" itemprop="image">` : '';
    const name = pokemon.name ? `<h3 itemprop="name">${pokemon.name}</h3>` : '';
    const type = pokemon.type ? `<p><strong>ELEMENTO:</strong> ${pokemon.type.join(', ')}</p>` : '';
    const generation = pokemon.generation ? `<p><strong>GENERACION:</strong> ${pokemon.generation}</p>` : '';
    const region = pokemon.region ? `<p><strong>REGION:</strong> ${pokemon.region}</p>` : '';
    const number = pokemon.number ? `<p><strong>NUMERO:</strong> ${pokemon.number}</p>` : '';
    const rarity = pokemon.rarity ? `<p><strong>RAREZA:</strong> ${pokemon.rarity}</p>` : '';
    const shortDescription = pokemon.shortDescription ? `<p><strong>PEQUEÑA DESCRIPCION:</strong> ${pokemon.shortDescription}</p>` : '';
    const description = pokemon.description ? `<p><strong>DESCRIPCION:</strong> ${pokemon.description}</p>` : '';
    const weakness = pokemon.weakness ? `<p><strong>DEBILIDAD:</strong> ${pokemon.weakness.join(', ')}</p>` : '';
    const attack = pokemon.attack ? `<p><strong>ATAQUE:</strong> ${pokemon.attack}</p>` : '';
    const defense = pokemon.defense ? `<p><strong>DEFENSA:</strong> ${pokemon.defense}</p>` : '';
    const speed = pokemon.speed ? `<p><strong>VELOCIDAD:</strong> ${pokemon.speed}</p>` : '';

    const facts = pokemon.facts ? `
      <h4>DATOS CURIOSOS</h4>
      <p><strong>NUMERO EN LA POKEDEX:</strong> ${pokemon.facts.pokedexNumber}</p>
      <p><strong>HABLAR:</strong> ${pokemon.facts.ability}</p>
      <p><strong>COLOR:</strong> ${pokemon.facts.primaryColor}</p>
    ` : '';

    li.innerHTML = `
      <div>
        ${image}
        ${name}
        ${type}
        ${generation}
        ${region}
        ${number}
        ${rarity}
        ${shortDescription}
        ${description}
        ${weakness}
        ${attack}
        ${defense}
        ${speed}
        ${facts}
      </div>
    `;

    // Agregar evento de clic para imprimir información en la consola
    li.addEventListener('click', () => {
      console.log(`Detalles del Pokémon ${pokemon.name}:`);
      console.log(pokemon);
    });

    pokemonListElement.appendChild(li);
  });
}

