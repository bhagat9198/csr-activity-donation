<script lang="ts">
	export let displayViewModal: any;
	export let donationDetails: any;
	export let updateViewModalState: any;
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
		<div class="flex flex-wrap mx-10 w-full">
			<div class=" w-full flex justify-between mb-5">
				<h5 class="font-bold pt-3">{donationDetails.name}</h5>
				<div class="px-3">
					<div
						class="inline-block text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"
					>
						<p on:click={() => updateViewModalState(false, null)} class="text-white px-3 pt-2">
							Close
						</p>
					</div>
				</div>
			</div>
			<p class="mb-12">
				{donationDetails.description}
			</p>
			<div class="flex-none w-full max-w-full px-3">
				<div class="flex-auto px-0 pt-0 pb-2">
					<div class="p-0 overflow-x-auto flex flex-wrap h-40">
						{#if donationDetails.usersDonated.length === 0}
							<p class="text-center text-base font-bold">Hold On...No one has joined yet!!</p>
						{:else}
							{#each donationDetails.usersDonated as eachUserDonated}
								<tr class="mx-5 w-40">
									<td
										class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
									>
										<div class="flex px-2 py-1">
											<div class="flex flex-col justify-center">
												<h6 class="mb-0 leading-normal text-sm">{eachUserDonated.name}</h6>
												<p class="mb-0 leading-tight text-xs text-slate-400">
													{eachUserDonated.email}
												</p>
											</div>
										</div>
									</td>
									<td
										class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
									>
										<div class="flex px-2 py-1">
											<div class="flex flex-col justify-center">
												<h6 class="mb-0 leading-normal text-sm">$ {eachUserDonated.amount}</h6>
											</div>
										</div>
									</td>
								</tr>
								
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
