import { filterData, sortData, computeStats, averageStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

// Trae la info de la funcion render items-----------------------------------------------------------------
const render = document.querySelector("#root");
render.appendChild(renderItems(data));

//FILTRO----------------------------------------------------------------------------------------------------
const filter = document.querySelector("#filter");
let newFilterData;

filter.addEventListener("change", (event) => {
  const filterValue = event.target.value;

  if (filterValue === "Masculino" || filterValue === "Femenino") {
    newFilterData = filterData(data, "gender", filterValue);
  } else {
    newFilterData = filterData(data, "age", filterValue);
  }

  sort.value = "";
  render.innerHTML = "";
  render.appendChild(renderItems(newFilterData));
});

//SORT----------------------------------------------------------------------------------------------------
const sort = document.querySelector("#sort-order");

sort.addEventListener("change", (event) => {
  const sortValue = event.target.value;
  let orderData;


  if (newFilterData) {
    if (sortValue === "asc") {
      orderData = sortData(newFilterData, "name", sortValue);
    }
    if (sortValue === "desc") {
      orderData = sortData(newFilterData, "name", sortValue);
    }
  } else {
    if (sortValue === "asc") {
      orderData = sortData(data, "name", sortValue);
    }
    if (sortValue === "desc") {
      orderData = sortData(data, "name", sortValue);
    }
  }
  
  render.innerHTML = "";
  render.appendChild(renderItems(orderData));
});

// BOTON RESET---------------------------------------------------------------------------------------
const buttonReset = document.querySelector("button[data-testid='button-clear']");

buttonReset.addEventListener("click", function () {
  render.innerHTML = "";
  filter.value = "";
  sort.value = "";
  newFilterData = "";

  render.appendChild(renderItems(data));
});

//STATS
const buttonStats = document.querySelector("#buttonStats");
const showStats = document.querySelector("#showStats");

buttonStats.addEventListener("click", function () {

  //ESTADISTICAS DE GENERO----------------------------------------------------------------------------
  const dataFemenino = filterData(data, 'gender', 'Femenino');
  
  const divGender = document.createElement('div');
  divGender.classList.add('stats');
  divGender.innerHTML = "<p>El <span>" + computeStats(dataFemenino, data) + "%</span> son del genero Femenino</p>";
  showStats.appendChild(divGender);

  //ESTADISTICAS DE CITY----------------------------------------------------------------------------
  const ny = filterData(data, 'city', 'Nueva York');
  
  const divCity = document.createElement('div');
  divCity.classList.add('stats');
  divCity.innerHTML = "<p>El <span>" + computeStats(ny, data) + "%" + "</span> viven en la ciudad de Nueva York</p>";
  showStats.appendChild(divCity);
  
  
  //ESTADISTICAS DE EDAD----------------------------------------------------------------------------
  const age = averageStats(data);
  
  const divAge = document.createElement('div');
  divAge.classList.add('stats');
  divAge.innerHTML = "<p>La edad promedio de los Spider Man es <span>" + age + "</span> años </p>";
  showStats.appendChild(divAge);
  
  //MUESTRA LAS ESTADISTICAS ----------------------------------------------------------------------------
  if (showStats.style.display === 'flex') {
    showStats.style.display = 'none';
    showStats.innerHTML = "";
  } else {
    showStats.style.display = 'flex';
  }

})

//FUNCIONALIDAD DE BOTON HAMBURGUESA----------------------------------------------------------------------

const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");
const boxButtoms = document.querySelector("#boxButtoms");

burger.addEventListener('click', function(){
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }

  boxButtoms.parentNode.insertBefore(nav, boxButtoms.nextSibling)
})