
export function renderItems(data) {
  console.log(data)
  const pokemonList = document.getElementById('pokemon-list');
  pokemonList.innerHTML = '';
  data.forEach(pokemon => {
      const li = document.createElement('li');
      li.innerHTML = `
          <div>
              <img src="${pokemon.image}" alt="${pokemon.name}">
              <h2>${pokemon.name}</h2>
              <p>ELEMENTO: ${pokemon.type.join(', ')}</p>
              <p>GENERACION: ${pokemon.generation}</p>
              <p>REGION: ${pokemon.region}</p>
              <p>NUMERO: ${pokemon.number}</p>
              <p>RAREZA: ${pokemon.rarity}</p>
              <P>PEQUEÑA DESCRIPCION: ${pokemon.shortDescription}</p>
              <p>DESCRIPCION: ${pokemon.description}</p>
              <P>EVOLUCION: ${pokemon.evolution}</p>
              <p>ATAQUE: ${pokemon.attack}</p>
              <p>DEFENSA: ${pokemon.defense}</p>
              <p>VELOCIDAD: ${pokemon.speed}</p>
          </div>
      `;
      pokemonList.appendChild(li);
  });
}

