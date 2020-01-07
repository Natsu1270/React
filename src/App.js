import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component'
import Shoppage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import Connect from './pages/connect/connect.component'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/connect' component={Connect} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
