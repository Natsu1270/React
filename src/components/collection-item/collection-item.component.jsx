import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'

import './collection-item.style.scss'


const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item
    return (
        <div className="collection-item">
            <div className="collection-item__image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className="collection-item__content">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
}


const mapDispatchToState = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToState)(CollectionItem)