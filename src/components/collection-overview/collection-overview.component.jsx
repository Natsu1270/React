import React from 'react'

import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectShopCollections } from '../../redux/shop/shop.selector'

import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'


import './collection-overview.style.scss'


const CollectionOverview = () => {
    const { collections } = useSelector(createStructuredSelector({
        collections: selectShopCollections
    }))
    return (
        <div className="collection-overview">
            {
                collections.map(({ id, title, ...otherProps }) => (
                    <CollectionPreview key={id} title={title} {...otherProps} />
                ))
            }
        </div>
    )
}

export default CollectionOverview