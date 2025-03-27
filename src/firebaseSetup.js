import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export function signInAndGetUid() {
    return new Promise((resolve, reject) => {
        signInAnonymously(auth).catch((error) => {
            console.error(error.code);
            console.error(error.message);
            document.body.innerHTML = `
            <div id="mainDiv">
              <div class="jspsych-display-element">
                <h1>Oops</h1>
                Looks like there's a problem! Try hard refreshing your browser (Ctrl + F5).
                <br><br>
                Thank you!
              </div>
            </div>`;
            reject(error);
        });

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                resolve(uid); // Resolve the promise with the uid
            }
        });
    });
}

export { auth, db };
