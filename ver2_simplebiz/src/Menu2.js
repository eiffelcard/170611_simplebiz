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
      pages: { firstName: "Yuuki", lastname: "Noda" },
      message: 'eiffelは住所を知らない友だちにも手紙や物が贈れるサービスです。登録はQRカードからお願いします',
    };
    this.parentPageChange = this.parentPageChange.bind(this);
    this.pageChange = this.pageChange.bind(this);
    this.pageChange2 = this.pageChange2.bind(this);
    this.checktype = this.checktype.bind(this);
  }

  componentWillMount() {
    console.log(this.state.pages);

  }
  componentDidMount() {
    console.log(this.state.pages);
  }

  parentPageChange(name) {
    this.props.onChange(name);
  }

  pageChange() {
    this.setState({
      pages: {
        firstName: "Takuya",
        lastname: "Kawamura"
      }
    });
    console.log(this.state.pages);
  }
  pageChange2(name1, name2) {
    this.setState({
      pages: {
        firstName: name1,
        lastname: name2
      }
    });
    console.log(this.state.pages);
  }

  checktype(type) {
    switch (type) {
      case "A":
        console.log("これはAです");
        break;
      case "B":
        console.log("これはBです");
        break;
      case "C":
        console.log("これはCです");
        break;
    }
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
          <td><button onClick={() => { this.parentPageChange('Message') }}>手紙を作成</button></td>
          <td><button onClick={() => { this.parentPageChange('Address') }}>住所管理</button></td>
          <td><button onClick={() => { this.parentPageChange('Order') }}>オーダー確認</button></td>
          {/*
          <td><button onClick={this.pageChange}>{this.state.pages.firstName}押すとかわるよ</button></td>
          <td><button onClick={() => { this.pageChange2('Takuya', 'kawamura') }}>{this.state.pages.firstName}押すとかわる</button></td>
          <td><button onClick={() => { this.pageChange2('Yuuki', 'Noda') }}>{this.state.pages.firstName}押すとかわるよ</button></td>
          {this.state.pages.firstName === 'Yuuki' ? <td><button onClick={() => { this.pageChange2('Takuya', 'kawamura') }}>{this.state.pages.firstName}選んでかわるよ</button></td> : <td><button onClick={() => { this.pageChange2('Yuuki', 'Noda') }}>{this.state.pages.firstName}選んで変わるよ</button></td>}
          <td><button onClick={() => { this.checktype('A') }}>Aです</button></td>
          <td><button onClick={() => { this.checktype('B') }}>Bです</button></td>
          <td><button onClick={() => { this.checktype('C') }}>Cです</button></td> */}
        </tr>
      </div>

    );
  }
}

export default Menu;
