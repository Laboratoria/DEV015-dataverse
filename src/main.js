import { renderItems } from './view.js';

import data from './data/dataset.js';

const elementos = document.getElementById("disneyinfo");
const listaDePeliculas = renderItems(data);
elementos.appendChild(listaDePeliculas);
