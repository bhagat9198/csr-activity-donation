<script>
	import '../styles/tailwind-styles.css';
	import '../styles/custom-styles.css';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth, db } from '$lib/utils/firebaseConfig';
	import userStore from '$lib/store/user';
	import { authLogout, readDocument } from '$lib/utils/firebaseUtils';
	import { page } from '$app/stores';

	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';
	import { goto } from '$app/navigation';
	import { COLL_USERS } from '$lib/utils/constants';
	import { doc, onSnapshot } from 'firebase/firestore';

	onMount(async () => {
		// console.log('onAuthStateChanged :: mounted :: ');
		let _uid = '';
		const authListner = await onAuthStateChanged(auth, async (user) => {
			// console.log('onAuthStateChanged :: user :: ', user);
			if (user) {
				const uid = user.uid;
				_uid = uid;
				const res = await readDocument({ collName: COLL_USERS, docId: uid });
				// console.log('onAuthStateChanged :: res :: ', res);
				if (!res.status) {
					userStore.reset();
					await authLogout();
					toasts.warning('Please register yourself before sigining In');
					goto('/auth/signup');
					return;
				}
				console.log('_uid :: ', _uid);
				userStore.update((prevState) => ({
					...prevState,
					authState: true,
					category: res.data.category,
					email: res.data.email,
					name: res.data.name,
					phone: res.data.phone,
					uid: _uid,
					activities: res.data.activities,
					donations: res?.data?.donations,
					activitiesAdded: res?.data?.activitiesAdded,
					donationsAdded: res?.data?.donationsAdded
				}));
				goto(`/${res.data.category}/profile`);
			} else {
				userStore.reset();
				const pageRoute = $page.route.id?.split('/');
				let pageName = pageRoute?.[pageRoute?.length - 1] || '';
				console.log('pageName :: ', pageName);
				if (pageName === 'signin' || pageName === '') {

				} else {
					goto('/auth/signup');
				}
				
				// toasts.warning({
				// 	description: 'hello',
				// 	title: 'add'
				// });
			}
		});

		let userListner = () => {};

		if (_uid) {
			console.log('_uid ::: ', _uid);
			userListner = onSnapshot(doc(db, COLL_USERS, _uid), (doc) => {
				console.log('userListner data: ', doc.data(), _uid);
				const docData = doc.data();
				// userStore.update((prevState) => ({
				// 	...prevState,
				// 	authState: true,
				// 	category: docData?.category,
				// 	email: docData?.email,
				// 	name: docData?.name,
				// 	phone: docData?.phone,
				// 	uid: docData?.uid,
				// 	activities: docData?.activities,
				// 	donations: docData?.donations,
				// 	activitiesAdded: docData?.activitiesAdded,
				// 	donationsAdded: docData?.donationsAdded
				// }));
			});
		}

		return () => {
			// console.log('onAuthStateChanged :: un mounted :: ');
			// authListner();
			// userListner();
		};
	});
</script>

<slot />
<ToastContainer {toasts} let:data>
	<FlatToast {data} />
</ToastContainer>
