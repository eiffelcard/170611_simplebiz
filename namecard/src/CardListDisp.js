import React, { Component } from 'react';
import './App.css';
import request from 'superagent';




class CardListDisp extends Component {
  constructor(props){
    super(props);
     this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/API/',
   		baseUserImageUrl: 'https://skyutility.eiffelcard.com/pic/users_picture/',
   		userNoimage: '/img/no-image.jpg',
   		baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      CardList:[],
      CardOrder:this.props.order,
      category:1,
      category_after:'',
      ErrorMessage:'',
     };
     this.getCardList = this.getCardList.bind(this);
     this.add = this.add.bind(this);
     this.delete = this.delete.bind(this);
   }

   componentWillMount(){
     console.log("will");
     this.getCardList();
   }

   getCardList(){
     console.log('CardList start');
      request.post(this.state.baseUrl+'Product/pickup_list.php').type('form').send({ authtoken:window.localStorage.getItem('authtoken')})
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

   add(e){
     //console.log('add id:'+e.target.id);
     const newdata=this.state.CardOrder;
     if(newdata.length>=8){
       console.log('8だよ');
       this.setState({
         ErrorMessage:'8枚以上は選べません'
         });
     }else{
       newdata.push(e.target.id)
       console.log(newdata)
       this.setState({
       CardOrder:newdata
         });
       this.parentCardOrderChange(newdata)
     }
   }

   delete(e){
    //console.log('delete id:'+e.target.id);
    const newdata=this.state.CardOrder;
    newdata.splice(e.target.id, 1 ) ;
      this.setState({
      CardOrder:newdata,
       ErrorMessage:''
        });
    this.parentCardOrderChange(newdata)
   }

   parentCardOrderChange(e){
      this.props.onChange(e);
    }



  render() {

    const disp=this.state.CardList.map((p)=>
        <div>
          <img src={this.state.baseProductImageUrl + p.thumbnail} alt={p.name} style={{width: 150, height:100}} />
          <br />
          <div id={p.number} onClick={this.add}>
          選択
          </div>
        </div>
  　);

    const Orderdisp=this.state.CardOrder.map((p,i)=>
        <div>
          <img src={this.state.baseProductImageUrl + p+'thum.jpg'} alt={p} style={{width: 100, height:66}} />
          <br />
          <a id={i} onClick={this.delete}>
          削除
          </a>
        </div>
  　);


    return (
      <div className="App">
      <h2>カードを8枚お選びください</h2>

        {disp}
      <p className="App-intro">
      選択されたカード数：{this.state.CardOrder.length} <br />
      {Orderdisp}
      {this.state.ErrorMessage}</p>
        </div>
    );
  }
}

export default CardListDisp;
