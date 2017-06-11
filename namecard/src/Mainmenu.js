import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'
import GetHeader from './GetHeader'
import CardListDisp from './CardListDisp'
import Message from './Message'

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
       funnymessage:''
     };
    this.getLogin = this.getLogin.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.changeCardOrder = this.changeCardOrder.bind(this);
    this.sendOrder = this.sendOrder.bind(this);
    this.changeId = this.changeId.bind(this);
   }

   changeMessage(e){
     this.setState({
     message:e
       });
   }

   changeCardOrder(e){
     this.setState({
     CardOrder:e
       });
   }

   changeId(e){
     console.log('changeidは通った')
     this.setState({
     myid:e
       });
   }

   getLogin(){
     console.log('login');
      request.post(this.state.baseUrl+"Login/login.php").type('form').send({ email:'yuuki@test.com', password:'123456',continue:0 })
        .end((err, res)=> {
          if (err) {
            console.log(err);
          } else {
            console.log(res.body.status+res.body.error_message);
            console.log(res.body.id+':token:'+res.body.authtoken);
            window.localStorage.setItem('authtoken', res.body.authtoken);
            this.setState({
              myid:res.body.id
            });
          }
      });
  }


  postdata(){
    request.post('https://skyutility.eiffelcard.com/ynoda_test/test.php').type('form').send({ myid:this.state.myid, message:this.state.message,'card[]':this.state.CardOrder})
      .end((err, res)=> {
        if (err) {
          console.log(err);
        } else {
          console.log(res.body.status+res.body.error_message);
          console.log(res.body.id+':token:'+res.body.authtoken);
          window.localStorage.setItem('authtoken', res.body.authtoken);
          this.setState({
            myid:res.body.id
          });
        }
    });
  }


  sendOrder(){
    console.log('送信します!')
    console.log(this.state.myid);
    console.log(this.state.message);
    console.log(this.state.CardOrder);
    this.postdata();
    const fm='はっはっはっ！実はAPIはまだできてないよ!';
    this.setState({
      funnymessage:this.state.funnymessage+fm
    });
  }


  render() {
    return (
      <div>
        <p>ここはメインメニューです</p>
        <div onClick={this.getLogin}>
        もう一回ログイン
        </div>
        <GetHeader onChange={this.changeId} />
        <CardListDisp order={this.state.CardOrder} onChange={this.changeCardOrder}/>
        <Message message={this.state.message} onChange={this.changeMessage}/>
        <div onClick={this.sendOrder}>
        これでカードを登録する
        </div>
        <p>{this.state.funnymessage}</p>
      </div>

    );
  }
}

export default Mainmenu;
