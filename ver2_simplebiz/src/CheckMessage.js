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
      font_size: '22'
     };
 
   }


  render() {
    return (
      <div className="App">
           <p>ここはcheck_message</p>
        <p>{this.props.postcode}</p>
         <p>{this.props.state}{this.props.city}{this.props.street}{this.props.building}</p>
         <p>{this.props.title} {this.props.delivery_name}様</p>
           <p>{this.props.message}</p>
        <img src={this.state.baseProductImageUrl + this.props.product + 'thum.jpg'} alt={this.state.product} style={{ width: 150, height: 100 }} />
             <p>{this.state.id}</p>
      </div>
    );
  }
}

export default CheckMessage;
