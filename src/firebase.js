import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBLJoJ-G7HoOvL_THmhQtzPS5jCAr49Ls",
    authDomain: "facebook-clone-17a95.firebaseapp.com",
    databaseURL: "https://facebook-clone-17a95.firebaseio.com",
    projectId: "facebook-clone-17a95",
    storageBucket: "facebook-clone-17a95.appspot.com",
    messagingSenderId: "453287418793",
    appId: "1:453287418793:web:79899f6f054783696082b8"
  };

  debugger;
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;