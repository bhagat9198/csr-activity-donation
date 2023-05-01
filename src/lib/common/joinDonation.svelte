<script lang="ts">
	export let displayJoinModal: any;
	export let updateJoinModalState: any;
	export let selectedDonations: any;
	import userStore from '$lib/store/user';
	import { COLL_USERS } from '$lib/utils/constants';
	import { createUpdateDocument } from '$lib/utils/firebaseUtils';
	import { toasts } from 'svelte-toasts';

	let hasDonated = false;

	for (let i = 0; i < $userStore.donations.length; i++) {
		if ($userStore.donations[i] && $userStore.donations[i]?.docId == selectedDonations.docId) {
			hasDonated = true;
			break;
		}
	}

	let amount = '0';

	async function joinDonationHandler() {
		let _data = {
			...selectedDonations
		};
		delete _data.hasJoined;
		delete _data.canView;
		delete _data.coll;
		_data.usersDonated.push({
			name: $userStore.name,
			email: $userStore.email,
			uid: $userStore.uid,
			amount
		});
		const joinRes = await createUpdateDocument({
			collName: selectedDonations.coll,
			data: _data,
			docId: selectedDonations.docId
		});
		if (!joinRes.status) {
			toasts.error(joinRes?.message);
			return;
		}
		let _userData = {
			...$userStore
		};
		_userData.donations.push({ coll: selectedDonations.coll, docId: selectedDonations.docId });
		const joinUserRes = await createUpdateDocument({
			collName: COLL_USERS,
			docId: $userStore.uid,
			data: _userData
		});
		if (!joinUserRes.status) {
			toasts.error(joinUserRes?.message);
			return;
		}
		hasDonated = true;
	}

	function amountHandler(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			// console.log(target.value);
			amount = target.value;
		}
	}

	$: console.log($userStore.activities);
	$: console.log(selectedDonations.docId);
	$: console.log(hasDonated);
</script>

<div
	class="fixed top-0 left-0 w-screen h-screen opacity-80 bg-gray-500 m-0 p-0"
	style="z-index: 999999;"
/>
<div
	class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
	style="z-index: 999999;"
>
	<div class="container w-96 flex gap-2 bg-white p-4 rounded-5">
		<div>
			<div class="col-span-2 px-10">
				<h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight md:text-3xl dark:text-white">
					{selectedDonations.name}
				</h2>
				<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
					{selectedDonations.description}
				</p>

				<div class="mt-10">
					<input
						type="text"
						class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-green-300 bg-white bg-clip-padding py-2 px-3 font-normal text-green-700 transition-all focus:border-green-300 focus:bg-white focus:text-green-700 focus:outline-none focus:transition-shadow"
						placeholder="Donation Amount"
						aria-label="Name"
						aria-describedby="email-addon"
						on:input={amountHandler}
						value={amount}
					/>
				</div>

				<div class=" flex items-center gap-10">
					{#if hasDonated}
						<button
							disabled
							type="button"
							class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-green-800 hover:border-green-700 hover:bg-green-700 hover:text-white"
							>Donated</button
						>
					{:else}
						<button
							on:click={joinDonationHandler}
							type="button"
							class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
							>Donate</button
						>
					{/if}

					<button
						on:click={() => updateJoinModalState(false)}
						type="button"
						class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-red-900 to-red-800 hover:border-red-700 hover:bg-red-700 hover:text-white"
						>Close</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
