<script lang="ts">
export let displayAddModal:any;

</script>	
  
  <div
		class="absolute top-0 left-0 w-full h-full opacity-80 bg-gray-500 m-0 p-0"
		style="z-index: 999999;"
	/>
	<div
		class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
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
									/>
								</div>
								<div class="mb-4">
									<input
										type="text"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Location"
										aria-label="Name"
										aria-describedby="email-addon"
									/>
								</div>
								<div class="mb-4">
									<input
										type="text"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Google Map Location Link"
										aria-label="Name"
										aria-describedby="email-addon"
									/>
								</div>
								<div class="mb-4">
									<input
										type="date"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Google Map Location Link"
										aria-label="Name"
										aria-describedby="email-addon"
									/>
								</div>
								<div class="mb-4">
									<input
										type="time"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Google Map Location Link"
										aria-label="Name"
										aria-describedby="email-addon"
									/>
								</div>

								<div class="mb-4">
									<textarea
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Description"
										aria-label="Name"
										aria-describedby="email-addon"
									/>
								</div>

								<div class="text-center">
									<button
										type="button"
										class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
										>Add Activity</button
									>
									<button on:click={() => displayAddModal.status = false}
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