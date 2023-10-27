
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTm3erIN8TpdBmdj9SfLm0ab9_PyeFBKg",
  authDomain: "brand-shop-753e5.firebaseapp.com",
  projectId: "brand-shop-753e5",
  storageBucket: "brand-shop-753e5.appspot.com",
  messagingSenderId: "852997320483",
  appId: "1:852997320483:web:9cbbfa2fff236f32ba2696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;