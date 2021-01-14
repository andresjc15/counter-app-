import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'Elpapu154'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );

    })

    test('getUser debe retornar un objeto', () => {
        
        const nombre = 'jaime';
        const userTest = {
            uid: 'ABC1563',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);
        console.log(user)

        expect( user ).toEqual( userTest );

    })
    

})
