// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithRedirect} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsQnfq869z9_NsemO5F6q3xeCTV4XMgk8",
  authDomain: "ise-project-2023.firebaseapp.com",
  projectId: "ise-project-2023",
  storageBucket: "ise-project-2023.appspot.com",
  messagingSenderId: "298529414980",
  appId: "1:298529414980:web:33cb029bc7a9ad12b1c111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth(app);
export const signInWithGoogle = async () => {
  try {
   const result = await signInWithRedirect(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return {token, user};
  } catch (error) {
    console.log(error); 
  }
}
