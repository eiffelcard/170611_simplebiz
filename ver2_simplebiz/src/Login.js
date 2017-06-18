import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      id: '',
      name: '',
      email: '',
      password: '',
      open: false
    };
    this.getLogin = this.getLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  onChangeEmail(e) {
    //console.log(e.target.value);
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    //console.log(e.target.value);
    this.setState({
      password: e.target.value
    });
  }


  getLogin() {
    console.log('login');
    request.post(this.state.baseUrl + "login.php").type('form').send({ email: this.state.email, password: this.state.password, continue: 0 })
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res.body.status + res.body.error_message);
          console.log(res.body.id + ':token:' + res.body.authtoken);
          window.localStorage.setItem('authtoken', res.body.authtoken);
          this.setState({
            id: res.body.id
          });
          console.log("ログイン完了");
          window.location.href = "/mainmenu";
        }
      });

  }


  handleToggle() {
    this.setState({ open:!this.state.open});
  }
    handleClose() {
    this.setState({ open: false });
  }


  render() {

    const style = {
      paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0',
      },
      rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
      },
      font: {
        color: "red",
        verticalAlign: "middle",
        marginTop: '16px',
      },
      table: {
        marginTop: '16px',
      },
    };


    return (
      <div className="App">
          <div>
        <input type='text' value={this.state.email} placeholder='email' onChange={this.onChangeEmail} /><br />
        <input type='password' value={this.state.password} placeholder='password' onChange={this.onChangePassword} />
         </div>
        <RaisedButton label="ログイン" onClick={this.getLogin} primary={true} />
      </div>
    );
  }
}

export default Login;
