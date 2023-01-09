import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBzsbGb-U-8Zp-GsEffR9ajDZQ51mnrRYc",
    authDomain: "expensify-test2-cd9ca.firebaseapp.com",
    databaseURL: "https://expensify-test2-cd9ca-default-rtdb.firebaseio.com",
    projectId: "expensify-test2-cd9ca",
    storageBucket: "expensify-test2-cd9ca.appspot.com",
    messagingSenderId: "841603260609",
    appId: "1:841603260609:web:b7ad362a3b89f2da603440",
    measurementId: "G-XHSM9T0GWX"
  };
  

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

set(ref(db), {
    name: 'Mate',
    age: 26,
    isSIngle: false,
    location: {
        city: 'Bp',
        country: 'HU'
    },
    animal: 'dog'
  });
  
const updates = {
    age: 28
};

update(ref(db), updates);
  
const updates2 = {};
updates2['/location/city'] = 'Debrecen'

update(ref(db), updates2);

const attributes = {
    attributes : {
        height : 190,
        weight : 97
    }
};

update(ref(db), attributes);
