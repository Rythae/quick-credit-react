import React from 'react';

import ImageOne from '../../images/icons8-add-64.png';
import ImageTwo from '../../images/icons8-add-user-male-96.png';
import ImageThree from '../../images/icons8-cash-in-hand-80 (1).png';

import './Section.css';



const section = () => {
    return <div className="heading">
        <div className="how-it-works">
            <h1 className="how">How It Works</h1>
            <div className="section">
               <div>
              <img src={ImageOne} alt="image one" />
               <h3 className="register">Register</h3>
               <p className="text">Anywhere, anytime online from your phone,laptop, tablet</p>
               </div>
               <div>
              <img src={ImageTwo} alt="image two" />
               <h3 className="register">Login</h3>
               <p className="text">Explore and see how much you can be approved for</p>
               </div>
               <div>
              <img src={ImageThree} alt="image three" />
               <h3 className="register">Request a loan</h3>
               <p className="text">Get emergency loan easy and fast and pay back over time</p>
              </div>
           </div>
        </div>
        </div>
}

export default section;

