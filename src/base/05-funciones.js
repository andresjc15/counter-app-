
// Funciones en JS

// const saludar = function ( nombre ) {
//     return `Hola ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

const saludar4 = () => `Hello world`;

// console.log( saludar('Felipe') );


export const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Elpapu154'
    }
}


export const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC1563',
        username: nombre
    })
