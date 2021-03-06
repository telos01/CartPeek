import firebase from "firebase";
import { delBasePath } from "next/dist/next-server/lib/router/router";

const firebaseConfig = {
    apiKey: "AIzaSyAq9ihCA5fYq3525l4B9K3_S8LR1b2ibTc",
    authDomain: "cartpk-cbaac.firebaseapp.com",
    projectId: "cartpk-cbaac",
    storageBucket: "cartpk-cbaac.appspot.com",
    messagingSenderId: "874881698152",
    appId: "1:874881698152:web:bcc091f9e14a132e3eeedd"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)
  :firebase.app();

  const fdb=app.firestore();

  export default fdb;
