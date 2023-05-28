

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAvuhYVsBjEpO7YCeyPxOscpkfIudKDVQw",
  authDomain: "coder-react-1.firebaseapp.com",
  projectId: "coder-react-1",
  storageBucket: "coder-react-1.appspot.com",
  messagingSenderId: "152755218380",
  appId: "1:152755218380:web:32e20a9be1dc8fcec41f69"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
