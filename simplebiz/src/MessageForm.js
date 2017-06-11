import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      id: '',
      name: '',
      postcode: '',
      state: '',
      city: '',
      street: '',
      building: '',
      title: '',
      delivery_name: '',
      message: '',
      product: '',
      font_size: ''
    };
    this.getRegister = this.getRegister.bind(this);
    this.onChangePostcode = this.onChangePostcode.bind(this);
    this.onChangesState = this.onChangesState.bind(this);
    this.onChangesCity = this.onChangesCity.bind(this);
    this.onChangesStreet = this.onChangesStreet.bind(this);
    this.onChangesBuilding = this.onChangesBuilding.bind(this);
    this.onChangesDeliveryName = this.onChangesDeliveryName.bind(this);
     this.onChangesTitle = this.onChangesTitle.bind(this);
      this.onChangesMessage = this.onChangesMessage.bind(this);
  }

  onChangePostcode(e) {
    //console.log(e.target.value);
    this.setState({
      postcode: e.target.value
    });
  }


  onChangesState(e) {
    //console.log(e.target.value);
    this.setState({
      state: e.target.value
    });
  }

  onChangesCity(e) {
    //console.log(e.target.value);
    this.setState({
      city: e.target.value
    });
  }
   onChangesStreet(e) {
    //console.log(e.target.value);
    this.setState({
      street: e.target.value
    });
  }
  onChangesBuilding(e) {
    //console.log(e.target.value);
    this.setState({
      building: e.target.value
    });
  }
  onChangesDeliveryName(e) {
    //console.log(e.target.value);
    this.setState({
      delivery_name: e.target.value
    });
  }
   onChangesTitle(e) {
    //console.log(e.target.value);
    this.setState({
      title: e.target.value
    });
  }
    onChangesMessage(e) {
    //console.log(e.target.value);
    this.setState({
      message: e.target.value
    });
  }


  getRegister() {
    console.log('login');
    request.post(this.state.baseUrl + "order.php").type('form').send({ email: this.state.email, password: this.state.password, name: this.state.name, continue: 0 })
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

        }
      });

  }




  render() {
    return (
      <div className="App">
        <input type='text' value={this.state.postcode} placeholder='postcode' onChange={this.onChangePostcode} /><br />
        <input type='text' value={this.state.state} placeholder='都道府県' onChange={this.onChangesState} /><br />
        <input type='text' value={this.state.city} placeholder='市町村' onChange={this.onChangesCity} /><br />
        <input type='text' value={this.state.street} placeholder='番地' onChange={this.onChangesStreet} /><br />
        <input type='text' value={this.state.building} placeholder='ビル名など' onChange={this.onChangesBuilding} /><br />
          <input type='text' value={this.state.title} placeholder='肩書き' onChange={this.onChangesTitle} /><br />
        <input type='text' value={this.state.delivery_name} placeholder='送り先' onChange={this.onChangesDeliveryName} /><br />
        <input type='textarea' value={this.state.message} placeholder='message' onChange={this.onChangesMessage}  style={{width: 200, height: 100}} /><br />
        <div onClick={this.getRegister}>新規登録</div>
       
      </div>
    );
  }
}

export default MessageForm;
