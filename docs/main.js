import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { computeStats } from './dataFunctions.js';
//import { fakeData } from './data.js';

import data from "./data/dataset.js";
//import { testData } from "../test/data.js";

const showData = renderItems(data); //cambiar a renderItems
const root = document.querySelector("#root"); // Reemplazado getElementById con querySelector
// const piechart = document.querySelector("#piechart"); // Reemplazado getElementById con querySelector
const results = document.querySelector("#results"); // Reemplazado getElementById con querySelector
root.appendChild(showData);

let filteredData = data; // Duplico la data inicial

const filterType = document.querySelector("#filter-select"); // Reemplazado getElementById con querySelector
filterType.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "pet", event.target.value); // Filtro por tipo de mascota

  if (filterGender.value) {
    filteredData = filterData(filteredData, "gender", filterGender.value);
  }

  if (filterSize.value) {
    filteredData = filterData(filteredData, "petSize", filterSize.value);
  }

  root.appendChild(renderItems(filteredData));
});

const filterGender = document.querySelector('[data-testid="select-filter"]');
filterGender.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "gender", event.target.value);

  if (filterType.value) {
    filteredData = filterData(filteredData, "pet", filterType.value);
  }

  if (filterSize.value) {
    filteredData = filterData(filteredData, "petSize", filterSize.value);
  }

  root.appendChild(renderItems(filteredData));
});

const filterSize = document.querySelector("#size-select"); // Reemplazado getElementById con querySelector
filterSize.addEventListener("change", function (event) {
  root.innerHTML = "";

  filteredData = filterData(data, "petSize", event.target.value);

  if (filterType.value) {
    filteredData = filterData(filteredData, "pet", filterType.value);
  }

  if (filterGender.value) {
    filteredData = filterData(filteredData, "gender", filterGender.value);
  }

  root.appendChild(renderItems(filteredData));
});

const sort = document.querySelector("#ordenar"); // Reemplazado getElementById con querySelector
sort.addEventListener("change", (event) => {
  const sortValue = event.target.value;
  
  let orderData;
  if (sortValue === "asc" || sortValue === "desc") {
    orderData = sortData(filteredData, "name", sortValue);
  }
  
  root.innerHTML = "";
  root.appendChild(renderItems(orderData));
});

const clear = document.querySelector("#reset-button"); // Reemplazado getElementById con querySelector
clear.addEventListener("click", function () {
  filterType.value = "";
  filterGender.value = "";
  filterSize.value = "";
  sort.value = "";

  root.innerHTML = "";
  root.appendChild(showData);
});


const statistics = document.querySelector("#compute-stats-btn"); // Reemplazado getElementById con querySelector
statistics.addEventListener("click", function () {
  const statsDatos = document.createElement('p');
  const computedStats = computeStats(data);
  const petCatAvg = computedStats.petCatAvg;
  const petDogAvg = computedStats.petDogAvg;
  const genderMaleAvg = computedStats.genderMaleAvg;
  const genderFemaleAvg = computedStats.genderFemaleAvg;
  const petSizeSmallAvg = computedStats.petSizeSmallAvg;
  const petSizeBigAvg = computedStats.petSizeBigAvg;
  statsDatos.innerHTML = `<p>We have an average of ${petCatAvg}% felines</p>
                          <p>there is an average of ${petDogAvg}% canines,</p>
                          <p>of which ${genderMaleAvg}% are males and</p>
                          <p>${genderFemaleAvg}% are females.</p>
                          <p>Among them, there are also ${petSizeSmallAvg}% small ones</p>
                          <p>and ${petSizeBigAvg}% big ones</p>`;
  results.appendChild(statsDatos);
});
