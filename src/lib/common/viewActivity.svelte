<script lang="ts">
	import { readDocument } from '$lib/utils/firebaseUtils';
	import { onMount } from 'svelte';

	export let displayViewModal: any;
	export let updateViewModalState: any;
	export let activityDetails: any;
	// console.log(activityDetails);
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
		<div class="w-96">
			<iframe
				src={activityDetails.location}
				width="300"
				height="225"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
			<h5 class="font-bold pt-3">{activityDetails.name}</h5>
			<p class="mb-12">
				{activityDetails.description}
			</p>
		</div>
		<div class="w-full">
			<div class="flex flex-wrap -mx-3">
				<div class="flex-none w-full max-w-full px-3">
					<div
						class="p-6 pb-0 mb-0 bg-white w-full border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between"
					>
						<h6>People Interested</h6>
						<div class="px-3">
							<div
								class="inline-block text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"
							>
								<p
									on:click={() => updateViewModalState(false, {})}
									class="cursor-pointer text-white px-3 pt-2"
								>
									Close
								</p>
							</div>
						</div>
					</div>
					<div class="flex flex-wrap flex-auto px-0 pt-0 pb-2">
						{#if activityDetails.usersJoined.length === 0}
							<p class="text-center text-base font-bold">Hold On...No one has joined yet!!</p>
						{:else}
							{#each activityDetails.usersJoined as eachUserjoined}
								<div class="w-32 p-0 overflow-x-auto flex flex-wrap h-20 mx-5">
									<tr>
										<td
											class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
										>
											<div class="flex px-2 py-1">
												<div class="flex flex-col justify-center">
													<h6 class="mb-0 leading-normal text-sm">{eachUserjoined.name}</h6>
													<p class="mb-0 leading-tight text-xs text-slate-400">
														{eachUserjoined.email}
													</p>
												</div>
											</div>
										</td>
									</tr>
								</div>
								
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
