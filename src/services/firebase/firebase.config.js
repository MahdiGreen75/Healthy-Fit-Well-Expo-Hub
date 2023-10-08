// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX5Fg2TDHpbfQXwFdHhpB6-9YcrmrzUH8",
  authDomain: "healthyfitwell-expo-hub.firebaseapp.com",
  projectId: "healthyfitwell-expo-hub",
  storageBucket: "healthyfitwell-expo-hub.appspot.com",
  messagingSenderId: "959979026973",
  appId: "1:959979026973:web:c9872385e05678f55c24f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;