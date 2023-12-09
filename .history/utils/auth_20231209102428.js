import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};
const auth = getAuth();

const signOutUser = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('User signed out');
  }).catch((error) => {
    // An error happened.
    console.error('Failed to sign out', error);
  });
 
};
export { signIn, signOutUser };
