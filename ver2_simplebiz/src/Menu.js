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
    };
    this.parentPageChange=this.parentPageChange.bind(this);
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
          <td><button onClick={() => { this.parentPageChange('Message') }}>手紙を作成</button></td>
          <td><button onClick={() => { this.parentPageChange('Address') }}>住所管理</button></td>
          <td><button onClick={() => { this.parentPageChange('Order') }}>オーダー確認</button></td>
          <td><button><Link to="/address">住所管理  </Link></button></td>
          <td><button><Link to="/order">オーダー確認  </Link></button></td>
        </tr>
      </div>

    );
  }
}

export default Menu;
