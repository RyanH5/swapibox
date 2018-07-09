import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './statefulComponents/App/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />
  , document.getElementById('root'));
registerServiceWorker();
