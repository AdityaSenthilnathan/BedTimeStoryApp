import firebase from 'firebase'
require("@firebase/firestore")
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDi7iCG37uN8zi0guFFaIs8UJvO1N4rtjg",
    authDomain: "storyhub-f5e6d.firebaseapp.com",
    databaseURL: "https://storyhub-f5e6d-default-rtdb.firebaseio.com",
    projectId: "storyhub-f5e6d",
    storageBucket: "storyhub-f5e6d.appspot.com",
    messagingSenderId: "848709298242",
    appId: "1:848709298242:web:5ca5c507d38212fd0ea5db"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
  