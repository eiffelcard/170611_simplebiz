import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'
import CardListDisp from './CardListDisp';
import CheckMessage from './CheckMessage';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
       baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      myid: '',
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
      font_size: '22'
    };
    this.getOrder = this.getOrder.bind(this);
    this.onChangePostcode = this.onChangePostcode.bind(this);
    this.onChangesState = this.onChangesState.bind(this);
    this.onChangesCity = this.onChangesCity.bind(this);
    this.onChangesStreet = this.onChangesStreet.bind(this);
    this.onChangesBuilding = this.onChangesBuilding.bind(this);
    this.onChangesDeliveryName = this.onChangesDeliveryName.bind(this);
    this.onChangesTitle = this.onChangesTitle.bind(this);
    this.onChangesMessage = this.onChangesMessage.bind(this);
    this.ChangeProduct = this.ChangeProduct.bind(this);
  };

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

  ChangeProduct(e) {
    this.setState({
      product: e
    });
  }


  getOrder() {
    console.log('login');
    request.post(this.state.baseUrl + "order.php").type('form').send({
      myid: this.state.myid,
      product: this.state.product,
      message: this.state.message,
      postcode: this.state.postcode,
      state: this.state.state,
       city: this.state.city,
       street: this.state.street,
         building: this.state.building,
          title: this.state.title,
      delivery_name:this.state.delivery_name
    })
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res.body.status + res.body.error_message);
          console.log('オーダー成功！')
          this.setState({
            id: res.body.id
          });

        }
      });

  }



  render() {
    return (
      <div>
        <p>ここはメッセージです</p>
        <CardListDisp product={this.state.product} onChange={this.ChangeProduct} />
        <input type='text' value={this.state.postcode} placeholder='postcode' onChange={this.onChangePostcode} /><br />
        <input type='text' value={this.state.state} placeholder='都道府県' onChange={this.onChangesState} /><br />
        <input type='text' value={this.state.city} placeholder='市町村' onChange={this.onChangesCity} /><br />
        <input type='text' value={this.state.street} placeholder='番地' onChange={this.onChangesStreet} /><br />
        <input type='text' value={this.state.building} placeholder='ビル名など' onChange={this.onChangesBuilding} /><br />
        <input type='text' value={this.state.title} placeholder='肩書き' onChange={this.onChangesTitle} /><br />
        <input type='text' value={this.state.delivery_name} placeholder='送り先' onChange={this.onChangesDeliveryName} /><br />
        <input type='textarea' value={this.state.message} placeholder='message' onChange={this.onChangesMessage} style={{ width: 200, height: 100 }} /><br />
        <div onClick={this.getOrder}>新規登録</div>
        <CheckMessage postcode={this.state.postcode} state={this.state.state} city={this.state.city} 
         street={this.state.street} product={this.state.product} building={this.state.building} title={this.state.title}  delivery_name={this.state.delivery_name} message={this.state.message} onChange={this.ChangeProduct} /> 
     


      </div>

    );
  }
}

export default Message;
