import React from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { useSelector } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selector'

import './category.style.scss'

export default function CategoryPage({ match }) {
    console.log(match)
    const collection = useSelector((state) => selectCollection(match.params.categoryId)(state))
    console.log(collection)
    return (
        <div className="category-page">
            Category
        </div>
    )
}