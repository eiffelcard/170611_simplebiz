import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'



class Mainmenu extends Component {
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
        <p>ここはメインメニューです</p>
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
