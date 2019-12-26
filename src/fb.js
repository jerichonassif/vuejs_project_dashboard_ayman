import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'


  const db = firebase.initializeApp(firebaseConfig);
  

  export default db.firestore()