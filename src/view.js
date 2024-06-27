export const renderItems = (data) => {
  const ul = document.createElement("ul");

  data.forEach((pelicula) => {
    const li = document.createElement("li");
    li.classList.add("tarjeta")
    li.innerHTML = `
    <div>
      <div class="titulo"><h3 itemprop = "name"> ${pelicula.name} </h3> </div>
      <div class="contenedorContenido">
      <div class="contenedorImagen"><img class="imagenPeli" src="${pelicula.imageUrl}" alt="${pelicula.id}"></div>
      <div class="contenedorTextos">
      <div class="descripcion"> <span> Descripción: ${pelicula.shortDescription}</span> </div>
      <div class="resumen"> <p>Resumen: ${pelicula.description}</p> </div>
      <div class="hechos"> 
        <p>Año de estreno: ${pelicula.facts.estreno}</p>
        <p>Género de pelicula: ${pelicula.facts.generoPelicula}</p>
        <p>Clasificacion de publico: ${pelicula.facts.clasificPublico}</p>
        <p>Tiempo de duración: ${pelicula.facts.tiempoDuracion}</p>
      </div>
      </div>
      </div>
    </div>
`;
    ul.appendChild(li);
  });
  return ul;
};
