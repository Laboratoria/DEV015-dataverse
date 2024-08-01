export function renderItems(characters) {
  const characterList = document.querySelector('#character-list');
  characterList.innerHTML = ''; 
  // Limpiar lista antes de renderizar nuevos personajes
  const items = characters.map(character => {
    //crea un nuevo arreglo sin modificar el arreglo original
    const liElement = document.createElement('li'); 
    // Crear un elemento <li> por cada personaje
    liElement.classList.add('personajes');
    //agregamos la clase personajes para crearle estilos en el CSS
    liElement.setAttribute('itemscope', ''); 
    //  indica que el elemento contiene datos estructurados según Microdata
    liElement.setAttribute('itemtype', 'https://schema.org/Thing'); 
    //especificamos el tipo de datos-schema ayuda a los motores de busqueda
    liElement.setAttribute("data-id", character.id);
    //set.Atribute permite ladefinicion y actualizacion de atributos HTML

    //colocamos la expresion $ para visualizar dinamicamente los siguentes elementos
    liElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.imageUrl}" alt="${character.name}" />
      <p>Edad: ${character.facts.edad}</p>
      <p>Situación Sentimental: ${character.facts.sitSentimental}</p>
      <p>${character.shortDescription}</p>
    `;

    return liElement; // Retorna el <li> creado
  });

  items.forEach(item => characterList.appendChild(item)); 
  // Añadir todos los <li> al <ul> existente
  //agrega un nodo al final del contenido de un elemento padre en el DOM.
  return characterList;
}