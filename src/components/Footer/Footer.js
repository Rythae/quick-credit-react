import React from 'react';

import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faGoogle
  } from '@fortawesome/free-brands-svg-icons';

  
  library.add(
    faFacebook,
    faLinkedin,
    faTwitter,
    faGoogle
  );

const footer = () => {
    return <div className="footer">
    <div className="container">
    <ul className="list-container">
      <li style={{listStyleType: 'none'}}><a style={{color: 'white', textDecoration: 'none'}} href="index.html">Home</a></li>
      <li style={{listStyleType: 'none'}}><a style={{color: 'white', textDecoration: 'none'}} href="about.html">About Us</a></li>
      <li style={{listStyleType: 'none'}}><a style={{color: 'white', textDecoration: 'none'}} href="contact.html">Contact Us</a></li>
    </ul>
    </div>
    <div className="icons-container">
        <ul className="icons">
        <li style={{listStyleType: 'none', margin: '1rem'}}><a href="http://facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" style={{  color: '#00aced' }}/></a></li>
        <li style={{listStyleType: 'none', margin: '1rem'}}><a href="http://linkedin.com/"><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#00aced' }}/></a></li>
        <li style={{listStyleType: 'none', margin: '1rem'}}><a href="http://twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x"  style={{ color: '#00aced' }}/></a></li>
        <li style={{listStyleType: 'none', margin: '1rem'}}><a href="http://plus.google.com/"><FontAwesomeIcon icon={faGoogle} size="2x"  style={{ color: '#00aced' }}/></a></li>
        </ul>
    </div>
    <div>
    Copyright &copy; 2019  
    </div>  
    </div>
}

export default footer;