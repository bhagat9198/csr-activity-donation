import { collection, addDoc, doc, getDocs, getDoc, setDoc } from 'firebase/firestore'
import { db, auth } from './firebaseConfig'

export const createUpdateDocument = async (args: {
	data: {};
	collName: string;
	docId: string;
}) => {
	const { collName, data, docId } = args;
	console.log('createUpdateDocument :: data, collName, docId', data, collName, docId);
	if (!data || !collName) return { status: false, message: 'Invalid data' };
	try {
		let docRef:any,
			_id = docId;
		const collRef = await collection(db, collName);
		if (docId) {
			docRef = await setDoc(doc(collRef, docId), { ...data });
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

export const readDocument = async ({ collName = null, docId = null }) => {
	if (!collName || !docId) return { status: false, message: 'Invalid data' };
	try {
		let docRef, docSnap:any;
		if (docId) {
			docRef = await doc(db, collName, docId);
			docSnap = await getDoc(docRef);
		}

		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
			const data = docSnap.data();
			return {
				status: true,
				data
			};
		} else {
			// doc.data() will be undefined in this case
			console.log('No such document!');
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

export const readCollection = async ({ collName = null }) => {
	if (!collName) return { status: false, message: 'Invalid data' };
	try {
		let docRef, docsSnap;
		let mainData: any[] = [];
		docRef = collection(db, collName);
		docsSnap = await getDocs(docRef);
		docsSnap.forEach((doc: any) => {
			console.log(doc.id, '=>', doc.data());
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

export const updateDocumnet = async (data = null, collName = null, docId = null) => {
	if (!data || !collName || !docId) return { status: false, message: 'Invalid data' };
	try {
		let docRef, docSnap: any;
		if (docId) {
			docRef = await doc(db, collName, docId);
			docSnap = await getDoc(docRef);
		}

		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
			const data = docSnap.data();

			return {
				status: true,
				data
			};
		} else {
			// doc.data() will be undefined in this case
			console.log('No such document!');
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

export const add = () => 5
