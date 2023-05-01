<script lang="ts">
	export let displayJoinModal: any;
	export let updateJoinModalState: any;
	export let selectedActivity: any;
	import userStore from '$lib/store/user';
	import { COLL_USERS } from '$lib/utils/constants';
	import { createUpdateDocument } from '$lib/utils/firebaseUtils';
	import { toasts } from 'svelte-toasts';

	let hasJoined = false;

	for (let i = 0; i < $userStore.activities.length; i++) {
		if ($userStore.activities[i] && $userStore.activities[i]?.docId == selectedActivity.docId) {
			hasJoined = true;
			break;
		}
	}

	async function joinActivityHandler() {
		let _data = {
			...selectedActivity
		};
		delete _data.hasJoined;
		delete _data.canView;
		delete _data.coll;
		_data.usersJoined.push({
			name: $userStore.name,
			email: $userStore.email,
			uid: $userStore.uid
		});
		const joinRes = await createUpdateDocument({
			collName: selectedActivity.coll,
			data: _data,
			docId: selectedActivity.docId
		});
		if (!joinRes.status) {
			toasts.error(joinRes?.message);
			return;
		}
		let _userData = {
			...$userStore
		};
		_userData.activities.push({ coll: selectedActivity.coll, docId: selectedActivity.docId });
		const joinUserRes = await createUpdateDocument({
			collName: COLL_USERS,
			docId: $userStore.uid,
			data: _userData
		});
		if (!joinUserRes.status) {
			toasts.error(joinUserRes?.message);
			return;
		}
		hasJoined = true;
	}

	// $: console.log($userStore.activities);
	// $: console.log(selectedActivity.docId);
	// $: console.log(hasJoined);
</script>

<div
	class="fixed top-0 left-0 w-screen h-screen opacity-80 bg-gray-500 m-0 p-0"
	style="z-index: 999999;"
/>
<div
	class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
	style="z-index: 999999;"
>
	<div class="container flex gap-2 bg-white p-4 rounded-5">
		<div>
			<iframe
				src={selectedActivity.location}
				width="500"
				height="425"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
		<div>
			<div class="col-span-2 px-10">
				<h2
					class="mt-3 mb-4 text-3xl font-extrabold tracking-tight md:text-3xl dark:text-white font-bold"
				>
					{selectedActivity.name}
				</h2>
				<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
					{selectedActivity.description}
				</p>

				<div class="flex justify-evenly my-10">
					<div>
						<p class="mb-0 font-sans font-semibold leading-normal text-sm">Date</p>
						<h5 class="mb-0 font-bold">{selectedActivity.date}</h5>
					</div>
					<div>
						<p class="mb-0 font-sans font-semibold leading-normal text-sm">Time</p>
						<h5 class="mb-0 font-bold">{selectedActivity.time}</h5>
					</div>
				</div>

				<div class=" flex flex-col items-center">
					<div class="w-60">
						{#if hasJoined}
							<button
								type="button"
								class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-green-800 hover:border-green-700 hover:bg-green-700 hover:text-white"
							>
								Activity Joined
							</button>
						{:else}
							<button
								on:click={joinActivityHandler}
								type="button"
								class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
								>Take part in Activity</button
							>
						{/if}

						<button
							on:click={() => updateJoinModalState(false)}
							type="button"
							class="inline-block w-full px-6 py-3 mt-1 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-red-900 to-red-800 hover:border-red-700 hover:bg-red-700 hover:text-white"
							>Close</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
