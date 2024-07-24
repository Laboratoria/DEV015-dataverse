import { renderItems } from "./view.js";

import data from "./data/dataset.js";

import { filterData, sortData } from "./dataFunctions.js";
import { computeStats, computeStatsNota } from "./dataFunctions.js";

const elementos = document.getElementById("root");
const listaDePeliculas = renderItems(data);
elementos.appendChild(listaDePeliculas);

const selectoresEpoca = document.querySelector("#epoca");
const selectoresOrden = document.querySelector("#nombre");
const botonborrar = document.getElementById("borrar");
const botonData = document.getElementById("datosestadisticosDisney");


selectoresEpoca.addEventListener("change", (event) => { 
  const valor = event.target.value;
  let dataFiltrada;
  if (valor === "0") {
    dataFiltrada = data;
  } else {
    dataFiltrada = filterData(data, "estreno", valor)
  }
  
  const valorOrden = document.getElementById("nombre").value;
  if (valorOrden !== "orden") {
    dataFiltrada = sortData(dataFiltrada, "name", valorOrden);
  }

  
  const listaFiltrada = renderItems(dataFiltrada);
  elementos.innerHTML = "";
  elementos.appendChild(listaFiltrada);

});

selectoresOrden.addEventListener("change", (e) => {
  const value = e.target.value;
  let dataOrdenada;
  if (value === "orden") {
    dataOrdenada = data;
  }  else {
    dataOrdenada = sortData(data, "name", value);
  }

  const valorFiltro = document.getElementById("epoca").value;
  if (valorFiltro !== "0") {
    dataOrdenada = filterData(dataOrdenada, "estreno", valorFiltro);
  }
  
  const listaOrdenada = renderItems(dataOrdenada);
  elementos.innerHTML = "";
  elementos.appendChild(listaOrdenada);
});


function borrarFiltrosYOrden() {
  const listaOriginal = renderItems(data);
  elementos.innerHTML = "";
  elementos.appendChild(listaOriginal);
  selectoresEpoca.selectedIndex=0;
  selectoresOrden.selectedIndex=0;
}
  
function datosEstadisticos() {
  const copyData = [...data];

  const datoDuracion = document.querySelector("#duracion");
  const datoNota = document.querySelector("#nota");

  datoDuracion.innerHTML = "Las peliculas, en promedio, duran: " + computeStats(copyData) + " minutos.";
  datoNota.innerHTML = "En promedio, la calificación es de: " + computeStatsNota(copyData) + " según IMDb.";
}

const contenido = document.querySelector('.contenido-oculto');
botonData.addEventListener("click", ()=> {
  datosEstadisticos();
  contenido.style.display = 'block';
});


botonborrar.addEventListener("click", borrarFiltrosYOrden);

