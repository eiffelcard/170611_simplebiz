import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';


class Header extends Component {
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
      menutype: "B"
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.gotoSettingPage = this.gotoSettingPage.bind(this);
   this.gotoMainPage = this.gotoMainPage.bind(this);
  }


  handleTouchTap() {
    alert('onTouchTap triggered on the title component');
  }



  gotoSettingPage() {
    window.location.href = "/uramenu";
  }

  gotoMainPage() {
    window.location.href = "/mainmenu";
  }

  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return (
      < div >
        <h1>eiffel biz</h1>
        <AppBar
          title={<span style={styles.title}>{this.props.currentPage}</span>}
          onTitleTouchTap={this.handleTouchTap}
          iconElementLeft={<IconButton><HomeIcon /></IconButton>}
          iconElementRight={<IconButton><SettingIcon /></IconButton>}
          onLeftIconButtonTouchTap={this.gotoMainPage}
          onRightIconButtonTouchTap={this.gotoSettingPage}
        />
      </div >
    );
  }
}


export default Header;