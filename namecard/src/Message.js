import React, { Component } from 'react';
import './App.css';
import request from 'superagent';




class Message extends Component {
  constructor(props){
    super(props);
     this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/API/',
   		baseUserImageUrl: 'https://skyutility.eiffelcard.com/pic/users_picture/',
   		userNoimage: '/img/no-image.jpg',
   		baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      CardList:[],
      CardOrder:[],
      category:this.props.code,
      category_after:'',
      ErrorMessage:'',
      InitialMessage:this.props.message
     };
     this.handleChange = this.handleChange.bind(this);
     this.parentMessageChange = this.parentMessageChange.bind(this);
   }

  handleChange(e){
     console.log(e.target.value);
     this.setState({
       InitialMessage:e.target.value
     });
     this.parentMessageChange(e.target.value)
   }

  parentMessageChange(e){
     this.props.onChange(e);
   }

  render() {

    return (
      <div className='app'>
         <textarea value={this.state.InitialMessage} onChange={this.handleChange} style={{width: 200, height: 100}}/>
        </div>
    );
  }
}

export default Message;
