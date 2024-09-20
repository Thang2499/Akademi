import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvM8lcPlr3ykRzqL71rk9ZLVFfZJhK_40",
  authDomain: "onlineshop-20b1e.firebaseapp.com",
  databaseURL: "https://onlineshop-20b1e-default-rtdb.firebaseio.com",
  projectId: "onlineshop-20b1e",
  storageBucket: "onlineshop-20b1e.appspot.com",
  messagingSenderId: "256658856510",
  appId: "1:256658856510:web:037f66d0c7f4df59684f6f",
  measurementId: "G-9Z2LD6314J"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export {app,auth,googleProvider};