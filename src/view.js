export const renderItems = (data) => {
  //console.log(data);
  const ul = document.createElement("ul");

  data.forEach((item) => {
    //console.log(item);//
    const li = document.createElement("li");
    ul.appendChild(li);

    //imagen
    const imageUrl = document.createElement("img");
    imageUrl.setAttribute("src", item.imageUrl);
    imageUrl.setAttribute("alt", item.name);
    li.appendChild(imageUrl);

    
    //texto
    const dl = document.createElement("dl");
    li.appendChild(dl);

    //nombre
    const dtNombre = document.createElement("dt");
    dl.appendChild(dtNombre);
    dtNombre.innerHTML = "Nombre: ";

    const ddNombre = document.createElement("dd");
    ddNombre.setAttribute("intemprop", "name");
    dl.appendChild(ddNombre);
    ddNombre.innerHTML = item.name;

    //descripcion y descripcion corta
    const dd = document.createElement("dd");
    dd.setAttribute("itemprop", "shortDescription");
    dl.appendChild(dd);
    dd.innerHTML = item.shortDescription;

    const dtAboutIt = document.createElement("dd");
    dl.appendChild(dtAboutIt);
    dtAboutIt.innerHTML = item["About it"];
    
    //facts

    const dtPet = document.createElement('dt');
    dl.appendChild(dtPet);
    dtPet.innerHTML = "Pet: ";

    const ddPet = document.createElement('dd');
    ddPet.setAttribute("itemprop", "Pet");
    dl.appendChild(ddPet);
    ddPet.innerHTML = item.facts.Pet;

    const dtGender = document.createElement('dt');
    dl.appendChild(dtGender);
    dtGender.innerHTML = "Gender: ";

    const ddGender = document.createElement('dd');
    ddGender.setAttribute("itemprop", "Gender");
    dl.appendChild(ddGender);
    ddGender.innerHTML = item.facts.Gender;

    const dtPetSize = document.createElement('dt');
    dl.appendChild(dtPetSize);
    dtPetSize.innerHTML = "Pet size: ";

    const ddPetSize = document.createElement('dd');
    ddPetSize.setAttribute("itemprop", "Pet size");
    dl.appendChild(ddPetSize);
    ddPetSize.innerHTML = item.facts["Pet size"];
  });
  return ul;
};

// Aquí comienza tu código y puedes retornar lo que tu necesites
// crear nodos significa "createElement " el createElement crea un elemento

//funcion que recibe un conjunto de datos y crea un elemento <ul> con <li> para cada dato

/*
function crearLista(data) {
  // 1. Recibir el parámetro data, que representa todo el conjunto de datos.
  // esto lo recibimos como argumento de la funcion.

  // 2. Crear un elemento <ul> utilizando el método createElement.
  const ul = document.createElement('ul');

  // 3. Recorrer la data mediante un bucle o algún método de array como forEach o map
  data.forEach(item => {
    // 4. Por cada elemento de la data, crear un elemento <li>.
  const li = document.createElement('li');

  // 5. Agregar cada <li> al <ul> utilizando innerHTML , appendChild u otro método apropiado.
  //li.innerHTML = 'data';
  ul.appendChild('li');
});

// 6. Finalmente, retornar el elemento <ul>.
return ul;
}
 
// Para concluir esta fase, debes seleccionar el elemento HTML mediante un selector del DOM. 
//Posteriormente, indica dónde se debe colocar el resultado de la invocación de renderItems, 
//recurriendo nuevamente a innerHTML o appendChild


*/

//ul.innerHTML = 'woody';
// return 'example';
