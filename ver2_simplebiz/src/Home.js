import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';


class Home extends Component {

  constructor(props){
    super(props);
     this.state = {
      currentPage:'Login'  
     };
    this.movepage=this.movepage.bind(this);
   }

   movepage(name){
    this.setState({
    currentPage:name
    });
   }
  
   switchpage(name){
    if(name==='Login'){
      this.setState({
      currentPage:'Register'
      });
    }else{
      this.setState({
      currentPage:'Login'
      });
    }

   
   }
   
  render() {
     const pageComponent={
      Login:Login,
      Register:Register
    }

     const Page=pageComponent[this.state.currentPage]

    return (
      <div className="biz-home">
        <h1>eiffel<br/>Simple Biz!</h1>
        <p className="App-intro">
        簡単にお礼状が送れます<br/>今なら無料お試し実施中
        </p>
        <Page/>
        <button onClick={()=>{this.movepage('Register')}}>Change!</button>
        <button onClick={()=>{this.switchpage(this.state.currentPage)}}>Switch!</button>
      </div>
    );
  }
}

export default Home;
