import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'


class GetHeader extends Component {
  constructor(props){
    super(props);
     this.state = {
       baseUrl: 'https://skyutility.eiffelcard.com/API/',
       baseUserImageUrl: 'https://skyutility.eiffelcard.com/pic/users_picture/',
       userNoimage: '/img/no-image.jpg',
       baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
       id: '',
       myname: '',
       mypicture:''
     };
     this.getHeader = this.getHeader.bind(this);
     this.parentIdChange=this.parentIdChange.bind(this);
   }

   componentWillMount(){
     console.log("will");
     this.getHeader();
   }

   getHeader(){
     console.log('login');
     request.post(this.state.baseUrl+"Page/header.php").type('form').send({authtoken: localStorage.getItem('authtoken')})
        .end((err, res)=> {
          if (err) {
            console.log(err);
          } else {
            if(res.body.status!=200){
              //  location.href = "/";
            }

            console.log(res.body);
            console.log(res.body.id+':token:'+res.body.authtoken);
            window.localStorage.setItem('authtoken', res.body.authtoken);
            this.setState({
              id:res.body.id,
              myname:res.body.name,
              mypicture:res.body.picture
            });
             this.parentIdChange(this.state.id);
          }
      });

  }

  parentIdChange(e){
     this.props.onChange(e);
   }


  render() {
    return (
      <div>
          <p>idは{this.state.id}。<br/>
          こんにちは、{this.state.myname}さん</p>
         <img src={this.state.baseUserImageUrl+this.state.mypicture} style={{width: 200, height: 200}} />
      </div>
    );
  }
}

export default GetHeader;
