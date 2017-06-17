import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom'



class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/',
      baseUserImageUrl: 'https://skyutility.eiffelcard.com/pic/users_picture/',
      userNoimage: '/img/no-image.jpg',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      myid: '',
      myname: '',
      mypicture: '',
      message: 'eiffelは住所を知らない友だちにも手紙や物が贈れるサービスです。登録はQRカードからお願いします',
      page:"Order",
      menu1:"",
      menu2:"",
      menu3:"",
      menu4:""
    };
    this.parentPageChange=this.parentPageChange.bind(this);
    this.changeMenu=this.changeMenu.bind(this);
  }

    componentWillMount() {
    this.changeMenu(this.props.menutype);
  }


  changeMenu(type) {
    switch (type) {
      case "A":
      this.setState({
      menu1:"Message",
      menu2:"Address",
      menu3:"Order",
      menu4:""
    });
        break;
      case "B":
      this.setState({
      menu1:"Payment",
      menu2:"Setting",
      menu3:"Mypage",
      menu4:""
    });
        break;
      case "C":
        console.log("これはCです");
        break;
    }
  }

  parentPageChange(name) {
    this.props.onChange(name);
  }



  render() {

    var fontstyle = {
      color: "red"
    };


    return (
      <div>
        <p>ここはメニューです</p>
        <p style={fontstyle}>userid:{this.props.myid}</p>
        <tr>
          <td><button onClick={() => { this.parentPageChange(this.state.menu1) }}>{this.state.menu1}</button></td>
          <td><button onClick={() => { this.parentPageChange(this.state.menu2) }}>{this.state.menu2}</button></td>
          <td><button onClick={() => { this.parentPageChange(this.state.menu3) }}>{this.state.menu3}</button></td>
             {this.state.menu4 !== '' ?  <td><button onClick={() => { this.parentPageChange(this.state.menu4) }}>{this.state.menu4}</button></td>:''}
        </tr>
      </div>

    );
  }
}

export default Menu;
