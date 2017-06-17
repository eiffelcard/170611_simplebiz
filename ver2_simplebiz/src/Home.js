import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import request from 'superagent';


class Home extends Component {

  constructor(props){
    super(props);
     this.state = {
       baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/',
      currentPage:'Login',
      jsonmessage:''
     };
    this.movepage=this.movepage.bind(this);
    this.getJson=this.getJson.bind(this);
   }

     componentWillMount(){
     console.log("will");
     this.getJson();
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

    getJson(){
     console.log('Json');
      request.get(this.state.baseUrl+"json_ja.php").type('form').send({ email:this.state.email})
        .end((err, res)=> {
          if (err) {
            console.log(err);
          } else {
            console.log(res.body);
            console.log(res.body.LOGINSUB);
            this.setState({
           jsonmessage:res.body
            });
            console.log(this.state.jsonmessage)
          }
      });
  }

  render() {
     const pageComponent={
      Login:Login,
      Register:Register
    }

     const Page=pageComponent[this.state.currentPage]

    return (
      <div className="biz-home">
        <h1>{this.state.jsonmessage.LOGINTOP}<br/>{this.state.jsonmessage.LOGINSUB}</h1>
        <p className="App-intro">
      {this.state.jsonmessage.LOGINMESSAGE}<br/>{this.state.jsonmessage.LOGINCAMPAIGN}
        </p>
        <p>Jsonのメッセージ {this.state.jsonmessage.LOGINSUB}</p>
        <Page/>
        <button onClick={()=>{this.movepage('Register')}}>Change!</button>
        <button onClick={()=>{this.switchpage(this.state.currentPage)}}>Switch!</button>
      </div>
    );
  }
}

export default Home;
