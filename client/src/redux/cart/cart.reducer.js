import { CartType } from './cart.type'
import { addItemToCart, removeItem, decreaseQuan } from './cart.utils'

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

        case CartType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        case CartType.DECREASE_QUANT:
            return {
                ...state,
                cartItems: decreaseQuan(state.cartItems, action.payload)
            }

        case CartType.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state
    }
}

export default CartReducer