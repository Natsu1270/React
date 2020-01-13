export const addItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === item.id
    )

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...item, quantity: 1 }]
}

export const calCartNum = cartItems => {
    return cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
}

export const removeItem = (cartItems, removedItem) => {
    return cartItems.filter(item => item.id !== removedItem.id)
}


export const decreaseQuan = (cartItems, removedItem) => {
    return cartItems.map(cartItem =>
        cartItem.id === removedItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
}
