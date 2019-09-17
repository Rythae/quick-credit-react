import React, { Component } from "react";
import '../styles/App.css';

import Layout from './Layout/Layout';
import Header from './Header/Header';
import Section from './Section/Section';
import Footer from './Footer/Footer';
import Background from '../images/background.jpg';


let divStyle = {
    width: "100%",
    height: "95vh",
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'multiply',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
};


class App extends Component {
    render() {
        return (
            <div style={divStyle} className="grid">
                <Header />
                <h2 className="logo">Quick Credit</h2>
                <Layout />
                <Section />
                <Footer />
            </div>
        );
    }
}

export default App;