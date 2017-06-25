import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom';


class RegisterForm extends Component {
  constructor(props){
    super(props);
     this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/sky/',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      id: '',
      name: '',
      email:'',
      password:''
     };
     this.getRegister = this.getRegister.bind(this);
     this.onChangeName = this.onChangeName.bind(this);
     this.onChangeEmail = this.onChangeEmail.bind(this);
     this.onChangePassword = this.onChangePassword.bind(this);
   }

  onChangeName(e){
      //console.log(e.target.value);
      this.setState({
      name:e.target.value
        });
    }


   onChangeEmail(e){
     //console.log(e.target.value);
     this.setState({
     email:e.target.value
       });
   }

   onChangePassword(e){
     //console.log(e.target.value);
     this.setState({
     password:e.target.value
       });
   }


   getRegister(){
     console.log('login');
      request.post(this.state.baseUrl+"user.php").type('form').send({ email:this.state.email, password:this.state.password,name:this.state.name,continue:0 })
        .end((err, res)=> {
          if (err) {
            console.log(err);
          } else {
            console.log(res.body.status+res.body.error_message);
            console.log(res.body.id+':token:'+res.body.authtoken);
            window.localStorage.setItem('authtoken', res.body.authtoken);
            this.setState({
              id:res.body.id
            });
          window.location.href = "/mainmenu";
          }
      });

  }




  render() {
    return (
      <div className="App">
            <input type='text' value={this.state.name} placeholder='name' 　onChange={this.onChangeName}/><br/>
            <input type='text' value={this.state.email} placeholder='email' 　onChange={this.onChangeEmail}/><br/>
            <input type='text' value={this.state.password} placeholder='password' onChange={this.onChangePassword}/>
            <div onClick={this.getRegister}>新規登録</div>
           <p>{this.state.id}</p>
      </div>
    );
  }
}

export default RegisterForm;
