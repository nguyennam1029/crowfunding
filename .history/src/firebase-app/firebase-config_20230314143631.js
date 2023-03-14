import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMa2z5rzm6o-e1MNQ_i0uJ98PmjWNMSaM",
  authDomain: "crowdfunding-a645b.firebaseapp.com",
  projectId: "crowdfunding-a645b",
  storageBucket: "crowdfunding-a645b.appspot.com",
  messagingSenderId: "311723272342",
  appId: "1:311723272342:web:1430c916ea78cc9ab3fab7",
  measurementId: "G-SCFNJEXFYQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
