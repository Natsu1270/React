import { CartType } from './cart.type'
import { addItemToCart } from './cart.utils'

const INIT_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CartType.TOGGLE_CART_HIDDENT:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default CartReducer