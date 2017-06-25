import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AddCircle from 'material-ui/svg-icons/content/add-circle-outline';




class CardListDisp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'https://skyutility.eiffelcard.com/ynoda_test/simplebiz/API/sky/',
      baseProductImageUrl: 'https://skyutility.eiffelcard.com/pic/product_picture/',
      CardList: [],
      Product: this.props.product,
      category: 1,
      category_after: '',
      ErrorMessage: '',
    };
    this.getCardList = this.getCardList.bind(this);
    this.select = this.select.bind(this);
  }

  componentWillMount() {
    console.log("will");
    this.getCardList();
  }

  getCardList() {
    console.log('CardList start');
    request.post(this.state.baseUrl + 'product.php').type('form').send({ authtoken: window.localStorage.getItem('authtoken') })
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            CardList: res.body.products,
            category_after: this.props.code
          });
          console.log('getcardlist complete');
        }
      });
  }

  select(e) {
    console.log(e.target.id);
    this.setState({
      product: e.target.id
    });
    this.parentProductChange(e.target.id)
  }

  parentProductChange(e) {
    this.props.onChange(e);
  }



  render() {

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
         width: 600,
        height: 400,
        overflowY: 'auto',
      },
       titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
    font:{
      fontSize:'24px',
    },
     img: {
        cursor: 'pointer',
      },
    };



    const disp = this.state.CardList.map((p) =>
      <GridTile 
        key={p.img}
        title=' '
        actionIcon={<IconButton  ><AddCircle color="white" viewBox="0 0 22 22" id={p.number} onTouchTap={this.select}  /></IconButton>}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
     >
        <img src={this.state.baseProductImageUrl + p.thumbnail} alt={p.name} id={p.number} onTouchTap={this.select} style={styles.img}/>
      </GridTile>

    );




    return (
      <div className="App">
        <h2>カードをお選びください</h2>
        <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          {disp}
        </GridList>
        </div>
      </div>
    );
  }
}

export default CardListDisp2;
