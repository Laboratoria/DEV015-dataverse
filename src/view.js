export const renderItems = (data) => {
    
  const newElementUl = document.createElement("ul");
  
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  data.forEach((element)=> {
    
    const newElementLi = document.createElement("li"); 
    newElementLi.classList.add("cards")

    newElementLi.setAttribute("itemtype", "http://schema.org/Item"); 
    newElementLi.setAttribute("itemscope", ""); 

    
    newElementLi.innerHTML += ` 
    <img src="${element.imageUrl}" alt="${element.id}"/>
    <p><strong>${element.name}</strong></p>
    <p>${element.shortDescripcion}</p>
    <p>Año de creación:${element.facts.añoCreacion}</p> 
    <p>Lugar de Origen:${element.facts.pais}</p>
    <p>Album más vendido:${element.facts.albumMasFamoso}</p>
    <p>Integrantes:${element.facts.integrantes}</p> `
    newElementUl.appendChild(newElementLi);//el ul es el padre y va a tener un hijo li
  
  });
 
  return newElementUl;
};


export function renderResult(result) {
  const resultContainer = document.getElementById('estadisticas');
  //resultContainer.classList.add("estadistica")
  const resultElement = document.getElementById('paises');
  //resultElement.classList.add("estadistica")
  resultElement.textContent = `${result}% De las bandas fueron creadas en EE.UU.`;

  resultContainer.appendChild(resultElement);
  document.body.appendChild(resultContainer);
  return renderResult;
} 
/*AQUI HABIA Q EXPORTAR LA FUNCION PARA LA DECADA DE LOS 90 */
export function renderDecadas(decadaResult){
  const estadisticasDecada = document.getElementById('estadisticas');
  const resultadoDecadas = document.getElementById('decade');
  resultadoDecadas.textContent = ` ${decadaResult}% De las bandas son la decada de los 90s`;
  document.body.appendChild(estadisticasDecada);
  return renderDecadas

  
}