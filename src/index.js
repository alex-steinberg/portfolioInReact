import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title={ "steinrock" }/>, document.getElementById('root'));
registerServiceWorker();
