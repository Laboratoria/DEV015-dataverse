export const renderItems = (data) => {
  
  //Crear un elemento <ul> utilizando el método createElement.
  const ul = document.createElement("ul");
  //Recorrer la data mediante un bucle o algún método de array como forEach o map
  data.forEach(item => {
    //Por cada elemento de la data, crear un elemento <li>.
    const li = document.createElement("li");
    li.textContent = item;
    //Agregar cada <li> al <ul> utilizando innerHTML , appendChild u otro método apropiado.
    ul.appendChild(li);  
    
  });
  //Finalmente, retornar el elemento <ul>
   return ul;



 // console.log(data)
  
// return 'example';
};

