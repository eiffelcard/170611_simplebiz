import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'


class Mainmenu extends Component {
  constructor(props){
    super(props);
     this.state = {
       baseUrl: 'https://skyutility.eiffelcard.com/API/',
       baseUserImageUrl: 'https://skyutility.eiffelcard.com/pic/users_picture/',
       userNoimage: '/img/no-image.jpg',
       baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
       myid:'',
       myname:'',
       mypicture:'',
       message:'eiffelは住所を知らない友だちにも手紙や物が贈れるサービスです。登録はQRカードからお願いします',
       CardOrder:[],
       funnymessage:'helloooooo'
     };
   }

  render() {
    return (
      <div>
        <p>ここはメインメニューです</p>
        <div onClick={this.getLogin}>
        もう一回ログイン
        </div>
       <div onClick={this.sendOrder}>
        これでカードを登録する
        </div>
        <p>{this.state.funnymessage}</p>
        <p><Link to="/message">手紙を作成</Link></p>
        <p><Link to="/address">住所管理</Link></p>
        <p><Link to="/order">オーダー確認</Link></p>
     
      </div>

    );
  }
}

export default Mainmenu;
