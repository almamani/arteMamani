import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL-osT10rL7rMayMUNnP2rODpYcWSrzBI",
  authDomain: "artemamani-313aa.firebaseapp.com",
  projectId: "artemamani-313aa",
  storageBucket: "artemamani-313aa.appspot.com",
  messagingSenderId: "455339942654",
  appId: "1:455339942654:web:9a69f2a5791efdf8e2bbaf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
