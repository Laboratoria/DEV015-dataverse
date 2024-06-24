import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';


console.log(example, renderItems(data), data);

const elementos = document.getElementById("disneyinfo");
const listaDePeliculas = renderItems(data);
elementos.appendChild(listaDePeliculas);
