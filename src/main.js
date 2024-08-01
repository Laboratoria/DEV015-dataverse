import {characters} from './data/dataset.js';
import { renderItems } from './view.js';
import { calcularEstadisticas, getCharacters, filterCharactersByFamily, sortCharactersByName } from './dataFunctions.js';
//se agrega calcularEstadicticas en el import de dataFuntion

function init() {
  //se encarga de inicializar la aplicación,se configuran los manejadores de eventos y se realizan acciones iniciales
  const familyFilter = document.querySelector('#family-filter');
  const sortFilter = document.querySelector('#alfabetico');
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const botonCalcularEstadisticas = document.querySelector('#calcularEstadisticas');
  const resultadoEstadisticas = document.querySelector('#resultado-estadisticas');

  resultadoEstadisticas.style.display = 'none';
  // inicialmente oculta el contenedor de resultados estadisticos
  renderItems(getCharacters());
  // trae los personajes y el renderItems crea una lista para mostrar 

  familyFilter.addEventListener('change', () => {
    //(escucha el change)se espera el cambio de familia para comenzar la funcion 
    const filteredCharacters = filterCharactersByFamily(familyFilter.value);
    //se selecciona la familia 
    renderItems(filteredCharacters);
    //renderizamos filteredCharacters y generamos elementos HTML dinámicamente 
  });

  //ordemanos dentro del filtro
  sortFilter.addEventListener('change', () => {
    //(escucha el change)se espera el cambio para comenzar la funcion 
    const filteredCharacters = filterCharactersByFamily(familyFilter.value);
    //se selecciona la familia 
    let datafilter;
    //prepara la variable para almacenar un valor
    if (familyFilter.value=== ""){
      //si no se selecciona ninguna familia solo se ordena por nombre
      
      datafilter = sortCharactersByName(characters, "name", sortFilter.value);
    //ordenamos los datos para prepararlos para el uso del DOM
    }
    else{
      datafilter = sortCharactersByName(filteredCharacters, "name", sortFilter.value);
    } //ordena solo los personajes que ya han pasado por el filtro de familia.
    renderItems(datafilter)
    //toma la lista de personajes y actualiza la interfaz de usuario
    //para ser mostrada en la interfaz de usuario
  });

  clearButton.addEventListener('click', () => {
    // Restablecer el filtrado y ordenado
    familyFilter.value = '';
    sortFilter.value = '';

    renderItems(getCharacters()); 
    // Renderizar todos los personajes nuevamente sin aplicar filtros adicionales
  });
  
  botonCalcularEstadisticas.addEventListener('click', () => {
    //creamos el metodo addEventListener y el manejador de evento click
    const stats = calcularEstadisticas(getCharacters());
    //traemos los personajes, para calcular la estadisticas y para luego guardarlos en stats
    resultadoEstadisticas.innerHTML = `
      <p>Casados: ${stats.casados}</p>
      <p>Solteros: ${stats.solteros}</p>
      <p>Viudos: ${stats.viudos}</p>
      <p>Amantes: ${stats.amantes}</p>
    `;
    // Mostrar el contenedor de resultados
    resultadoEstadisticas.style.display = 'flex'; 
    // Mostrar el contenedor
  });
}

document.addEventListener('DOMContentLoaded', init);
//nos aseguramos que init inicie una vez cargue el HTML para eviar errores