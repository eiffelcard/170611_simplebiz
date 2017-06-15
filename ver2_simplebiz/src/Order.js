import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'
import OrderList from './OrderList';

class Order extends Component {
  constructor(props){
    super(props);
     this.state = {
       baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/',
       baseUserImageUrl: 'https://skyutility.eiffelcard.com/pic/users_picture/',
       userNoimage: '/img/no-image.jpg',
       baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
       myname:'',
       mypicture:'',
       message:'eiffelは住所を知らない友だちにも手紙や物が贈れるサービスです。登録はQRカードからお願いします',

     };
   }
  componentWillMount(){
  console.log("will1");
}

   


  render() {
    return (
      <div>
        <p><Link to="/mainmenu">メインメニューへ</Link></p>
       {this.props.myid!==''?<OrderList myid={this.props.myid} />:''}
  
      </div>

    );
  }
}

export default Order;
