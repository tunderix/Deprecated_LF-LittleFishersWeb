import React, { Component } from 'react';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



export default class TitleSection extends Component {


  render() {
    return (
      <MuiThemeProvider>
        <div id="title-text">
          <AppBar title="Little Fishers Management Portal" showMenuIconButton={false}/>
        </div>
      </MuiThemeProvider>
    );
  }
}