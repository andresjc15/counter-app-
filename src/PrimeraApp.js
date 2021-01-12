// import { Fragment } from "react";

import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <p> { subtitulo } </p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    persona: PropTypes.object
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy el subtítulo'
}

export default PrimeraApp;