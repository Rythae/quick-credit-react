import React from 'react';
import { Link } from 'react-router-dom';

import './Layout.css';

const layout = () => {
    return <div className="layout-container">
      <div className="layout">
          <h1 className="need-a-loan">Need a loan?</h1>
          <h2 className="get-it">Get it right now</h2>
          <Link className="btn" to="/signup">Get Started</Link>
      </div>
    </div>
}


export default layout;
