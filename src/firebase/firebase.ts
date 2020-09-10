import Firebase from 'firebase/app'
import 'firebase/auth'
import credentials from './credentials'
export const firebaseApp = Firebase.initializeApp(credentials)
