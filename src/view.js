  export const renderItems = (data) => {

    //Crear un elemento <ul> utilizando el método createElement.
    const ul = document.createElement("ul");
    //Recorrer la data mediante un bucle o algún método de array como forEach o map
    data.forEach(item => {
      //Por cada elemento de la data, crear un elemento <li>.
      const li = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = item.name;

        const shortDescription = document.createElement("p");
        shortDescription.textContent = item.shortDescription;

        const description = document.createElement("p");
        description.textContent = item.description;

        const image = document.createElement("img");
        image.src = item.imageUrl;//La URL se obtiene del objeto item y su propiedad imageUrl.
        image.alt = item.name;//El nombre se obtiene del objeto item y su propiedad name.

        // Crear un contenedor para los facts(datos adicionales)
        const factsContainer = document.createElement("div");

        const gender = document.createElement("p");
        gender.textContent = `Género: ${item.facts.gender}`;

        const year = document.createElement("p");
        year.textContent = `Año: ${item.facts.year}`;

        const chapters = document.createElement("p");
        chapters.textContent = `Capítulos: ${item.facts.chapters}`;

        // Agregar los elementos al <li>
        li.appendChild(title);
        li.appendChild(shortDescription);
        li.appendChild(description);
        li.appendChild(image);
        li.appendChild(factsContainer);

        // Agregar los facts al contenedor de facts
        factsContainer.appendChild(gender);
        factsContainer.appendChild(year);
        factsContainer.appendChild(chapters);
        // Agregar cada <li> al <ul> utilizando appendChild.
        ul.appendChild(li);

     });
     //Finalmente, retornar el elemento <ul>
      return ul;
 //console.log(data)

//return 'example';

    }



