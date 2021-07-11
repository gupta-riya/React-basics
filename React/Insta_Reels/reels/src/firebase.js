import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"


firebase.initializeApp(
    {
        apiKey: "AIzaSyCQApiRVjUCbf58XkrdkOU4_CFyjjsTcG4",
        authDomain: "reels-ba2bc.firebaseapp.com",
        projectId: "reels-ba2bc",
        storageBucket: "reels-ba2bc.appspot.com",
        messagingSenderId: "774983952009",
        appId: "1:774983952009:web:d43c3efe1b059d8b604858"
    }
)

export const auth = firebase.auth();
// we wont export the complete firestore as we dont need the access of the all the users if we are seeing post
const firestore = firebase.firestore(); 
export const database = {

    users : firestore.collection("user"),
    // to keep track of user login
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp


}
// where data is present
export const storage = firebase.storage();
// export default firebase;