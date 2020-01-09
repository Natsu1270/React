import React from "react";
import { withRouter } from 'react-router-dom';


import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <div className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="bg-img" style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="sub-title">
                Shop now
            </span>
        </div>
    </div>

);

export default withRouter(MenuItem);