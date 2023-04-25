<script lang="ts">
	export let displayJoinModal: any;
</script>

<div
	class="absolute top-0 left-0 w-screen h-screen opacity-80 bg-gray-500 m-0 p-0"
	style="z-index: 999999;"
/>
<div
	class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
	style="z-index: 999999;"
>
	<div class="container w-96 flex gap-2 bg-white p-4 rounded-5">
		<div>
			<div class="col-span-2 px-10">
				<h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight md:text-3xl dark:text-white">
					Donation Name
				</h2>
				<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
					Our rigorous security and compliance standards are at the heart of all we do. We work
					tirelessly to protect you and your customers.
				</p>

				<div class="mt-10">
					<input
						type="number"
						class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
						placeholder="Donation Amount"
						aria-label="Name"
						aria-describedby="email-addon"
					/>
				</div>

				<div class=" flex items-center gap-10">
					<button
						type="button"
						class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
						>Donate</button
					>
					<button
						on:click={() => (displayJoinModal.status = false)}
						type="button"
						class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-red-900 to-red-800 hover:border-red-700 hover:bg-red-700 hover:text-white"
						>Close</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
