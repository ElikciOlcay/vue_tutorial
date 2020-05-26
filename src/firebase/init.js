import firebase from 'firebase'
import firestore from 'firebase/firestore'



// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyByCpSLVIr7BhwspNdXByBo9GDK_WeJgl0",
    authDomain: "shops-austria.firebaseapp.com",
    databaseURL: "https://shops-austria.firebaseio.com",
    projectId: "shops-austria",
    storageBucket: "shops-austria.appspot.com",
    messagingSenderId: "68067299954",
    appId: "1:68067299954:web:2117e77f9227b7889328eb"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()