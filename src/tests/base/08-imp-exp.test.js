import { getHeroesById, getHeroesByOwner } from "../../base/08-imports-exports";
import heroes from "../../datos/heroes";

describe('Pruebas en funciones de Héroes', () => {

    test('Debe de retornar un héroe por id', () => {
        
        const id = 1;
        const heroe = getHeroesById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
        
    });

    test('Debe de retornar undefined si el héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroesById( id );

        expect( heroe ).toEqual( undefined );
        
    });

    test('Debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );
        
    });

    test('Debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        
    });
    
    
})
