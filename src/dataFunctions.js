export const sortData = (data, sortBy, sortOrder) => {
  const dataORder = data.sort((a, z) => {
    const valueA = a[sortBy];
    const valueZ = z[sortBy];

    if (valueA < valueZ) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (valueA > valueZ) {
      return sortOrder === "asc" ? 1 : -1;
    }

    return 0;
  });
  return dataORder;
};

export const filterData = (data, filterBy, value) => {
  if (filterBy === 'Gender') {
    const filterGender = data.filter((item) => item.facts[filterBy] <= value); //le damos un valor al filtro que llamamos de nuestra data.js
    return filterGender;
  }
  if (filterBy === 'Pet') {
    const filterPet = data.filter((item) => item.facts[filterBy] <= value);
    return filterPet;
  }
  if (filterBy === 'Pet size') {
    const filterSize = data.filter((item) => item.facts[filterBy] <= value); 
    return filterSize; 
  }
};

export const computeStats = (data) => {
  const total = data.length;

  const stats = data.reduce((acc, item) => {
    if (item.facts.Pet === 'Cat') {
      acc.catCount += 1;
    } else if (item.facts.Pet === 'Dog') {
      acc.dogCount += 1;
    }

    if (item.facts.Gender === 'Male') {
      acc.maleCount += 1;
    } else if (item.facts.Gender === 'Female') {
      acc.femaleCount += 1;
    }

    return acc;
  }, {
    catCount: 0,
    dogCount: 0,
    maleCount: 0,
    femaleCount: 0
  });

  const petCatAvg = (stats.catCount / total) * 100;
  const petDogAvg = (stats.dogCount / total) * 100;
  const genderMaleAvg = (stats.maleCount / total) * 100;
  const genderFemaleAvg = (stats.femaleCount / total) * 100;

  return {
    petCatAvg: petCatAvg.toFixed(2),
    petDogAvg: petDogAvg.toFixed(2),
    genderMaleAvg: genderMaleAvg.toFixed(2),
    genderFemaleAvg: genderFemaleAvg.toFixed(2)
  };
  
};
















/*  const petCat = reduce(data);
  if(stats.facts.petCat==="femenino"){
    return totalCat + 1;
  } else {
    return totalCat;
  }
  }, 0);
  const percentage = (computeStats / data.length)
  return percentage.toFixed(2);



  export const genderMaleStats = function (data) {
    const genderMale = data.reduce(
      (totalCat, cat) => {
        if (item.facts.Pet < Dog) 
      }
    )
  }
  
  /*const total = [0, 1, 2, 3].reduce(function (petCat,petDog) {
    return petCat,petDog;
  });
  const petCat = petCatStats(data);*/

  // usar reduce
  
  /*function add(petCat,petDog){
    return petCat + petDog
  }

  function add(genderMale,genderFemale){
    return genderMale + genderFemale
  }*/


  //aqui le digo cual es el filtro que quiero que haga. 
  //crear la funcion computestatsdata
  //realizar calculos segun el criterio