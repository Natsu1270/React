import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg'

import './cart-icon.style.scss'
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = () => {

    const cartItemCount = useSelector(state => selectCartItemsCount(state))
    const dispatch = useDispatch()

    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={() => dispatch(toggleCartHidden())} />
            <span className="item-count">{cartItemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: { cartItems } }) => {
    return ({ itemCount: cartItems.reduce((count, item) => count + item.quantity, 0) })

}

const countItem = (cartItems) => {
    console.log('count item call!')
    return cartItems.reduce((count, item) => count + item.quantity, 0)
}

export default CartIcon
