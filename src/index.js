import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, } from 'react-router';
import Routers from './router.js'
import './assets/css/reset.css'
import './assets/js/resizi'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers history = {browserHistory}></Routers>, document.getElementById('root'));
// registerServiceWorker();
