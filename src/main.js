import { renderItems } from './view.js';

import data from './data/dataset.js';



const elementos = document.getElementById("disneyinfo");
const listaDePeliculas = renderItems(data);
elementos.appendChild(listaDePeliculas);


const selector90 = document.querySelector('option[value="1990"]');
const selector2000 = document.querySelector('option[value="2000"]');
const selector2010 = document.querySelector('option[value="2010"]');
const selector2020 = document.querySelector('option[value="2020"]');

//Crear función de filtrado
//aplicar la función de filtrado de los 90 al selector de los 90
//decirle que al hacer click al selector de los 90 se aplique el filtrado

function filtrarAño90() {
const filtrarAño90 = dataFunctions.filterByEpocaUno();
selector90.innerHTML = filtrarAño90;
}
selector90.addEventListener("click", filtrarAño90);

function filtrarAño2000() {
const filtrarAño00 = dataFunctions.filterByEpocaDos();
selector2000.innerHTML = filtrarAño00;
}
selector2000.addEventListener("click", filtrarAño2000);

function filtrarAño2010() {
const filtrarAño10 = dataFunctions.filterByEpocaTres();
selector2010.innerHTML = filtrarAño10;
}
selector2010.addEventListener("click", filtrarAño2010);

function filtrarAño2020(){
const filtrarAño20 = dataFunctions.filterByEpocaCuatro();
selector2020.innerHTML = filtrarAño20;
}
selector2020.addEventListener("click", filtrarAño2020);


