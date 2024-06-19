import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const listContainer = document.getElementById("list-container");
const ulElement = renderItems(data);
listContainer.appendChild(ulElement);

//console.log(example, renderItems(data), data);
// Invocación de renderItems
renderItems(data)
