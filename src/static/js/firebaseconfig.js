import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCNvRFL-YT9Pby9u5Oz8Z_cTr6kZRX5rKk",
    authDomain: "caleandar-leanmind.firebaseapp.com",
    databaseURL: "https://caleandar-leanmind-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "caleandar-leanmind",
    storageBucket: "caleandar-leanmind.appspot.com",
    messagingSenderId: "61171199093",
    appId: "1:61171199093:web:0d91f9edb0594de9cd1c3c",
    measurementId: "G-C3JM55JMXL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

setPersistence(auth, browserLocalPersistence);

export { auth, provider, database };