	<script lang="ts">
    export let displayJoinModal:any;
  </script>

  <div
		class="absolute top-0 left-0 w-screen h-screen opacity-80 bg-gray-500 m-0 p-0"
		style="z-index: 999999;"
	/>
	<div
		class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
		style="z-index: 999999;"
	>
		<div class="container flex gap-2 bg-white p-4 rounded-5">
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.583649101805!2d77.57846447285769!3d13.118311081466866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1681627949740!5m2!1sen!2sin"
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
						Activity Name
					</h2>
					<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
						Our rigorous security and compliance standards are at the heart of all we do. We work
						tirelessly to protect you and your customers.
					</p>

					<div class="flex justify-evenly my-10">
						<div>
							<p class="mb-0 font-sans font-semibold leading-normal text-sm">Date</p>
							<h5 class="mb-0 font-bold">22-4-2023</h5>
						</div>
						<div>
							<p class="mb-0 font-sans font-semibold leading-normal text-sm">Time</p>
							<h5 class="mb-0 font-bold">5:00 PM</h5>
						</div>
					</div>

					<div class=" flex flex-col items-center">
						<div class="w-60">
							<button
								type="button"
								class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
								>Take part in Activity</button
							>
							<button on:click={() => displayJoinModal.status = false}
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