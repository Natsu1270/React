import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors'

import { addItem, removeItem, decreaseQuan } from '../../redux/cart/cart.action'

import './checkout.style.scss'


const CheckoutPage = () => {
    const { cartItems, cartTotalPrice } = useSelector(createStructuredSelector({
        cartItems: selectCartItems,
        cartTotalPrice: selectCartTotalPrice
    }))

    const dispatch = useDispatch()

    return (
        <div className="checkout">
            <div className="checkout-header">
                <div className="header-item"><span>Product</span></div>
                <div className="header-item"><span>Description</span></div>
                <div className="header-item"><span>Quantity</span></div>
                <div className="header-item"><span>Price</span></div>
                <div className="header-item"><span>Remove</span></div>
            </div>
            <div className="checkout-items">
                {
                    cartItems.map(item => (
                        <div className="checkout-item">
                            <span>{item.name}</span>
                            <span><img src={item.imageUrl} alt="" /></span>
                            <div className="quantity">
                                {
                                    item.quantity > 0
                                        ?
                                        (<span className="quan-btn" onClick={() => dispatch(decreaseQuan(item))}> - </span>)
                                        : <span></span>}
                                <span>{item.quantity}</span>
                                <span className="quan-btn" onClick={() => dispatch(addItem(item))}> + </span>
                            </div>
                            <span>${item.price * item.quantity}</span>
                            <button onClick={() => dispatch(removeItem(item))}>X</button>
                        </div>

                    ))
                }
            </div>
            <div className="checkout-total">
                <h1>Total: ${cartTotalPrice}</h1>
            </div>
        </div>
    )
}

export default CheckoutPage