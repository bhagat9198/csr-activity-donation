<script lang="ts">
	import AddActivity from '$lib/common/addActivity.svelte';
	import Footer from '$lib/common/footer.svelte';
	import Header from '$lib/common/header.svelte';
	import Navigation from '$lib/common/navigation.svelte';
	import PageHero from '$lib/common/pageHero.svelte';
	import PeopleAvtar from '$lib/common/peopleAvtar.svelte';
	import ViewActivity from '$lib/common/viewActivity.svelte';
	import { db } from '$lib/utils/firebaseConfig';
	import { collection, onSnapshot } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import userStore from '$lib/store/user';
	import {
		COLL_CORPORATE_ACTIVITIES,
		COLL_NGO_ACTIVITIES,
		USERS_CORPORATE,
		USERS_NGO
	} from '$lib/utils/constants';
	import EachCard from './eachCard.svelte';
	import { stringify } from 'postcss';

	let displayAddModal = {
		status: false
	};
	let displayViewModal = {
		status: false
	};
	let displayJoinModal = {
		status: false
	};

	let allUserActivities: any[] = [];
	let allOtherActivities: any[] = [];

	let selectedActivity: any = null;

	onMount(async () => {
		let _userNgo: any[] = [];
		let _userCorp: any[] = [];
		let _otherNgo: any[] = [];
		let _otherCorp: any[] = [];
		const snapshotListner1 = onSnapshot(
			collection(db, COLL_NGO_ACTIVITIES),
			async (querySnapshot) => {
				_userNgo = [];
				_otherNgo = [];
				await new Promise((r) => setTimeout(r, 3000));
				console.log('snapshotListner1 :: querySnapshot :: ', querySnapshot);

				await querySnapshot.forEach((doc) => {
					if (!doc.exists()) {
						return;
					}

					let docData = doc.data();
					// console.log(
					// 	'snapshotListner1 :: docData :: ',
					// 	doc.id,
					// 	$userStore,
					// 	$userStore.activitiesAdded.includes(doc.id)
					// );
					if ($userStore.activitiesAdded.includes(doc.id)) {
						_userNgo.push({ ...docData, docId: doc.id, canView: true, hasjoined: false });
						// console.log('snapshotListner1 :: allUserDonations :: ', allUserDonations);
					} else {
						if ($userStore.activities.includes(doc.id)) {
							_otherNgo.push({
								...docData,
								docId: doc.id,
								hasJoined: true,
								canView: false
							});
						} else {
							_otherNgo.push({
								...docData,
								docId: doc.id,
								hasJoined: false,
								canView: false
							});
						}
					}
				});
						allOtherActivities = [..._otherNgo, ..._otherCorp];
		allUserActivities = [..._userNgo, ..._userCorp];
			}
		);

		const snapshotListner2 = onSnapshot(
			collection(db, COLL_CORPORATE_ACTIVITIES),
			async (querySnapshot) => {
				// console.log('snapshotListner1 :: querySnapshot :: ', querySnapshot);

				await new Promise((r) => setTimeout(r, 3000));
				_userCorp = [];
				_otherCorp = [];
				await querySnapshot.forEach((doc) => {
					if (!doc.exists()) {
						return;
					}
					let docData = doc.data();
					// console.log('snapshotListner1 :: docData :: ', doc.id, $userStore);

					if ($userStore.activitiesAdded.includes(doc.id)) {
						_userCorp.push({ ...docData, docId: doc.id, canView: true, hasjoined: false });
					} else {
						if ($userStore.activities.includes(doc.id)) {
							_otherCorp.push({ ...docData, docId: doc.id, hasJoined: true, canView: false });
						} else {
							_otherCorp.push({ ...docData, docId: doc.id, hasJoined: false, canView: false });
						}
					}
				});
						allOtherActivities = [..._otherNgo, ..._otherCorp];
		allUserActivities = [..._userNgo, ..._userCorp];
			}
		);

		console.log(_otherNgo, _otherCorp, _userNgo, _userCorp);



		return () => {
			snapshotListner1();
			snapshotListner2();
		};
	});
	function updateAddModalState(val: boolean) {
		displayAddModal.status = val;
	}

	function updateViewModalState(val: boolean, data: {}) {
		selectedActivity = data;
		displayViewModal.status = val;
	}

	function updateJoinModalState(val: boolean, data: {}) {
		selectedActivity = data;
		displayJoinModal.status = val;
	}

	// $: console.log(allOtherActivities);
	// $: console.log(allUserActivities);
	// $: console.log($userStore);
</script>

<Header />
<div
	class="m-0 py-5 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
>
	<Navigation />

	<div
		class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen bg-gray-50 transition-all duration-200"
	>
		<PageHero heading="All Activities" />
		<div class="w-full px-6 mx-auto">
			<div class="flex-none w-full max-w-full px-3 mt-6">
				<!-- activities to view -->
				{#if $userStore.category === USERS_CORPORATE || $userStore.category === USERS_NGO}
					<p
						class="my-2 leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-red-900 to-red-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
					>
						All Your Activities
					</p>
					<div
						class="mt-2 mb-4 relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
					>
						<div class="flex-auto p-4">
							<div class="flex flex-wrap -mx-3">
								<div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
									<div
										class="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border"
									>
										<div
											class="flex flex-col justify-center flex-auto p-6 text-center cursor-pointer"
											on:click={() => updateAddModalState(true)}
										>
											<span>
												<i class="mb-4 fa fa-plus text-slate-400" />
												<h5 class="text-slate-400">New Activity</h5>
											</span>
										</div>
									</div>
								</div>

								{#each allUserActivities as eachUserActivity, index}
									<div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
										<EachCard
											counter={index + 1}
											{updateViewModalState}
											{updateJoinModalState}
											name={eachUserActivity.name}
											description={eachUserActivity.description}
											imgLink={eachUserActivity.imgLink}
											hasJoined={eachUserActivity.hasJoined}
											canView={eachUserActivity.canView}
											allData={eachUserActivity}
										/>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/if}

				<!-- activities to join -->
				<p
					class="my-2 leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-red-900 to-red-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
				>
					All Activities To Join
				</p>
				<div
					class="mt-2 relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
				>
					<div class="flex-auto p-4">
						<div class="flex flex-wrap -mx-3">
							{#each allOtherActivities as eachOtherActivity, index}
								<div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
									<EachCard
										counter={index + 1}
										{updateViewModalState}
										{updateJoinModalState}
										name={eachOtherActivity.name}
										description={eachOtherActivity.description}
										imgLink={eachOtherActivity.imgLink}
										hasJoined={eachOtherActivity.hasJoined}
										canView={eachOtherActivity.canView}
										allData={eachOtherActivity}
									/>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
			<div />
		</div>
	</div>
</div>
<Footer />

<!-- add -->
{#if displayAddModal.status}
	<AddActivity {displayAddModal} {updateAddModalState} />
{/if}

<!-- View -->
{#if displayViewModal.status}
	<ViewActivity {displayViewModal} {updateViewModalState} activityDetails={selectedActivity} />
{/if}
