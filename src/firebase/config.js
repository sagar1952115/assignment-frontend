// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPatjYLtPPK_QptD-p3u-kca0Ghrtisjc",
  authDomain: "kuvaka-27b0a.firebaseapp.com",
  projectId: "kuvaka-27b0a",
  storageBucket: "kuvaka-27b0a.appspot.com",
  messagingSenderId: "205991182835",
  appId: "1:205991182835:web:4018ff482af1f8f5151286",
  measurementId: "G-DZBVMC4D7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
