import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mycard from './Mycard';


class BizHome extends Component {

  constructor(props){
    super(props);
     this.state = {
     };
   }
  render() {
    return (
      <div className="biz-home">
        <p>これはbizホーム</p>
        <Mycard />
          <p><Link to="/">Homeへもどる</Link></p>
      </div>
    );
  }
}

export default BizHome;
