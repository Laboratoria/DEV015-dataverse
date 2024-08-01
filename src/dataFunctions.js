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
  const filterGender = data.filter((item) => item.facts[filterBy] === value); //le damos un valor al filtro que llamamos de nuestra data.js
  return filterGender;
};

export const computeStats = (data) => {
  const total = data.length;

  const stats = data.reduce((acc, item) => {
    if (item.facts.Pet === 'Cat') {
      acc.catCount += 1;
    } else if (item.facts.Pet === 'Dog') {
      acc.dogCount += 1;
    }

    if (item.facts["Pet size"] === 'Small'){
      acc.smallCount += 1;
    } else if (item.facts["Pet size"] === 'Big'){
      acc.bigCount += 1;
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
    femaleCount: 0,
    smallCount: 0,
    bigCount: 0,
  });

  const petCatAvg = (stats.catCount / total) * 100;
  const petDogAvg = (stats.dogCount / total) * 100;
  const genderMaleAvg = (stats.maleCount / total) * 100;
  const genderFemaleAvg = (stats.femaleCount / total) * 100;
  const petSizeSmallAvg = (stats.smallCount / total) * 100;
  const petSizeBigAvg = (stats.bigCount / total) * 100;

  return {
    petCatAvg: petCatAvg.toFixed(2),
    petDogAvg: petDogAvg.toFixed(2),
    genderMaleAvg: genderMaleAvg.toFixed(2),
    genderFemaleAvg: genderFemaleAvg.toFixed(2),
    petSizeSmallAvg: petSizeSmallAvg.toFixed (2),
    petSizeBigAvg: petSizeBigAvg.toFixed (2),
  };
  
};