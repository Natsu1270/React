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

export const googleProvider = new firebase.auth.GoogleAuthProvider()

googleProvider.setCustomParameters({ promt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const createUserProfileDocument = async (userAuth, otherDatas) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const userSnapShot = await userRef.get();

    if (!userSnapShot.exists) {

        const { displayName, email } = userAuth
        const createdDate = new Date()

        try {
            await userRef.set({
                displayName, email, createdDate, ...otherDatas
            })
        } catch (e) {
            console.log('error creating user ', e)
        }

    }
    return userRef
}


export const addCollectionAndDoc = async (collectionKey, objToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    objToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
    return await batch.commit()

}

export const convertCollectionSnapshot = (collection) => {
    const trasnformedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return trasnformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubcribe = auth.onAuthStateChanged(userAuth => {
            unsubcribe();
            resolve(userAuth)
        }, reject)
    })
}


export default firebase