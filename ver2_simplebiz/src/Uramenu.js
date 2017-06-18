import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'
import MenuPage from './MenuPage';
import Message from './Message';
import Order from './Order';
import Address from './Address';
import Setting from './Setting';
import Payment from './Payment';
import Mypage from './Mypage';
import Header from './Header';

class Uramenu extends Component {
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
       currentPage:'Setting',
       menutype:"B"
     };
      this.changeMenu = this.changeMenu.bind(this);

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

   movepage(name){
    this.setState({
    currentPage:name
    });
   }

    changeMenu(name) {
    this.setState({
      currentPage: name
    });
  }


  render() {

         const pageComponent={
          Message:Message,
          Order:Order,
          Address:Address,
          Payment:Payment,
          Setting:Setting,
          Mypage:Mypage
        }
        const Page=pageComponent[this.state.currentPage]
    return (
         <div>
        <div>
          {this.state.myid !== '' ? <MenuPage myid={this.state.myid} onChange={this.changeMenu} menutype={this.state.menutype} /> : ''}
        </div>
        <div>
          {this.state.myid !== '' ? <Page myid={this.state.myid} /> : ''}
          <button onClick={() => { this.movepage('Message') }}>Change!</button>
        </div>
      </div>

    );
  }
}

export default Uramenu;
