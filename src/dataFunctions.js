// dataFunctions.js
export function filterPokemonByElemental(data, elementalValue) {
  if (elementalValue === 'Todo') return data;
  return data.filter(pokemon => pokemon.type.includes(elementalValue));
}

export function filterPokemonByWeakness(data, weaknessValue) {
  if (weaknessValue === 'Todo') return data;
  return data.filter(pokemon => pokemon.weakness.includes(weaknessValue));
}


// Ordena los Pokémon por la característica seleccionada
export function filterPokemonByOrder(data, order) {
  switch (order) {
    case 'Numero':
      return data.sort((a, b) => a.number - b.number);
    case 'Nombre':
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case 'Generación':
      return data.sort((a, b) => a.generation - b.generation);
    case 'Ataque':
      return data.sort((a, b) => b.attack - a.attack);
    case 'Defensa':
      return data.sort((a, b) => b.defense - a.defense);
    case 'Velocidad':
      return data.sort((a, b) => b.speed - a.speed);
    default:
      return data;
  }
}


export function filterPokemonByWord(data, wordValue) {
  if (wordValue === 'z - a') {
    return data.slice().sort((a, b) => b.name.localeCompare(a.name));
  }

  // Filtra los Pokémon cuyo nombre comienza con la letra seleccionada
  return data.filter(pokemon => pokemon.name.charAt(0).toLowerCase() === wordValue.toLowerCase());
}

// Limpia los filtros y ordena por número
export function clearFiltersAndSort(data) {
  return data.sort((a, b) => a.number - b.number);
}
