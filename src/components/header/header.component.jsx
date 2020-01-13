import React from "react";
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'


import { connect, useSelector, shallowEqual } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/use.seletor'

import './header.style.scss'

const Header = ({ auth }) => {
    // const { isHidden, currentUser } = useSelector(state => ({
    //     isHidden: state.cart.hidden,
    //     currentUser: state.user.currentUser
    // }), shallowEqual)

    const { isHidden, currentUser } = useSelector(createStructuredSelector({
        isHidden: selectCartHidden,
        currentUser: selectCurrentUser
    }))

    return (
        <div className="header-com">
            <div className="header">
                <Link className="link" to="/"> Logo </Link>
                <ul className="header--menu">
                    <li><Link className="link" to="/shop">Shop</Link></li>
                    <li><Link className="link" to="/contact">Contact</Link></li>
                    <li>{currentUser ?
                        <div className="link" style={{ cursor: 'pointer' }} onClick={() => auth.signOut()}>Log out</div> :
                        <Link className="link" to="/connect">Login</Link>}</li>
                    <li className="link">
                        <CartIcon />
                    </li>
                </ul>
            </div>
            {
                isHidden ? null : <CartDropdown />
            }
        </div>
    )
}

// const mapStatetoProps = ({ user: { currentUser } }) => {
//     console.log('Header redux')
//     return ({
//         currentUser,
//     })
// }

export default Header


