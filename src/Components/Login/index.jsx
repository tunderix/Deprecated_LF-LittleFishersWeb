import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }

  handleClick(event){
    console.log("Username is " + this.state.username + " and password is " + this.state.password);
  }

  render() {
    return (
      <div id="login-form">
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
            <div className="button-line">
             <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
            </div>

            <Link to={'/register'}>Register For Little Fishers</Link>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}