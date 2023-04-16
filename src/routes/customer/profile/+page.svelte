<script>
	import Footer from '$lib/common/footer.svelte';
import Header from '$lib/common/header.svelte';

</script>

<Header />
<div
	class="m-0 py-4 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
>
	<aside
		class="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent"
	>
		<div class="h-19.5">
			<i
				class="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
			/>
			<a
				class="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
				target="_blank"
			>

				<span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand"
					></span
				>
			</a>
		</div>

		<hr
			class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
		/>

		<!-- change h-sidenav-no-pro to h-sidenav when pro is up -->
		<div class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
			<ul class="flex flex-col pl-0 mb-0">
				<li class="mt-0.5 w-full">
					<a
						class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
						href="/customer/activities"
					>
						<div
							class="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
						>
							<svg
								width="12px"
								height="12px"
								viewBox="0 0 42 42"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<title>box-3d-50</title>
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g
										transform="translate(-2319.000000, -291.000000)"
										fill="#FFFFFF"
										fill-rule="nonzero"
									>
										<g transform="translate(1716.000000, 291.000000)">
											<g transform="translate(603.000000, 0.000000)">
												<path
													class="fill-slate-800"
													d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
												/>
												<path
													class="fill-slate-800 opacity-60"
													d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
												/>
												<path
													class="fill-slate-800 opacity-60"
													d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
												/>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft"
							>Activities</span
						>
					</a>
				</li>

				<li class="mt-0.5 w-full">
					<a
						class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
						href="/customer/donations"
					>
						<div
							class="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5"
						>
							<svg
								width="12px"
								height="12px"
								viewBox="0 0 43 36"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<title>credit-card</title>
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g
										transform="translate(-2169.000000, -745.000000)"
										fill="#FFFFFF"
										fill-rule="nonzero"
									>
										<g transform="translate(1716.000000, 291.000000)">
											<g transform="translate(453.000000, 454.000000)">
												<path
													class="fill-slate-800 opacity-60"
													d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
												/>
												<path
													class="fill-slate-800"
													d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
												/>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft"
							>Donations</span
						>
					</a>
				</li>

				<li class="w-full mt-4">
					<h6 class="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60">
						Account pages
					</h6>
				</li>

				<li class="mt-0.5 w-full">
					<a
						class="py-2.7 text-sm shadow-soft-xl ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
						href="/customer/profile"
					>
						<div
							class="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
						>
							<svg
								width="12px"
								height="12px"
								viewBox="0 0 46 42"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<title>customer-support</title>
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g
										transform="translate(-1717.000000, -291.000000)"
										fill="#FFFFFF"
										fill-rule="nonzero"
									>
										<g transform="translate(1716.000000, 291.000000)">
											<g transform="translate(1.000000, 0.000000)">
												<path
													class="opacity-60"
													d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"
												/>
												<path
													class=""
													d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"
												/>
												<path
													class=""
													d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"
												/>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Profile</span>
					</a>
				</li>
			</ul>
		</div>
	</aside>

	<div
		class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen bg-gray-50 transition-all duration-200"
	>
		<nav
			class="absolute z-20 flex flex-wrap items-center justify-between w-full px-6 py-2 text-white transition-all shadow-none duration-250 ease-soft-in lg:flex-nowrap lg:justify-start"
		>
			<div class="flex items-center justify-between w-full px-6 py-1 mx-auto flex-wrap-inherit">
				<nav>
					<h6 class="mb-2 ml-2 font-bold text-white capitalize">Profile</h6>
				</nav>
			</div>
		</nav>

		<div class="w-full px-6 mx-auto">
			<div
				class="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
				style="background-image: url('../assets/img/curved-images/curved0.jpg'); background-position-y: 50%"
			>
				<span
					class="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"
				/>
			</div>
			<div
				class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200"
			>
				<div class="flex flex-wrap -mx-3">
					<div class="flex-none w-auto max-w-full px-3">
						<div
							class="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200"
						>
							<img
								src="data:image/jpeg;base64,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"
								alt="profile_image"
								class="w-full shadow-soft-sm rounded-xl"
							/>
						</div>
					</div>
					<div class="flex-none w-auto max-w-full px-3 my-auto">
						<div class="h-full">
							<h5 class="mb-1">Alec Thompson</h5>
						</div>
					</div>
					<div
						class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12"
					>
						<div class="relative right-0" />
					</div>
				</div>
			</div>
		</div>
		<div class="w-full p-6 mx-auto">
			<div class="flex flex-wrap -mx-3">

				<div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
					<div
						class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
					>
						<div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
							<div class="flex flex-wrap -mx-3">
								<div
									class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none"
								>
									<h6 class="mb-0">Profile Information</h6>
								</div>

							</div>
						</div>
						<div class="flex-auto p-4">
							<hr
								class="h-px my-2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent"
							/>
							<ul class="flex flex-col pl-0 mb-0 rounded-lg">
								<li
									class="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"
								>
									<strong class="text-slate-700">Full Name:</strong> &nbsp; Alec M. Thompson
								</li>
								<li
									class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"
								>
									<strong class="text-slate-700">Mobile:</strong> &nbsp; +91 123 1234 123
								</li>
								<li
									class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"
								>
									<strong class="text-slate-700">Email:</strong> &nbsp; alecthompson@mail.com
								</li>

								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<Footer />
