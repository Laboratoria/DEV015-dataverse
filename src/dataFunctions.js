// Filtra los Pokémon por el tipo elemental seleccionado
export function filterPokemonByElemental(data, elementalValue) {
  // Si el valor es "Todo", retorna todos los datos
  if (elementalValue === 'Todo') return data;
  // Filtra los Pokémon cuyo tipo incluye el valor elemental seleccionado
  return data.filter(pokemon => pokemon.type.includes(elementalValue));
}

// Filtra los Pokémon por la debilidad seleccionada
export function filterPokemonByWeakness(data, weaknessValue) {
  // Si el valor es "Todo", retorna todos los datos
  if (weaknessValue === 'Todo') return data;
  // Filtra los Pokémon cuya debilidad incluye el valor seleccionado
  return data.filter(pokemon => pokemon.weakness.includes(weaknessValue));
}


// Ordena los Pokémon por la característica seleccionada
export function filterPokemonByOrder(data, order) {
  switch (order) {
  case 'Numero':
    // Ordena por número
    return data.sort((a, b) => a.number - b.number);
  case 'Nombre':
    // Ordena por nombre alfabéticamente
    return data.sort((a, b) => a.name.localeCompare(b.name));
  case 'Generación':
    // Ordena por generación
    return data.sort((a, b) => a.generation - b.generation);
  case 'Ataque':
    // Ordena por ataque en orden descendente
    return data.sort((a, b) => b.attack - a.attack);
  case 'Defensa':
    // Ordena por defensa en orden descendente
    return data.sort((a, b) => b.defense - a.defense);
  case 'Velocidad':
    // Ordena por velocidad en orden descendente
    return data.sort((a, b) => b.speed - a.speed);
  default:
    // Si no coincide con ningún caso, retorna los datos sin cambios
    return data;
  }
}

// Filtra los Pokémon por la palabra o letra seleccionada
export function filterPokemonByWord(data, wordValue) {
  // Si el valor es 'z - a', ordena los Pokémon por nombre en orden descendente
  if (wordValue === 'z - a') {
    return data.slice().sort((a, b) => b.name.localeCompare(a.name));
  }

  // Filtra los Pokémon cuyo nombre comienza con la letra seleccionada
  return data.filter(pokemon => pokemon.name.charAt(0).toLowerCase() === wordValue.toLowerCase());
}

// Limpia los filtros y ordena por número
export function clearFiltersAndSort(data) {
  // Ordena los Pokémon por número
  return data.sort((a, b) => a.number - b.number);
}

