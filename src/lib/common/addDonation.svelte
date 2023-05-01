<script lang="ts">
	import { toasts } from 'svelte-toasts';
	import userStore from '$lib/store/user';
	import {
	COLL_CORPRATE_DONATIONS,
		COLL_NGO_DONATIONS,
		COLL_USERS,
		USERS_CORPRATE,
		USERS_NGO
	} from '$lib/utils/constants';
	import { createUpdateDocument } from '$lib/utils/firebaseUtils';

	export let displayAddModal: any;
	export let updateAddModalState: any;
	let name = '';
	let description = '';
	let imgLink = '';

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

	function descriptionHandler(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target) {
			// console.log(target.value);
			description = target.value;
		}
	}

	async function addDonationHandler() {
		toasts.add({
			description: 'Adding your donation'
		});

		const data = {
			name,
			description,
			imgLink,
			usersDonated: [],
			addedById: $userStore.uid,
			createdOn: new Date()
		};
		let collName = '';
		if ($userStore.category === USERS_NGO) {
			collName = COLL_NGO_DONATIONS;
		}
		if ($userStore.category === USERS_CORPRATE) {
			collName = COLL_CORPRATE_DONATIONS;
		}
		const addDonationRes = await createUpdateDocument({ collName, data });
		if (!addDonationRes.status) {
			toasts.error({
				description: addDonationRes.message || 'Something went wrong'
			});
			return;
		}

		const updateUserRes = await createUpdateDocument({
			collName: COLL_USERS,
			data: {
				...$userStore,
				donationsAdded: [...$userStore.donationsAdded, addDonationRes.data._id]
			},
			docId: $userStore.uid
		});
		if (!updateUserRes.status) {
			toasts.error({
				description: updateUserRes.message || 'Something went wrong'
			});
			return;
		}
		updateAddModalState(false);
		toasts.success({
			description: 'Added successfully '
		});
	}
</script>

<div
	class="fixed top-0 left-0 w-screen h-screen opacity-80 bg-gray-500 m-0 p-0"
	style="z-index: 999999;"
/>
<div
	class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
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
						<form role="form text-left" on:submit={addDonationHandler}>
							<div class="mb-4">
								<input
									type="text"
									class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									placeholder="Donation Name"
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
									type="submit"
									class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
									>Add Donation</button
								>
								<button
									on:click={() => updateAddModalState(false)}
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
