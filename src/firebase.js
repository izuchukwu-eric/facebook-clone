import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCi2s4cgDqlcDpZ7B1ZbASRJYwDh6-v9Oo",
  authDomain: "facebook-clone-2648b.firebaseapp.com",
  projectId: "facebook-clone-2648b",
  storageBucket: "facebook-clone-2648b.appspot.com",
  messagingSenderId: "126495972357",
  appId: "1:126495972357:web:5b3c4b64ab9c443825506c",
  measurementId: "G-F25V4DQFZD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;