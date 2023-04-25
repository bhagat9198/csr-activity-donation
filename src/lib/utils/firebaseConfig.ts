	// Import the functions you need from the SDKs you need
	import { initializeApp } from 'firebase/app';
	import { getAuth } from 'firebase/auth';
	import { getFirestore } from 'firebase/firestore';
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: 'AIzaSyD8OOpKJWJuwJAfGCWqhq9kzX4emB88FKY',
		authDomain: 'csr-appp.firebaseapp.com',
		projectId: 'csr-appp',
		storageBucket: 'csr-appp.appspot.com',
		messagingSenderId: '1098555629938',
		appId: '1:1098555629938:web:62848475029b4ca269bdeb'
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	export const auth = getAuth(app);
	export const db = getFirestore(app);