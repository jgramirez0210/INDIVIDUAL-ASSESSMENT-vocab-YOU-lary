import firebase from 'firebase/app';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOutUser = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.warn('User signed out');
  }).catch((error) => {
    // An error happened.
    console.error('Failed to sign out', error);
  });
};

export { signIn, signOutUser };
