import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Home from './Home';
import Register from './Register';
import Mainmenu from './Mainmenu';
import Message from './Message';
import Order from './Order';
import Address from './Address';



ReactDOM.render(
  <BrowserRouter>
    <App>
    <Route exact path="/" component={Home}/>
    <Route exact path="/register" component={Register}/>
     <Route exact path="/mainmenu" component={Mainmenu}/>
     <Route exact path="/Message" component={Message}/>
     <Route exact path="/Order" component={Order}/>
     <Route exact path="/Address" component={Address}/>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);