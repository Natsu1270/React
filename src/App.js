import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component'
import Shoppage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import Connect from './pages/connect/connect.component'

import {auth, createUserProfileDocument} from "./firebase/firebase.util";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unSubcribeFromAuth = null;

    componentDidMount() {
        this.unSubcribeFromAuth = auth.onAuthStateChanged(async user => {
            await createUserProfileDocument(user)
        })
    }

    componentWillUnmount() {
        this.unSubcribeFromAuth()
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header currentUser={this.state.currentUser} auth={auth}/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={Shoppage}/>
                        <Route path='/connect' component={Connect}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
