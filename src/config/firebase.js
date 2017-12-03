import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBrebq_dRl6zt6QMJAKSVmFR6qW1NfJILs",
  authDomain: "mdnotes-b0ddf.firebaseapp.com",
  databaseURL: "https://mdnotes-b0ddf.firebaseio.com",
  projectId: "mdnotes-b0ddf",
  storageBucket: "",
  messagingSenderId: "110985675594"
};

firebase.initializeApp(config);

export default firebase;

export const auth = firebase.auth();
export const database = firebase.database();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();