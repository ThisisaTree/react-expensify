import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import { getDatabase, ref, set, update, remove, onValue, push } from "firebase/database";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const googleAuthProvider = new GoogleAuthProvider();
        const db = getDatabase();
      const res = await signInWithPopup(auth, googleAuthProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export {googleAuthProvider, auth, signInWithGoogle, db as default}

/*
onValue(ref(db, 'expenses/'), (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});


push(ref(db, 'expenses'), {
    description: "Gas bill",
    note: "note for expense 1",
    amount: 100,
    createdAt: 100
});

push(ref(db, 'expenses'), {
    description: "Water bill",
    note: "note for expense 2",
    amount: 50,
    createdAt: 200
});

push(ref(db, 'expenses'), {
    description: "Coffee",
    note: "note for expense 3",
    amount: 200,
    createdAt: 50
});
*/

/*
set(ref(db), {
    name: 'Mate',
    age: 26,
    isSIngle: false,
    location: {
        city: 'Bp',
        country: 'HU'
    },
    animal: 'dog'
  }).then(() => {
    console.log("Data is saved");
  }).catch((error) => {
    console.log("Data saving is failed", error);
  });
  
const updates = {
    age: 28
};
update(ref(db), updates);
  
const updates2 = {};
updates2['/location/city'] = 'Debrecen'
update(ref(db), updates2);

remove(ref(db, "isSIngle"), {}).then(() => {
    console.log("Data is saved");
  }).catch((error) => {
    console.log("Data saving is failed", error);
  });



const notes = [{
    id: '12',
    title: 'First note',
    body: 'This is my note'
},{
    id: '13',
    title: 'Another note',
    body: 'This is my note'
}]

push(ref(db, 'notes'), {
    title: "Third note",
    body: "This is also my note"
})

*/
