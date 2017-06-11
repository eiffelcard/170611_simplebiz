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
        <h1>eiffel<br/>オリジナル招待カード</h1>
        <p className="App-intro">
        好きなデザインを8枚選んで<br/>自分だけの紹介カードを作ろう！
        </p>
        <Login />
        <br/>
        <Link to="/biz">bizのサービスへ</Link>
      </div>
    );
  }
}

export default Home;
