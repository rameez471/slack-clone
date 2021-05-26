import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAE1u6DgiB-WAWoAy9lIIV_2__xhWclPo4",
    authDomain: "slack-clone-73255.firebaseapp.com",
    projectId: "slack-clone-73255",
    storageBucket: "slack-clone-73255.appspot.com",
    messagingSenderId: "925353565376",
    appId: "1:925353565376:web:b843c23a65342956a5e125"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db } 