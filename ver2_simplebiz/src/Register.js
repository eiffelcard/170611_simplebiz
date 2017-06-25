import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';


class Register extends Component {
  constructor(props){
    super(props);
     this.state = {
     baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/sky',
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
          <RegisterForm />
      </div>
    );
  }
}

export default Register;
