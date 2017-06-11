import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom';


class CheckMessage extends Component {
  constructor(props){
    super(props);
     this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/API/',
      baseUserImageUrl: 'https://skyutility.eiffelcard.com/pic/users_picture/',
      userNoimage: '/img/no-image.jpg',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      myid:this.props.myid,
      name: '',
      postcode:this.props.postcode,
      state: this.props.state,
      city: this.props.city,
      street:this.props.street,
      building:this.props.building,
      title:this.props.title,
      delivery_name: this.props.delivery_name,
      message:this.props.message,
      product: this.props.product,
      font_size: '22'
     };
 
   }




  render() {
    return (
      <div className="App">
        <p>{this.state.postcode}</p>
        <p>{this.state.product}</p>
        <p>これは表示されてる？</p>
        <img src={this.state.baseProductImageUrl + this.state.product + 'thum.jpg'} alt={this.state.product} style={{ width: 150, height: 100 }} />
             <p>{this.state.id}</p>
          
      </div>
    );
  }
}

export default CheckMessage;
