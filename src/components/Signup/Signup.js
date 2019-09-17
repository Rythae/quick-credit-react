import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/registerActions';

import './Signup.css';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  
    this.onChange = (e) => {
      console.log(e.target.value);
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    this.onSubmit = (e) => {
      e.preventDefault();
      const registerUser = props.register;
      registerUser();
  
    }
  }


  render() {
  return <div> 
  <div className="left">
    <h2>Quick Credit</h2>
    <p className="p-text">Get emergency loan easy and fast and pay back over time</p>
  </div>
  <div className="right">
    <div className="centered-content">
      <a className="side-link back-btn no-bg" onClick={() => history.back(-1)}>← &nbsp;&nbsp;Go Back</a>
      <br />
    </div>
    <div className="container">
      <h1 className="heading-1">Sign up</h1>
      <form onSubmit={this.onSubmit} className="regular" id="regular-form">
        <input
          id="firstname"
          name="firstname"
          className="regular"
          type="text"
          placeholder="firstname"
          onChange={this.onChange}
          value={this.state.firstname} 
        />
        <br />
        <input id="lastname" name="lastname" type="text" placeholder="lastname" onChange={this.onChange} value={this.state.lastname} /><br />
        <input id="input-email" name="email" type="text" placeholder="email" onChange={this.onChange} value={this.state.email} /><br />
        <input id="input-password" name="password" type="text" placeholder="password" onChange={this.onChange} value={this.state.password} /><br />
         <button className="btn-1">Submit</button>
      </form>
    </div>
  </div>
</div>

  }
}

export default connect(null, { register })(Signup);