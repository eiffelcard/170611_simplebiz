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
       myid:'',
       myname:'',
       mypicture:'',
       message:'eiffelは住所を知らない友だちにも手紙や物が贈れるサービスです。登録はQRカードからお願いします',

     };
   }
  componentWillMount(){
  console.log("will");
  this.checkSession();
}
 checkSession(){
     console.log('check_session start');
      request.post(this.state.baseUrl+'session.php').type('form').send({ authtoken:window.localStorage.getItem('authtoken')})
        .end((err, res)=> {
          if (err) {
            console.log(err);
            window.location.href = "/";
          } else if (res.body.status==200) { 
            this.setState({
            authtoken:res.body.authtoken,
            myid:res.body.myid,
            name:res.body.name
            });
            console.log('check_session done');
          }else{
            console.log(res.body.status);
            console.log(res.body.error_message);
             window.location.href = "/";
          }
      });
   }

   


  render() {
    return (
      <div>
        <p>ここはオーダーです</p>
        <p><Link to="/mainmenu">メインメニューへ</Link></p>
        <OrderList myid={this.state.myid} />
      </div>

    );
  }
}

export default Order;
