// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACD7aYi6XWxftQi9Sy3TgjtOwiTFASdIs",
  authDomain: "fir-course-63bd9.firebaseapp.com",
  projectId: "fir-course-63bd9",
  storageBucket: "fir-course-63bd9.firebasestorage.app",
  messagingSenderId: "840883081768",
  appId: "1:840883081768:web:429018fdade07e015ddb1d",
  measurementId: "G-05VDC42XT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
