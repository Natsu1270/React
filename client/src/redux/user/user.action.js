import { UserActionTypes } from './user.type'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = err => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: err
})


export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const emailSignInSuccess = user => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailure = err => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: err
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})