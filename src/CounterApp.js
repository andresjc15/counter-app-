import { useState } from 'react';

import PropTypes from 'prop-types';

const CounterApp = ({ value  }) => {

    const [ counter, setCounter ] = useState( value );

    

    // handleAdd
    const handleAdd = (e) => {
        // setCounter( (counter + 1) );
        setCounter( (c) => c + 1 );
    }

    // const handleReset = (e) => {
    //     // setCounter( (counter + 1) );
    //     setCounter( (c) => 0 );
    // }

    // const handleRemove = (e) => {
    //     // setCounter( (counter + 1) );
    //     setCounter( (c) => c - 1 );
    // }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick = { handleAdd }>+1</button>
            <button onClick = { () => setCounter ( 0 ) }>Reset</button>
            <button onClick = { () => setCounter ( counter -1 ) }>-1</button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;