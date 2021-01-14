import { retornaArreglo } from "../../base/07-deses-arrays";

describe('Pruebas en desestructuracin', () => {
    
    test('Debe retornar un string y un numero', () => {
        
        const [ letras, numeros ] = retornaArreglo();

        // expect( [letras, numeros] ).toEqual( ['ABC', 123] );

        expect( letras ).toBe('ABC');
        expect(  typeof letras ).toBe('string');

        expect( numeros ).toBe(123);
        expect(  typeof numeros ).toBe('number');

    })
    

})
