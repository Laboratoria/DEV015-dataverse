// SORT-----------------------------------------------------------------------------------
export const sortData = (data, sortBy, sortOrder) => {

  const dataOrder = data.map((item) => item);
  dataOrder.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });
  return dataOrder;
};

// FILTRO---------------------------------------------------------------------------------
export const filterData = (data, filterBy, value) => {
  if (filterBy === "gender") {
    const filterGender = data.filter((item) => item.facts[filterBy] === value);
    return filterGender;
  }

  if (filterBy === "age") {
    if (value <= 20) {
      const menores20 = data.filter((item) => item.facts[filterBy] <= value);
      return menores20;
    }
    if (value > 20 && value <= 30) {
      const menores30 = data.filter(
        (item) => item.facts[filterBy] <= value && item.facts[filterBy] > 20
      );
      return menores30;
    }
    if (value > 30) {
      const mayores30 = data.filter((item) => item.facts[filterBy] > value);
      return mayores30;
    }
  }

  if (filterBy === 'city'){
    if (value === 'Nueva York'){
      const ny = data.filter((item) => item.facts[filterBy] === value);
      return ny
    } else {
      const others = data.filter((item) => item.facts[filterBy] !== value)
      return others
    }

  }



};

//STATS PORCENTAJES------------------------------------------------------------------
export const computeStats = (data, dataTotal) => {
  
  const percentage = (data.length / dataTotal.length) * 100 ;
  return percentage.toFixed(2);
  
}

//PROMEDIO DE EDAD---------------------------------------------------------------------

export const averageStats = (data) => {
  
  const average = data.reduce((acumulador, item) => {
    return acumulador + item.facts['age']
  } ,0 )
  return (average /data.length).toFixed()

}

// genderstats retorna objeto con los generos con las cantidades que hay ({femenino, 9}{masculino, 15})
// const genderStats = data.reduce(
//   (acumulador, item) => {
//     const tipoDeFacts = item.facts[type];
//     if (!acumulador[tipoDeFacts]) {
//       acumulador[tipoDeFacts] = 1;
//     } else {
//       acumulador[tipoDeFacts] += 1;
//     }

//     return acumulador
//   },
// );

//convierte en objeto genderstats en un array solo con los generos
 
// recorre el arraystats y los llena con el valor del genderstats  y lo convierte en porcentajes
//   const porcentajes = genderStats.reduce((acumulador, item) => {
//     acumulador[item] = (genderStats[item] / 24 * 100).toFixed(1) + "%";
//     return acumulador;
//   }, {});
  
//   return porcentajes;
//   console.log(genderStats)
// };