import React from 'react';
import Paper from 'material-ui/Paper';
import { cyan500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import HomeIcon from 'material-ui/svg-icons/action/home';

const style = {
  paper: {
    height: 50,
    width: '100%',
    margin: 0,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: cyan500,
  },
  p: {
    color: "white",
  },
  li: {
    display: "inline-block",
    fontSize: "30",
    width: "50%",
    color: "white",
    verticalAlign: "middle",
    textAlign: 'left',
  },
};

const Header2 = () => (
  <div>
    <Paper style={style.paper} zDepth={1}>
      <li style={style.li}>hello</li>
      <li style={style.li}>  <HomeIcon /></li>
    </Paper>
  </div>
);

export default Header2;