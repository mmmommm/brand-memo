import Firebase from 'firebase/app';
import "firebase/auth";
import credentials from './credentials';
export const firebaseApp = Firebase.initializeApp(credentials);
export default {
  init() {
    Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.SESSION);
  }
}