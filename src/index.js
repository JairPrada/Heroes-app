import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import RutasPrincipal from './routers/RutasPrincipal';

ReactDOM.render(
  <div >
    <RutasPrincipal />
  </div>
  , document.getElementById('root'));

reportWebVitals();
