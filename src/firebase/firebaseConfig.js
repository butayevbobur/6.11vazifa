import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2zZ7-3OnvKIB_ULbegHYysEpT_fyVZEc",
  authDomain: "mymarket-978e0.firebaseapp.com",
  projectId: "mymarket-978e0",
  storageBucket: "mymarket-978e0.appspot.com",
  messagingSenderId: "852533839517",
  appId: "1:852533839517:web:2afb86fd8d369f1d3e7674",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
