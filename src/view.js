export const renderItems = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("ulPelis");

  data.forEach((pelicula) => {
    const li = document.createElement("li");
    li.classList.add("tarjetasPelis")
    li.innerHTML = `
    <div class="tarjeta">
      <div class="titulo"><h3 itemprop = "name"> ${pelicula.name} </h3> </div>
      <img class="imagenPeli" src="${pelicula.imageUrl}" alt="${pelicula.id}">
      <div class="descripcion"> <p> Descripción: ${pelicula.shortDescription}</p> </div>
      <div class="resumen"> <p>Resumen: ${pelicula.description}</p> </div>
      <div class="hechos"> 
        <p>Año de estreno: ${pelicula.facts.estreno}</p>
        <p>Género de pelicula: ${pelicula.facts.generoPelicula}</p>
        <p>Clasificacion de publico: ${pelicula.facts.clasificPublico}</p>
        <p>Tiempo de duración: ${pelicula.facts.tiempoDuracion}</p>
      </div>
      <div class="curiosidades"> <p>Curiosidades: ${pelicula.extraInfo.curiosidades}</p> </div>
    </div>
`;
    ul.appendChild(li);
  });
  return ul;
};
