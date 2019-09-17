import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const header = () => {
    return <div style={{clear:'both'}} className="header">
            <ul className="login" style={{float:'right', margin: '10px 10px'}}>
                <Link to="/login" className="list-link" style={{color: 'white', textDecoration: 'none'}} href="login.html">Login</Link>
            </ul>
          </div>
}

export default header;