import { takeLatest, put, all, call } from 'redux-saga/effects'

import { UserActionTypes } from './user.type'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.util'
import {
    googleSignInSuccess,
    googleSignInFailure,
    emailSignInSuccess,
    emailSignInFailure,
    signOutSuccess,
    signOutFailure,
} from './user.action'

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(googleSignInSuccess({
            id: userSnapshot.id, ...userSnapshot.data()
        }))

    } catch (err) {
        yield put(googleSignInFailure(err.message))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (err) {
        yield put(emailSignInFailure(err.message))
    }
}

export function* onSignInWithEmailAndPassword() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) {
            return
        }
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(googleSignInSuccess({
            id: userSnapshot.id, ...userSnapshot.data()
        }))

    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (err) {
        yield put(signOutFailure(err))
    }
}

export function* onSigoutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onSignInWithEmailAndPassword),
        call(isUserAuthenticated),
        call(onSigoutStart)
    ])
}

