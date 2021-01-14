

const personajes = ['Goku','Vegete','Trunks'];
const [ ,, p3 ] = personajes;


export const retornaArreglo = () => {
    return ['ABC', 123];
}

// const [ letras, numeros ] = retornaArreglo();


const state = ( valor ) => {
    return [ valor, () => { console.log('Hola mundo') } ];
}




