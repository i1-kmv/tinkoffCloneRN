// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from '@firebase/auth';
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGyCRPuGQq17UTQ4ouDNOdb6J6pt3m7q8",
  authDomain: "tinkoff-b09f0.firebaseapp.com",
  projectId: "tinkoff-b09f0",
  storageBucket: "tinkoff-b09f0.appspot.com",
  messagingSenderId: "428992469677",
  appId: "1:428992469677:web:f201938b9ae81da9b18424",
  measurementId: "G-BB299VME6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)

export const auth = getAuth()

export const register = (email : string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email : string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => signOut(auth)

export constdb = getFirestore 