import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Register from './Register';
import Mainmenu from './Mainmenu';
import Message from './Message';
import Order from './Order';
import Address from './Address';

class App extends Component {
   constructor(props){
    super(props);
     this.state = {
      currentPage:'Address'
     };
    this.movepage=this.movepage.bind(this);
   }

movepage(name){
  this.setState({
    currentPage:name
  });
}

 render() {
    const pageComponent={
      Address:Address,
      Home:Home
    }


    const Page=pageComponent[this.state.currentPage]


    return (
      <div className="App">
         <Page/>
         <p>hello</p>
         <button onClick={()=>{this.movepage('Home')}}>Change!</button>
      </div>

    );
  }
}
export default App;
