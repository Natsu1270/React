import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartDropdown = ({ history }) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem item={cartItem} />
                    ))
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }
            }>
                Check out now
            </CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default withRouter(CartDropdown)