import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './components/header/header.component'
import { auth } from "./firebase/firebase.util";
import { useSelector, useDispatch } from 'react-redux'
import { checkUserSession } from './redux/user/user.action'
import Spinner from './components/spinner/spinner.component'
// import { selectCollectionPreview } from './redux/shop/shop.selector'

import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from './redux/user/use.seletor'
import ErrorBoundary from './components/error-boundary/error-boundary'

const Shoppage = React.lazy(() => import('./pages/shop/shop.component'))
const HomePage = React.lazy(() => import('./pages/homepage/homepage.component'))
const Connect = React.lazy(() => import('./pages/connect/connect.component'))
const CheckoutPage = React.lazy(() => import('./pages/checkout/checkout.component'))

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkUserSession())
    }, [dispatch])

    const { currentUser } = useSelector(createStructuredSelector({
        currentUser: selectCurrentUser,
    }))
    return (
        <Router>
            <div className="App">
                <Header auth={auth} />
                <Switch>
                    <ErrorBoundary>
                        <React.Suspense fallback={<Spinner />}>
                            <Route exact path='/' component={HomePage} />
                            <Route path='/shop' component={Shoppage} />
                            <Route exact path='/connect' render={() => currentUser ? <Redirect to="/" /> : <Connect />} />
                            <Route exact path='/checkout' component={CheckoutPage} />
                        </React.Suspense>
                    </ErrorBoundary>
                </Switch>
            </div>
        </Router>
    );

}

// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
// })

// const mapDispatchToProps = dispatch => ({
//     checkUserSession: () => dispatch(checkUserSession())

// })

export default App;
