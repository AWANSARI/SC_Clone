import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB2dZMwxdNQXAjyelGf767go6v-HdRi1I0",
    authDomain: "snapchat-clone-42aa9.firebaseapp.com",
    projectId: "snapchat-clone-42aa9",
    storageBucket: "snapchat-clone-42aa9.appspot.com",
    messagingSenderId: "496659743552",
    appId: "1:496659743552:web:163f9bc8f6f12ee0a730a5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage= firebase.storage();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,storage,provider};