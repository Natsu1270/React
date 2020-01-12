import { CartType } from './cart.type'

export const toggleCartHidden = () => ({
    type: CartType.TOGGLE_CART_HIDDENT
})

export const addItem = item => ({
    type: CartType.ADD_ITEM,
    payload: item
})