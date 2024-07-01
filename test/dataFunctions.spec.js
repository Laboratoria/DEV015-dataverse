import { filterData, computeStats } from '../src/dataFunctions.js';
import data from '../src/data.js';
//import { fakeData } from './dataFunctions.spec.js';

describe("filterData", () => {
  it("should filter pets by type and return the quantity of cats", () => {
    const totalCats = filterData(data, "Pet", "Cat");
    expect(totalCats.length).toBe(12); // ¿Cuántos gatos tenemos?
  });

  it("should filter pets by type and return the quantity of dogs", () => {
    const totalDogs = filterData(data, "Pet", "Dog");
    expect(totalDogs.length).toBe(12); // ¿Cuántos perros tenemos?
  });

  it("should filter pets by gender and return the quantity of males", () => {
    const totalMales = filterData(data, "Gender", "Male");
    expect(totalMales.length).toBe(11); // ¿Cuántos machos tenemos?
  });

  it("should filter pets by gender and return the quantity of females", () => {
    const totalFemales = filterData(data, "Gender", "Female");
    expect(totalFemales.length).toBe(13); // ¿Cuántas hembras tenemos?
  });

  it("should filter pets by size and return the quantity of small pets", () => {
    const totalSmallPets = filterData(data, "Pet size", "Small");
    expect(totalSmallPets.length).toBe(14); // ¿Cuántos pequeños tenemos?
  });

  it("should filter pets by size and return the quantity of big pets", () => {
    const totalBigPets = filterData(data, "Pet size", "Big");
    expect(totalBigPets.length).toBe(10); // ¿Cuántos grandes tenemos?
  });
});


describe("computeStats", () => {
  it("should compute the correct statistics for the dataset", () => {
    const stats = computeStats(data);
    expect(stats.petCatAvg).toBe('50.00'); // Porcentaje de gatos
    expect(stats.petDogAvg).toBe('50.00'); // Porcentaje de perros
    expect(stats.genderMaleAvg).toBe('45.83'); // Porcentaje de machos
    expect(stats.genderFemaleAvg).toBe('54.17'); // Porcentaje de hembras
  });
});

