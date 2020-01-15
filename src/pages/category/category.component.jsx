import React from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { useSelector } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selector'


import './category.style.scss'

export default function CategoryPage({ match }) {
    const collection = useSelector((state) => selectCollection(match.params.categoryId)(state))
    if (collection) {
        return (
            <div className="category-page">
                <h1>{collection.title}</h1>
                <div className="collection-items">
                    {
                        collection.items.map(item => (
                            <CollectionItem item={item} />
                        ))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <h1>Category not exist</h1>
        )
    }
}