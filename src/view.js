export const renderItems = (data) => {
  const ul = document.createElement("ul");
  data.forEach((pelicula) => {
    const li = document.createElement("li");
    li.innerHTML = `
<div class="tarjeta">
  <div class="titulo"><h3 itemprop = "name"> Nombre: ${pelicula.name} </h3> </div>
  <img src="${pelicula.imageUrl}" alt="${pelicula.id}">
  <div class="descripcion"> <p> Descripción: ${pelicula.shortDescription}</p> </div>
  <div class="resumen"> <p>Resumen: ${pelicula.largeDescription}</p> </div>
    <div class="hechos"> 
    <p>Año de estreno: ${pelicula.estreno}</p>
    <p>Género de pelicula: ${pelicula.generoPelicula}</p>
    <p>Clasificación de pelicula: ${pelicula.clasificacionPelicula}</p>
    <p>Clasificacion de publico: ${pelicula.clasificacionPublico}</p>
    <p>Tiempo de duración: ${pelicula.tiempoDuracion}</p>
    </div>
    <div class="curiosidades"> <p>Curiosidades: ${pelicula.curiosidades}</p> </div>
</div>
`;
    ul.appendChild(li);
  });
  return ul;
};
