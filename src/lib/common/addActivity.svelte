<script lang="ts">
	import { createUpdateDocument } from '$lib/utils/firebaseUtils';
	import { toasts } from 'svelte-toasts';
	import userStore from '$lib/store/user';
	import {
		COLL_CORPORATE_ACTIVITIES,
		COLL_NGO_ACTIVITIES,
		COLL_USERS,
		USERS_CORPORATE,
		USERS_NGO
	} from '$lib/utils/constants';

	export let displayAddModal: any;
	export let updateAddModalState: any;
	let currDate = new Date();

	let dateOfMonth: string | number = currDate.getDate();
	if (dateOfMonth < 10) {
		dateOfMonth = '0' + dateOfMonth;
	}
	let month: string | number = currDate.getMonth();
	if (month < 10) {
		month = '0' + (month + 1);
	}
	let hours: string | number = currDate.getHours();
	if (hours < 10) {
		hours = '0' + hours;
	}
	let minutes: string | number = currDate.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	let name = '';
	let imgLink = '';
	let location = '';
	let description = '';
	let date = `${currDate.getFullYear()}-${month}-${dateOfMonth}`;
	let time = `${hours}:${minutes}`;

	function nameHandler(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			// console.log(target.value);
			name = target.value;
		}
	}

	function imgLinkHandler(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			// console.log(target.value);
			imgLink = target.value;
		}
	}
	function locationHandler(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			// console.log(target.value);
			location = target.value;
		}
	}

	function descriptionHandler(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			// console.log(target.value);
			description = target.value;
		}
	}

	function dateHandler(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			console.log(target.value);
			date = target.value;
		}
	}

	function timeHandler(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			console.log(target.value);
			time = target.value;
		}
	}

	async function addActivityHandler() {
		toasts.add({
			description: 'Adding your actvity'
		});

		const data = {
			name,
			location,
			imgLink,
			description,
			usersJoined: [],
			addedById: $userStore.uid,
			createdOn: new Date(),
			date,
			time
		};
		let collName = '';
		if ($userStore.category === USERS_NGO) {
			collName = COLL_NGO_ACTIVITIES;
		}
		if ($userStore.category === USERS_CORPORATE) {
			collName = COLL_CORPORATE_ACTIVITIES;
		}
		const addActivityRes = await createUpdateDocument({ collName, data });
		if (!addActivityRes.status) {
			toasts.error({
				description: addActivityRes.message || 'Something went wrong'
			});
			return;
		}

		const updateUserRes = await createUpdateDocument({
			collName: COLL_USERS,
			data: {
				...$userStore,
				activitiesAdded: [...$userStore.activitiesAdded, addActivityRes.data._id]
			},
			docId: $userStore.uid
		});
		if (!updateUserRes.status) {
			toasts.error({
				description: updateUserRes.message || 'Something went wrong'
			});
			return;
		}
		name = '';
		location = '';
		imgLink = '';
		description = '';
		date = `${currDate.getFullYear()}-${month}-${dateOfMonth}`;
		time = `${hours}:${minutes}`;
		updateAddModalState(false)
		toasts.success({
			description: 'Added successfully '
		});
	}

	function cancelModalHandler() {
		updateAddModalState(false);
	}
</script>

<div
	class="fixed top-0 left-0 w-screen h-screen opacity-80 bg-gray-500 m-0 p-0"
	style="z-index: 999999;"
/>
<div
	class="fixed top-0 left-0 w-full h-full flex justify-center items-center"
	style="z-index: 999999;"
>
	<div class="container">
		<div class="flex flex-wrap -mx-3">
			<div
				class="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12"
			>
				<div
					class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
				>
					<div class="flex-auto p-6">
						<form role="form text-left">
							<div class="mb-4">
								<input
									type="text"
									class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									placeholder="Activity Name"
									aria-label="Name"
									aria-describedby="email-addon"
									on:input={nameHandler}
								/>
							</div>
							<div class="mb-4">
								<input
									type="text"
									class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									placeholder="Activity Img Link"
									aria-label="Name"
									aria-describedby="email-addon"
									on:input={imgLinkHandler}
								/>
							</div>
							<!-- <div class="mb-4">
								<input
									type="text"
									class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									placeholder="Location"
									aria-label="Name"
									aria-describedby="email-addon"
								/>
							</div> -->
							<div class="mb-4">
								<input
									type="text"
									class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									placeholder="Google Map Location Link"
									aria-label="Name"
									aria-describedby="email-addon"
									on:input={locationHandler}
								/>
							</div>
							<div class="mb-4">
								<input
									type="date"
									class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									placeholder="Google Map Location Link"
									aria-label="Name"
									aria-describedby="email-addon"
									value={date}
									on:input={dateHandler}
								/>
							</div>
							<div class="mb-4">
								<input
									type="time"
									class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									placeholder="Google Map Location Link"
									aria-label="Name"
									aria-describedby="email-addon"
									value={time}
									on:input={timeHandler}
								/>
							</div>

							<div class="mb-4">
								<textarea
									class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									placeholder="Description"
									aria-label="Name"
									aria-describedby="email-addon"
									on:input={descriptionHandler}
								/>
							</div>

							<div class="text-center">
								<button
									on:click={addActivityHandler}
									type="button"
									class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
									>Add Activity</button
								>
								<button
									on:click={cancelModalHandler}
									type="button"
									class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-red-900 to-red-800 hover:border-red-700 hover:bg-red-700 hover:text-white"
									>Cancel</button
								>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
