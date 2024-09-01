import { filterData,sortData,computeStats/*,decadasData*/} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


//PRUEBA PARA EL METODO FILTER 
describe ('filterData function', () => {
  it('should return  añoCreacion from "filterDataResult"', () => {
    expect(filterData(fakeData,'1980')).toEqual([{"facts": {"añoCreacion": "1980"}}]);
  });
  it('should return  all elements when "all" is pased', () => {
    expect(filterData(fakeData,'all')).toEqual(fakeData);
  });
});

//PRUEBA DE METODO SORT
describe ('sortData function', () => {
  it('should return names in ascending order when "asc" is passed', () => {
    expect(sortData(fakeData,'name','asc')[0]).toEqual({facts: { name: 'Catalina'}}); /*aqui comprueba que el resultado es correcto*/
  });
});

// PRUEBA DE METODO COMPUTESTAT
describe ('computeStats function', () => {
  it('should returns the country which created more band "Pais" is passed', () => {
    const calcularPromedio = (3/15)*100; /* toma los 15 elementos en vez de los 8 paises?????*/
    expect(computeStats(fakeData)).toEqual(calcularPromedio); /*Aqui comprueba que el resultado es correcto*/
  });
});

