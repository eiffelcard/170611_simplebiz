import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Login from './Login';
import Mainmenu from './Mainmenu';
import BizHome from './BizHome';
import Home from './Home';
import CardListDisp from './CardListDisp';

ReactDOM.render(
  <BrowserRouter>
    <App>
    <Route exact path="/" component={Home}/>
    <Route path="/mainmenu" component={Mainmenu}/>
    <Route path="/login" component={Login}/>
    <Route path="/cardlist" component={CardListDisp}/>
    <Route exact path="/biz" component={BizHome}/>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
