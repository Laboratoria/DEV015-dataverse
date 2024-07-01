// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"
//import { computeStats } from '../src/dataFunctions.js';
import { data } from '../src/data.js';
export const fakeData = [];

const createData = (numCats, numDogs) => {
    const data = [];
    const genders = ['Male', 'Female'];
    const sizes = ['Small', 'Big'];
  
    for (let i = 0; i < numCats; i++) {
      data.push({
        facts: {
          Pet: 'Cat',
          Gender: genders[i % 2], // Alterna entre 'Male' y 'Female'
          "Pet size": sizes[i % 2] // Alterna entre 'Small' y 'Big'
        }
      });
    }
  
    for (let i = 0; i < numDogs; i++) {
      data.push({
        facts: {
          Pet: 'Dog',
          Gender: genders[i % 2], // Alterna entre 'Male' y 'Female'
          "Pet size": sizes[i % 2] // Alterna entre 'Small' y 'Big'
        }
      });
    }
  
    return data;
  };
  
  export const data = createData(12, 12);
  
