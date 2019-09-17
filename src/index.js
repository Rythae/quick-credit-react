import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './components/store';
import App from "./components/App.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Table from './components/Table/Table';

const Home = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/table" component={Table} />
    </Router>
  </Provider>
)

ReactDOM.render(<Home />, document.getElementById('root'));