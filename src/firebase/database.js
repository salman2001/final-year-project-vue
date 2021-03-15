import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG5Ogog4QT_9VQzkB0F0Af4R-jfEJNix4",
    authDomain: "final-project-vue-2021.firebaseapp.com",
    projectId: "final-project-vue-2021",
    storageBucket: "final-project-vue-2021.appspot.com",
    messagingSenderId: "684697661854",
    appId: "1:684697661854:web:06f3c7a4dc95c54121a68f"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseAuthentication = firebase.auth();
  const firebaseFireStore = firebase.firestore();

  export { firebaseAuthentication, firebaseFireStore, firebase};

