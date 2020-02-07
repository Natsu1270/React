import { useSelector, useDispatch } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import WithSpinner from '../with-spinner/with-spinner.component'

import CollectionOverview from './collection-overview.component'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'




const useCollectionOverview = (props) => {

    const { isLoading } = useSelector(createStructuredSelector({
        isLoading: selectIsCollectionFetching
    }))
    return isLoading
}


const CollectionOverviewContainer = ({ children, ...props }) => {
    const collectionOverview = useCollectionOverview(props)
    return children(collectionOverview)
}

export default CollectionOverviewContainer