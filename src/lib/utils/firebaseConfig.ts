// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAbvfC3CtATsKFJgfAojxlq36vXtqQlgjo",
	authDomain: "csr-project-4f997.firebaseapp.com",
	projectId: "csr-project-4f997",
	storageBucket: "csr-project-4f997.appspot.com",
	messagingSenderId: "342535665314",
	appId: "1:342535665314:web:08ee24440b7ac55a1889fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);