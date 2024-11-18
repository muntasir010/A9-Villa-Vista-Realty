// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUPO6gTzx74ViFrA9-rd8D3KVkfq1Y6V4",
  authDomain: "villa-vista-realty.firebaseapp.com",
  projectId: "villa-vista-realty",
  storageBucket: "villa-vista-realty.firebasestorage.app",
  messagingSenderId: "255130148510",
  appId: "1:255130148510:web:6419ca939e6ae0c952a58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;