import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component'
import Shoppage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import Connect from './pages/connect/connect.component'

import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import { connect } from 'react-redux'

import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {

    unSubcribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props
        this.unSubcribeFromAuth = auth.onAuthStateChanged(async user => {

            if (user) {
                const userRef = await createUserProfileDocument(user)
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            }

            setCurrentUser(user)
        })
    }

    componentWillUnmount() {
        this.unSubcribeFromAuth()
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header auth={auth} />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={Shoppage} />
                        <Route exact path='/connect' render={() => this.props.currentUser ? <Redirect to="/" /> : <Connect />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
