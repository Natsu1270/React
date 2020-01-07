import React from "react";
import { Link } from 'react-router-dom'


import './header.style.scss'

const Header = () => (
    <div className="header">
        <Link to="/"> Logo </Link>
        <ul className="header--menu">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/connect">Connect</Link></li>
        </ul>
    </div>
)


export default Header;


