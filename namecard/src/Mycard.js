import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';


class Mycard extends Component {

  constructor(props){
    super(props);
     this.state = {
       	picturedata:'',
     };
     this.handleFile = this.handleFile.bind(this);
   }


   handleFile(e){
     var reader = new FileReader();
     var file = e.target.files[0];

     if (!file) return;

     reader.onload = function(img) {
       this.refs.in.value = '';
      console.log(img.target.result);
      this.setState({
        picturedata:img.target.result
      });
      	}.bind(this);
     reader.readAsDataURL(file);
   }


  render() {
    return (
      <div className="biz-home">
        <p>これはマイカード</p>
  <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
  <img src={this.state.picturedata}/>

      </div>
    );
  }
}

export default Mycard;
