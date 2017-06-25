import React, { Component } from 'react';
import './App.css';
import request from 'superagent';




class CardListDisp extends Component {
  constructor(props){
    super(props);
     this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/sky/',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      CardList:[],
      Product:this.props.product,
      category:1,
      category_after:'',
      ErrorMessage:'',
     };
     this.getCardList = this.getCardList.bind(this);
     this.select = this.select.bind(this);
   }

   componentWillMount(){
     console.log("will");
     this.getCardList();
   }

   getCardList(){
     console.log('CardList start');
      request.post(this.state.baseUrl+'product.php').type('form').send({ authtoken:window.localStorage.getItem('authtoken')})
        .end((err, res)=> {
          if (err) {
            console.log(err);
          } else {
            this.setState({
            CardList:res.body.products,
            category_after:this.props.code
            });
            console.log('getcardlist complete');
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

   parentProductChange(e){
      this.props.onChange(e);
    }



  render() {

    const disp=this.state.CardList.map((p)=>
        <div>
          <img src={this.state.baseProductImageUrl + p.thumbnail} alt={p.name} style={{width: 150, height:100}} />
          <br />
          <div id={p.number} onClick={this.select}>
          選択
          </div>
        </div>
  　);

 


    return (
      <div className="App">
      <h2>カードをお選びください</h2>

        {disp}
      <p className="App-intro">
    <br />
  
      {this.state.ErrorMessage}</p>
        </div>
    );
  }
}

export default CardListDisp;
