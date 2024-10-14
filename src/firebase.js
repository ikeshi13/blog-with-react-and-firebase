import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC202k4haEVUueNW7EsBC7FO8XayZRf_PQ",
  authDomain: "blog-448a6.firebaseapp.com",
  projectId: "blog-448a6",
  storageBucket: "blog-448a6.appspot.com",
  messagingSenderId: "896407339549",
  appId: "1:896407339549:web:94d4e455c0d46d410bfcf4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
