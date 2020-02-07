import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CategoryPage from '../category/category.component'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCollectionStart } from '../../redux/shop/shop.action'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CategoryPageWithSpinner = WithSpinner(CategoryPage)

const ShopPage = (props) => {
    //const collections = useSelector(state => selectShopCollections(state))

    // const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const { isCollectionFetching } = useSelector(createStructuredSelector({
        isCollectionFetching: selectIsCollectionFetching
    }))

    const getData = () => {

        dispatch(fetchCollectionStart())

        // collectionRef.onSnapshot(async snapShot => {
        //     const collectionMap = convertCollectionSnapshot(snapShot)
        //     dispatch(updateShopCollection(collectionMap))
        //     setIsLoading(false)
        // })
    }

    useEffect(getData, [])


    return (
        <div className="shoppage">
            <Route exact path={`${props.match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route exact path={`${props.match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
        </div>
    )

}

export default ShopPage