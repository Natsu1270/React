import React from 'react'
import { connect } from 'react-redux'

import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem item={cartItem} />
                ))
            }
        </div>
        <CustomButton>Check out now</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown)