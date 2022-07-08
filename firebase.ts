// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCKaCzObUzWYk-B4xTAYjoL-WCaEjF8zE",
  authDomain: "netflix-clone-3d578.firebaseapp.com",
  projectId: "netflix-clone-3d578",
  storageBucket: "netflix-clone-3d578.appspot.com",
  messagingSenderId: "494473401625",
  appId: "1:494473401625:web:7f70f827cf9744b03ea188"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }