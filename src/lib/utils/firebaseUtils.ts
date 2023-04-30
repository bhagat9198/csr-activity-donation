import { collection, addDoc, doc, getDocs, getDoc, setDoc, DocumentReference, onSnapshot } from 'firebase/firestore'
import { db, auth } from './firebaseConfig'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const createUpdateDocument = async (args: {
	data: {};
	collName: string;
	docId?: string;
}) => {
	const { collName, data, docId } = args;
	// console.log('createUpdateDocument :: data, collName, docId', data, collName, docId);
	if (!data || !collName) return { status: false, message: 'Invalid data' };
	try {
		let docRef:any;
		let _id = '';
		const collRef = await collection(db, collName);
		if (docId) {
			docRef = await setDoc(doc(collRef, docId), { ...data });
			_id = docId
		} else {
			docRef = await addDoc(collRef, { ...data });
			_id = docRef?.id;
		}
		// console.log("Document written with ID: ", d);
		return {
			status: true,
			data: { ...docRef?.data, _id }
		};
	} catch (e: any) {
		console.error('Error adding document: ', e);
		return {
			status: false,
			message: e.message
		};
	}
};

export const readDocument = async (args: { collName: string, docId: string }) => {
	const { collName, docId} = args;
	if (!collName || !docId) return { status: false, message: 'Invalid data' };
	try {
		let docRef, docSnap:any;
		if (docId) {
			docRef = await doc(db, collName, docId);
			docSnap = await getDoc(docRef);
		}

		if (docSnap.exists()) {
			// console.log('Document data:', docSnap.data());
			const data = docSnap.data();
			return {
				status: true,
				data
			};
		} else {
			// doc.data() will be undefined in this case
			// console.log('No such document!');
			return {
				status: false,
				message: 'No such document!'
			};
		}
	} catch (e: any) {
		console.error('Error adding document: ', e);
		return {
			status: false,
			message: e.message
		};
	}
};

export const readCollection = async (args: { collName : string }) => {
	const {collName} = args;
	if (!collName) return { status: false, message: 'Invalid data' };
	try {
		let docRef, docsSnap;
		let mainData: any[] = [];
		docRef = collection(db, collName);
		docsSnap = await getDocs(docRef);
		docsSnap.forEach((doc: any) => {
			// console.log(doc.id, '=>', doc.data());
			const data = doc.data();
			mainData.push({ ...data, _id: doc.id });
		});
		return {
			status: true,
			data: mainData
		};
	} catch (e: any) {
		console.error('Error adding document: ', e);
		return {
			status: false,
			message: e?.message
		};
	}
};

export const updateDocumnet = async (args: {data: string, collName: string, docId: string}) => {
	const {collName, data,docId} = args
	if (!data || !collName || !docId) return { status: false, message: 'Invalid data' };
	try {
		let docRef, docSnap: any;
		if (docId) {
			docRef = await doc(db, collName, docId);
			docSnap = await getDoc(docRef);
		}

		if (docSnap.exists()) {
			// console.log('Document data:', docSnap.data());
			const data = docSnap.data();

			return {
				status: true,
				data
			};
		} else {
			// doc.data() will be undefined in this case
			// console.log('No such document!');
			return {
				status: false,
				message: 'No such document!'
			};
		}
	} catch (e: any) {
		console.error('Error adding document: ', e);
		return {
			status: false,
			message: e?.message
		};
	}
};

export const signinEmailPassword = async(args: {email: string, password: string}) => {
	// console.log('signinEmailPassword :: args :: ', args);
	
	const {email, password} = args;
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password)
		return {
			status: true,
			data: res,
			message: 'success'
		}
	} catch(error: any) {
		console.log('signinEmailPassword :: error :: ', error);
		return {
			status: false,
			message: error?.message || 'something went wrong'
		}
	}
}

export const authLogout = async() => {
	try {
		await signOut(auth)
		return {
			status: true,
			message: 'Signout Success'
		}
	} catch(error: any) {
		console.log('error :: ', error);
		return {
			status: false,
			message: error?.message
		}
		
	}
}

// export const docSnapshot = async(args: {collName: string, docId: string}) => {
// 	const listner = onSnapshot(doc(db, "cities", "SF"), (doc) => {
// 		console.log("Current data: ", doc.data());
// 	});
// }

// export const collSnapshot = async(args: {collName: string, docId: string}) => {

// 	// const q = query(collection(db, "cities"), where("state", "==", "CA"));
// 	const unsubscribe = onSnapshot(collection(db, "cities"), (querySnapshot) => {
// 		const cities = [];
// 		querySnapshot.forEach((doc) => {
// 			cities.push(doc.data().name);
// 		});
// 		console.log("Current cities in CA: ", cities.join(", "));
// 	});

// }

export const add = () => 5
