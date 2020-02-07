import ShopType from './shop.type'

const INIT_STATE = {
    collections: {},
    isFetching: false,
    errMessage: ''
}

const shopReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ShopType.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopType.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopType.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errMessage: action.payload
            }
        case ShopType.UPDATE_SHOP_COLLECTION:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default shopReducer