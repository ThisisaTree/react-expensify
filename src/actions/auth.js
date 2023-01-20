import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";
import { provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

export const startLogin = () => {
    let navigate = useNavigate(); 

    return () => signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;

          let path = `/dashboard`; 
            navigate(path);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ...
        });
    };

export const startLogout = () => {


    return () => signOut(auth);
}

/*
export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = googleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ...
        });
    };
};
*/