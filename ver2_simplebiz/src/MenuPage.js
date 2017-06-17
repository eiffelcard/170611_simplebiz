import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import MailOutLine from 'material-ui/svg-icons/communication/mail-outline';
import PermContactCalendar from 'material-ui/svg-icons/action/perm-contact-calendar';
import PictureInPicture from 'material-ui/svg-icons/action/picture-in-picture';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import PaymentIcon from 'material-ui/svg-icons/action/payment';
import PersonIcon from 'material-ui/svg-icons/social/person';
import AddPhotoIcon from 'material-ui/svg-icons/image/add-to-photos';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import Divider from 'material-ui/Divider';

class MenuPage extends Component {
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
      page: "Order",
      menu1: "",
      menu2: "",
      menu3: "",
      menu4: "",
      icon1: "",
      icon2: "",
      icon3: "",
      icon4: ""
    };
    this.parentPageChange = this.parentPageChange.bind(this);
    this.changeMenu = this.changeMenu.bind(this);
  }

  componentWillMount() {
    this.changeMenu(this.props.menutype);
  }


  changeMenu(type) {
    switch (type) {
      case "A":
        this.setState({
          menu1: "Message",
          menu2: "Address",
          menu3: "Order",
          menu4: "",
          icon1: "PictureInPicture",
          icon2: "PermContactCalendar",
          icon3: "LibraryBooks",
          icon4: "",
          message1: "手紙を書く",
          message2: "住所一覧",
          message3: "オーダー一覧",
          message4: ""
        });
        break;
      case "B":
        this.setState({
          menu1: "Setting",
          menu2: "Payment",
          menu3: "Mypage",
          menu4: "",
          icon1: "PersonIcon",
          icon2: "PaymentIcon",
          icon3: "AddPhotoIcon",
          icon4: "",
          message1: "個人設定",
          message2: "支払い",
          message3: "マイページ作成",
          message4: ""
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


    const style = {
      paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0',
      },
      rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
      },
      font: {
        color: "red"
      },
    };


    const iconComponent = {
      PictureInPicture: PictureInPicture,
      PermContactCalendar: PermContactCalendar,
      LibraryBooks: LibraryBooks,
      PaymentIcon: PaymentIcon,
      PersonIcon: PersonIcon,
      AddPhotoIcon: AddPhotoIcon
    }
    const Icon1 = iconComponent[this.state.icon1]
    const Icon2 = iconComponent[this.state.icon2]
    const Icon3 = iconComponent[this.state.icon3]
    const Icon4 = iconComponent[this.state.icon4]



    return (
      <div>
        <Paper style={style.paper}>
          <Menu>
            <p>Menu</p>
               <MenuItem primaryText={"UserID:"+this.props.myid} leftIcon={<AccountIcon />} onClick={() => { this.parentPageChange(this.state.menu1) }} />
                <Divider />
            <MenuItem primaryText={this.state.message1} leftIcon={<Icon1 />} onClick={() => { this.parentPageChange(this.state.menu1) }} />
            <MenuItem primaryText={this.state.message2} leftIcon={<Icon2 />} onClick={() => { this.parentPageChange(this.state.menu2) }} />
            <MenuItem primaryText={this.state.message3} leftIcon={<Icon3 />} onClick={() => { this.parentPageChange(this.state.menu3) }} />
            {this.state.menu4 !== '' ? <MenuItem primaryText={this.state.message3} leftIcon={<Icon3 />} onClick={() => { this.parentPageChange(this.state.menu3) }} /> : ''}
          </Menu>
        </Paper>
        {/*
        <tr>
          <td><button onClick={() => { this.parentPageChange(this.state.menu1) }}>{this.state.menu1}</button></td>
          <td><button onClick={() => { this.parentPageChange(this.state.menu2) }}>{this.state.menu2}</button></td>
          <td><button onClick={() => { this.parentPageChange(this.state.menu3) }}>{this.state.menu3}</button></td>
          {this.state.menu4 !== '' ? <td><button onClick={() => { this.parentPageChange(this.state.menu4) }}>{this.state.menu4}</button></td> : ''}
        </tr> */}
      </div>

    );
  }
}

export default MenuPage;
