import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterAction from '../actions/RegisterAction';

class Register extends Component {
  constructor(props){
       super(props);
       this.state = {
           username: "",
           password: "",
           registrationResponse: ""
       }
       this.checkUsername = this.checkUsername.bind(this);
       this.checkPassword = this.checkPassword.bind(this);
       this.registrationSumbit = this.registrationSumbit.bind(this);
   }
  registrationSubmit(event){
    event.preventDefault();
    var userName=event.target[0].value;
    var password=event.target[1].value;
    console.log(userName, password);
    this.props.registerAction({
      username: event.target[0].value,
      password: event.target[1].value
    })



  }

  render() {
    this.props.registerAction({message:"Test"});
    return (
      <div className="login">
        <form>
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" name="username" placeholder="Password"/>
          <input type="submit" value="Register!"/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        registerResponse: state.register
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    registerAction: RegisterAction
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);
