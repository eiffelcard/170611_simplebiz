import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';


class Home extends Component {

  constructor(props){
    super(props);
     this.state = {
     };
   }
  render() {
    return (
      <div className="biz-home">
        <h1>eiffel<br/>Simple Biz!</h1>
        <p className="App-intro">
        簡単にお礼状が送れます<br/>今なら無料お試し実施中
        </p>
        <Login />
        <br/>
        <Link to="/register">新規登録へ</Link>
      </div>
    );
  }
}

export default Home;
