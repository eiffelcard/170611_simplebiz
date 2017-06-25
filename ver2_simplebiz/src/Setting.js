import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'


class Setting extends Component {
  constructor(props){
    super(props);
     this.state = {
       baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/sky/',
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
        <p>ここはSettingです</p>
     
      </div>

    );
  }
}

export default Setting;
