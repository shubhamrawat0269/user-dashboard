import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO0YagQlvZvHJCHLz8vlJS2k9CIl6oDHg",
  authDomain: "techno-employee-dashboard.firebaseapp.com",
  projectId: "techno-employee-dashboard",
  storageBucket: "techno-employee-dashboard.appspot.com",
  messagingSenderId: "666625320599",
  appId: "1:666625320599:web:9d9827697e4246e3a4ebd2",
  measurementId: "G-DYZWKK1L0Y",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
