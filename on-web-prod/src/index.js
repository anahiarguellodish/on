import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/map.css';
import './css/paquete_satelital.css';
import './css/form_acces.css';



import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
