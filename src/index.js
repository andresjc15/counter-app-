import ReactDOM from 'react-dom'

import './index.css';

// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#app');

// ReactDOM.render( <PrimeraApp saludo = "Hola, Soy Vegeta" subtitulo = 'Soy el subititulo, pero no default'/>, divRoot );

ReactDOM.render( <CounterApp value = { 10 } />, divRoot );