import { CartType } from './cart.type'

export const toggleCartHidden = () => ({
    type: CartType.TOGGLE_CART_HIDDENT
})

export const addItem = item => ({
    type: CartType.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartType.REMOVE_ITEM,
    payload: item
})

export const decreaseQuan = (item) => ({
    type: CartType.DECREASE_QUANT,
    payload: item
})