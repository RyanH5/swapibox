import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));

