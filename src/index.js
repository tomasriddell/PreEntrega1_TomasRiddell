import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAvuhYVsBjEpO7YCeyPxOscpkfIudKDVQw",
  authDomain: "coder-react-1.firebaseapp.com",
  projectId: "coder-react-1",
  storageBucket: "coder-react-1.appspot.com",
  messagingSenderId: "152755218380",
  appId: "1:152755218380:web:32e20a9be1dc8fcec41f69"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
