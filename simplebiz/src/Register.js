import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';


class Register extends Component {
  constructor(props){
    super(props);
     this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/API/',
      baseUserImageUrl: 'https://skyutility.eiffelcard.com/pic/users_picture/',
      userNoimage: '/img/no-image.jpg',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      id: '',
      name: '',
      email:'',
      password:''
     };
   }


  



  render() {
    return (
      <div className="App">
        <h1>eiffel<br/>Simple Biz!</h1>
        <p>新規登録画面</p>
          <RegisterForm />
      </div>
    );
  }
}

export default Register;
