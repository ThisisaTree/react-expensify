import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
  apiKey: "AIzaSyC7RMvEJy-nJ5FU9zx4QGtAmv-1vll6_9k",
  authDomain: "expensify-test-a8d36.firebaseapp.com",
  databaseURL: "https://expensify-test-a8d36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-test-a8d36",
  storageBucket: "expensify-test-a8d36.appspot.com",
  messagingSenderId: "842929960313",
  appId: "1:842929960313:web:6393a7c8d4224d10dbaba8",
  measurementId: "G-VFFHTDJF2W"
};

// Initialize Firebase

const app = initializeApp(config);
const analytics = getAnalytics(app);

set(ref(getDatabase()), {
    name: 'Mate'
  });