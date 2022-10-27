import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBWCWogaDR5OyolFYknQdgUWByxFo6anMo",
  authDomain: "netflix-fde49.firebaseapp.com",
  projectId: "netflix-fde49",
  storageBucket: "netflix-fde49.appspot.com",
  messagingSenderId: "1073255020346",
  appId: "1:1073255020346:web:adbb0d3093e9437dd54203",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;
await addDoc(collection(db, 'Users'), ({email, password}))
  return await createUserWithEmailAndPassword(auth, email, password);
}
export async function signInAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
export { auth };
export default db;
