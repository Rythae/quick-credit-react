import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
      <h1 className="heading-1">Login</h1>
      <form className="regular" id="regular-form" action="login.html">
        <input id="input-email" type="text" placeholder="email" /><br />
        <input id="input-password" type="text" placeholder="password" /><br />
        <Link className="btn-1" to="/table">Submit</Link>
      </form>
    </div>
  </div>
</div>
}

export default Login;