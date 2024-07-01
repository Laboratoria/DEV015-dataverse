import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { computeStats } from './dataFunctions.js';
//import { fakeData } from './data.js';

import data from "./data/dataset.js";

const showData = renderItems(data); //cambiar a renderItems
const root = document.getElementById("root");
root.appendChild(showData);

let filteredData = data;

const filterType = document.getElementById("filter-select");
filterType.addEventListener("change", function (event) {
  root.innerHTML = "";

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    filteredData = filterData(filteredData, "Pet", event.target.value); // guardas data filtrada
  } else {
    filteredData = filterData(data, "Pet", event.target.value); // usas la data general
  }

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    root.appendChild(
      renderItems(filterData(filteredData, "Pet", event.target.value))
    );
  } else {
    root.appendChild(renderItems(filterData(data, "Pet", event.target.value)));
  }
});

const filterGender = document.querySelector('[data-testid="select-filter"]');
filterGender.addEventListener("change", function (event) {
  root.innerHTML = "";

  if (filterType.value) {
    // Esta el filtro de type con un valor?
    filteredData = filterData(filteredData, "Gender", event.target.value); // guardas data filtrada
  } else {
    filteredData = filterData(data, "Gender", event.target.value); // usas la data general
  }

  if (filterGender.value) {
    // Esta el filtro de type con un valor?
    root.appendChild(
      renderItems(filterData(filteredData, "Gender", event.target.value))
    );
  } else {
    root.appendChild(
      renderItems(filterData(data, "Gender", event.target.value))
    );
  }
});

const filterSize = document.getElementById("size-select");
filterSize.addEventListener("change", function (event) {
  root.innerHTML = "";

  if (filterSize.value) {
    filteredData = filterData(filteredData, "Pet size", event.target.value);
  } else {
    filteredData = filterData(data, "Pet size", event.target.value);
  }

  if (filterSize.value) {
    root.appendChild(
      renderItems(filterData(filteredData, "Pet size", event.target.value))
    );
  } else {
    root.appendChild(
      renderItems(filterData(data, "Pet size", event.target.value))
    );
  }
});

const sort = document.getElementById("ordenar");
sort.addEventListener("change", (event) => {
  const sortValue = event.target.value;
  
  let orderData;
  if (sortValue === "asc") {
    orderData = sortData(data, "name", sortValue);
    
  }
  if (sortValue === "desc") {
    orderData = sortData(data, "name", sortValue);
  }
  
  root.innerHTML = "";
  root.appendChild(renderItems(orderData));
});

const clear = document.getElementById("reset-button");
clear.addEventListener("click", function () {
  filterType.value = "";
  filterGender.value = "";
  filterSize.value = "";
  sort.value = "";
});


const statistics = document.getElementById("compute-stats-btn");
statistics.addEventListener("click", function () {
  const statsDatos = document.createElement('p');
  const computedStats = computeStats(fakeData);
  const petCatAvg = computedStats.petCatAvg;
  const petDogAvg = computedStats.petDogAvg;
  const genderMaleAvg = computedStats.genderMaleAvg;
  const genderFemaleAvg = computedStats.genderFemaleAvg;
  statsDatos.innerHTML = `<p>Tenemos un promedio de ${petCatAvg}% felinos</p>
                          <p>Hay un promedio de ${petDogAvg}% caninos</p>
                          <p>El cual ${genderMaleAvg}% son machos</p>
                          <p>${genderFemaleAvg}% son hembras</p>`;
  root.appendChild(statsDatos);
});



/*
const statistics = document.getElementById("compute-stats-btn")
statistics.addEventListener('click', function () {
  const statsDatos = document.createElement('p');
  const petCat = petCatStats(data);
  const petDog = petDogStats(data);
  const genderMale = genderMaleStats(data);
  const genderFemale = genderFemaleStats(data);
 statsDatos.innerHTML = "<p> Tenemos un promedio de ${petCat}% felinos</p><p>Hay un promedio de ${petDog}% caninos</p><p>El cual ${genderMale}% son machos</p>y ${genderFemale}% son hembras</p>";
 root.appendChild(statsDatos);
});
*/

