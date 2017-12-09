import firebase from 'firebase';
import { firebase as firebaseKeys } from '../keys';

const config = {
  apiKey: firebaseKeys.apiKey,
  authDomain: firebaseKeys.authDomain,
  databaseURL: firebaseKeys.databaseURL,
  projectId: firebaseKeys.projectId,
  storageBucket: firebaseKeys.storageBucket,
  messagingSenderId: firebaseKeys.messagingSenderId
};

firebase.initializeApp(config);

export default firebase;

export const auth = firebase.auth();
export const database = firebase.database();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();