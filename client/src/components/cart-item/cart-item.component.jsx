import React from 'react'

import './cart-item.style.scss'


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <div className="content">
            <img src={imageUrl} alt="" />
            <div className="detail">
                <div className="name">{name}</div>
                <div className="price">${price}</div>
            </div>
        </div>
        <div className="quantity">x{quantity}</div>
    </div>
)

export default React.memo(CartItem)