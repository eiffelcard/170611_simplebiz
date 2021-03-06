import React, { Component } from 'react';
import './App.css';
import request from 'superagent';




class OrderList extends Component {
  constructor(props){
    super(props);
     this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/sky/',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      orderList:[],
      myid:6,
      myname:'',
      mypicture:'',
      APIcheck:''
     };
     this.getAddress = this.getAddress.bind(this);
     this.select = this.select.bind(this);
   }

   componentDidMount(){
     console.log("will:orderlist");
     this.getAddress();
   }

   getAddress(){
     console.log(this.props.myid);
     console.log('address start');
    request.post(this.state.baseUrl + "address.php").type('form').send({
      myid: this.props.myid
    })
        .end((err, res)=> {
          if (err) {
            console.log(err);
          } else {
            this.setState({
            orderList:res.body.orders,
            APIcheck:'confirm'
            });
            console.log('address complete');
          }
      });
   }

  select(e) {
    //console.log(e.target.value);
    this.setState({
      product: e.target.id
    });
    this.parentProductChange(e.target.id)
  }

 



  render() {
    const disp=this.state.orderList?this.state.orderList.map((p)=>
        <div>
          <img src={this.state.baseProductImageUrl + p.product+'thum.jpg'} alt={p.product} style={{width: 150, height:100}} />
          <br />
          <p>お送り先{p.delivery_name}様</p>
          <div id={p.id} >詳細
          </div>
        </div>
  　):null;


      return (
      <div className="App">
      <h2>オーダー一覧</h2>
   {disp}
        
      <p className="App-intro">
    <br />
  
      {this.state.ErrorMessage}</p>
        </div>
    );
  }
}

export default OrderList;
