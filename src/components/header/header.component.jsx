import React from "react";
import {Link} from 'react-router-dom'


import './header.style.scss'

const Header = ({currentUser, auth}) => (
    <div className="header">
        <Link className="link" to="/"> Logo </Link>
        <ul className="header--menu">
            <li><Link className="link" to="/shop">Shop</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li>
            <li>{currentUser ?
                <div className="link" style={{cursor: 'pointer'}} onClick={() => auth.signOut()}>Log out</div> :
                <Link className="link" to="/connect">Login</Link>}</li>
        </ul>
    </div>
)


export default Header;


