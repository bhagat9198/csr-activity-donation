<script lang="ts">
  export let displayViewModal: any;
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
		<div class="w-96">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.583649101805!2d77.57846447285769!3d13.118311081466866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1681627949740!5m2!1sen!2sin"
				width="300"
				height="225"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
			<h5 class="font-bold pt-3">Activity Name</h5>
			<p class="mb-12">
				Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram
				ipsumLoram ipsum Loram ipsum Loram ipsum Loram ipsum
			</p>
		</div>
		<div>
			<div class="flex flex-wrap -mx-3">
				<div class="flex-none w-full max-w-full px-3">
					<div
						class="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between"
					>
						<h6>People Interested</h6>
						<div class="px-3">
							<div
								class="inline-block text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"
							>
								<p on:click={() => (displayViewModal.status = false)} class="text-white px-3 pt-2">
									Close
								</p>
							</div>
						</div>
					</div>
					<div class="flex-auto px-0 pt-0 pb-2">
						<div class="p-0 overflow-x-auto flex flex-wrap h-40">
							<tr>
								<td
									class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
								>
									<div class="flex px-2 py-1">
										<div class="flex flex-col justify-center">
											<h6 class="mb-0 leading-normal text-sm">John Michael</h6>
											<p class="mb-0 leading-tight text-xs text-slate-400">john@creative-tim.com</p>
										</div>
									</div>
								</td>
							</tr>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
