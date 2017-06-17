import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'
import Menu from './Menu';
import Message from './Message';
import Order from './Order';
import Address from './Address';


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
       currentPage:'Order',
      pageComponent2:["Message","Order","Address"]

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
          Address:Address
        }
        const Page=pageComponent[this.state.currentPage];

          const disp=this.state.pageComponent2.map((p)=>
       <Page/>
  　);


    return (
      <div>
        <p>ここはメインメニューです</p>
                {disp}
        <p><Link to="/uramenu">裏ニューへ</Link></p>
          {this.state.myid!==''?<Menu myid={this.state.myid} onChange={this.changeMenu}/>:''}
        {this.state.myid!==''?<Page myid={this.state.myid}/>:''}
         <button onClick={()=>{this.movepage('Message')}}>Change!</button>
 
      </div>

    );
  }
}

export default Mainmenu;
