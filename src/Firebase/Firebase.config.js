// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: "AIzaSyDz38BC66y8MWtzS-b44nJamWwua69srEA",
  // authDomain: "taskla-market-place.firebaseapp.com",
  // projectId: "taskla-market-place",
  // storageBucket: "taskla-market-place.appspot.com",
  // messagingSenderId: "396562025600",
  // appId: "1:396562025600:web:39a205de10f1aea762ea65"