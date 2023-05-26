// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQQFvTylGCur4QXnMl_KfVOXnsecxja_8",
  authDomain: "ecommerce-fddaf.firebaseapp.com",
  projectId: "ecommerce-fddaf",
  storageBucket: "ecommerce-fddaf.appspot.com",
  messagingSenderId: "986035552214",
  appId: "1:986035552214:web:310a87b40887c765016e77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;