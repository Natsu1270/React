import { takeEvery, call, put } from 'redux-saga/effects'
import ShopType from "./shop.type";
import { firestore, convertCollectionSnapshot } from '../../firebase/firebase.util';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collection')
        const snapShot = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionSnapshot, snapShot)
        yield put(fetchCollectionSuccess(collectionMap))
    } catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeEvery(ShopType.FETCH_COLLECTION_START, fetchCollectionAsync)
}