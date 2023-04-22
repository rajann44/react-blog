import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfTYqGGUKDVCkcslQGiwUUg2YfCjM945I",
  authDomain: "react-blog-2c289.firebaseapp.com",
  projectId: "react-blog-2c289",
  storageBucket: "react-blog-2c289.appspot.com",
  messagingSenderId: "375673799575",
  appId: "1:375673799575:web:3b8d28c0ca988ad0e2fad2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const postReference = collection(db, "posts");
export const storage = getStorage(app);

export default app;
