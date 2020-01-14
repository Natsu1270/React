import React from 'react'
import SHOP_DATA from './shop.data'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CategoryPage from '../category/category.component'

const ShopPage = ({ match }) => {
    //const collections = useSelector(state => selectShopCollections(state))


    return (
        <div className="shoppage">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    )

}

export default ShopPage