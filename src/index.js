//Elemento que queremos crear
// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

//Donde lo queremos poner
// const container = document.getElementById('app');

//Que queremos añadir
// container.appendChild(element);


// USANDO REACT
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import App from './components/App';
/* const element = React.createElement('a',{
    href:'https://platzi.com'
},'Ir a Platzi')
*/
/* const name = 'Matias'
const jsx= <h1>Hello, Platzi. Soy {name}</h1>;
//const element = React.createElement('h1',{},`Hola soy ${var}`)
*/

/* const jsx = (
    <div>
        <h1>Hola soy Matias</h1>
        <p>Soy ingeniero.</p>
    </div>
)
 */

const container = document.getElementById('app');

//Analogo a apend child
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
