import ShopType from './shop.type'
import { firestore, convertCollectionSnapshot } from '../../firebase/firebase.util'

// export const updateShopCollection = (collectionMap) => ({
//     type: ShopType.UPDATE_SHOP_COLLECTION,
//     payload: collectionMap
// })

export const fetchCollectionStart = () => ({
    type: ShopType.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collectionMap) => ({
    type: ShopType.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errMessage => ({
    type: ShopType.FETCH_COLLECTION_FAILURE,
    payload: errMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection')
        dispatch(fetchCollectionStart())

        collectionRef.get().then(snapShot => {
            const collectionMap = convertCollectionSnapshot(snapShot)
            dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(err => {
            fetchCollectionFailure(err.message)
        })
    }
}