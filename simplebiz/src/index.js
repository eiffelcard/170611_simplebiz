import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Home from './Home';
import Register from './Register';



ReactDOM.render(
  <BrowserRouter>
    <App>
    <Route exact path="/" component={Home}/>
    <Route exact path="/register" component={Register}/>

    </App>
  </BrowserRouter>,
  document.getElementById('root')
);