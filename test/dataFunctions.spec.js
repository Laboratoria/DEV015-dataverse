import { filterData, computeStats, sortData } from '../src/dataFunctions.js';
import { data as testData } from './data.js';
//import { fakeData } from './dataFunctions.spec.js';
//llamar uno con pet, petSize y gender

describe("filterData", () => {
  it("should filter pets by type and return the quantity of cats", () => {
    const totalCats = filterData(testData, "Pet", "Cat");
    expect(totalCats.length).toBe(12); // ¿Cuántos gatos tenemos?
  });

  it("should filter pets by type and return the quantity of dogs", () => {
    const totalDogs = filterData(testData, "Pet", "Dog");
    expect(totalDogs.length).toBe(12); // ¿Cuántos perros tenemos?
  });

  it("should filter pets by gender and return the quantity of males", () => {
    const totalMales = filterData(testData, "Gender", "Male");
    expect(totalMales.length).toBe(12); // ¿Cuántos machos tenemos?
  });

  it("should filter pets by gender and return the quantity of females", () => {
    const totalFemales = filterData(testData, "Gender", "Female");
    expect(totalFemales.length).toBe(12); // ¿Cuántas hembras tenemos?
  });

  it("should filter pets by size and return the quantity of small pets", () => {
    const totalSmallPets = filterData(testData, "Pet size", "Small");
    expect(totalSmallPets.length).toBe(12); // ¿Cuántos pequeños tenemos?
  });

  it("should filter pets by size and return the quantity of big pets", () => {
    const totalBigPets = filterData(testData, "Pet size", "Big");
    expect(totalBigPets.length).toBe(12); // ¿Cuántos grandes tenemos?
  });
});


describe("computeStats", () => {
  it("should compute the correct statistics for the dataset", () => {
    const stats = computeStats(testData);
    expect(stats.petCatAvg).toBe('50.00'); // Porcentaje de gatos
    expect(stats.petDogAvg).toBe('50.00'); // Porcentaje de perros
    expect(stats.genderMaleAvg).toBe('50.00'); // Porcentaje de machos
    expect(stats.genderFemaleAvg).toBe('50.00'); // Porcentaje de hembras
    expect(stats.petSizeSmallAvg).toBe('50.00'); // Porcentaje de pequeños
    expect(stats.petSizeBigAvg).toBe('50.00'); // Porcentaje de grandes
  });
});

describe("sortData", () => {
  it("should sort data by name in ascending order", () => {
    const sortedData = sortData(testData, "name", "asc");
    const expectedOrder = [
      { name: 'Bear', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Belatrix', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Bella', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Buddy', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Charlie', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Chloe', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Cleo', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Daisy', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Duke', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Kitty', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Lola', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Lucy', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Luna', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Max', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Max', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Mittens', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Molly', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Oreo', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Rocky', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Shadow', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Simba', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Tiger', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Toby', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Whiskers', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } }
    ];
    expect(sortedData).toEqual(expectedOrder);
  });

  it("should sort data by name in descending order", () => {
    const sortedData = sortData(testData, "name", "desc");
    const expectedOrder = [
      { name: 'Whiskers', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Toby', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Tiger', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Simba', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Shadow', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Rocky', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Oreo', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Molly', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Mittens', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Max', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Max', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Luna', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Lucy', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Lola', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Kitty', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Duke', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Daisy', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Cleo', facts: { Pet: 'Cat', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Chloe', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Charlie', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Buddy', facts: { Pet: 'Dog', Gender: 'Male', 'Pet size': 'Small' } },
      { name: 'Bella', facts: { Pet: 'Cat', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Belatrix', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
      { name: 'Bear', facts: { Pet: 'Dog', Gender: 'Female', 'Pet size': 'Big' } },
    ];
    expect(sortedData).toEqual(expectedOrder);
  });
});
