import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDXHwTRh77E1zsul_4YiRWOlGDGX7avdIg",
    authDomain: "testreact-f6cba.firebaseapp.com",
    databaseURL: "https://testreact-f6cba.firebaseio.com",
    projectId: "testreact-f6cba",
    storageBucket: "testreact-f6cba.appspot.com",
    messagingSenderId: "499278665373",
    appId: "1:499278665373:web:397892b2781d474ae76674",
    measurementId: "G-455YV0KFJC"
};


firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({promt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, otherDatas) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.id}`)
    const userSnapShot = await userRef.get();

    if (!userSnapShot.exists) {
        const {displayName, email, photoUrl} = userAuth
        const createdDate = new Date()

        try {
            await userRef.set({
                displayName,email,photoUrl,createdDate, ...otherDatas
            })
        } catch (e) {
            console.log(e)
        }

    }
    return userRef
}
export default firebase