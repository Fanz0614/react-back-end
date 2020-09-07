import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
import './style.css';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDom.render(
       
       <App />,
       
      // <h1>hello world</h1>,
    document.getElementById('app')
);