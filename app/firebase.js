// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjGuLnpP-1AbHIEjO9krxoDdbDyoPJlsA",
  authDomain: "expense-tracker-278d2.firebaseapp.com",
  projectId: "expense-tracker-278d2",
  storageBucket: "expense-tracker-278d2.appspot.com",
  messagingSenderId: "774838258695",
  appId: "1:774838258695:web:55db8cf29e3a1868e5aea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)