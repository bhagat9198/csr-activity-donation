<script lang="ts">
	import userStore from './../store/user';
	import { page } from '$app/stores';
	const pageRoute = $page.route.id?.split('/');
	const pageName = pageRoute?.[pageRoute?.length - 1] || '';
</script>

<aside
	class="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent"
>
	<div class="h-19.5">
		<i
			class="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
		/>
		<a class="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700" target="_blank">
			<span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand" />
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
					class={`${
						pageName === 'activities'
							? 'py-2.7 text-sm shadow-soft-xl ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors'
							: 'py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors'
					} `}
					href={`/${$userStore.category}/activities`}
				>
					<div
						class={`${
							pageName === 'activities'
								? 'bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5'
								: 'icon text-icon shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5'
						} `}
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
					<span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Activities</span
					>
				</a>
			</li>

			<li class="mt-0.5 w-full">
				<a
					class={`${
						pageName === 'donations'
							? 'py-2.7 text-sm shadow-soft-xl ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors'
							: 'py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors'
					} `}
					href={`/${$userStore.category}/donations`}
				>
					<div
						class={`${
							pageName === 'donations'
								? 'bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5'
								: 'icon text-icon shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5'
						} `}
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
					<span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Donations</span>
				</a>
			</li>

			<li class="w-full mt-4">
				<h6 class="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60">
					Account pages
				</h6>
			</li>

			<li class="mt-0.5 w-full">
				<a
					class={`${
						pageName === 'profile'
							? 'py-2.7 text-sm shadow-soft-xl ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors'
							: 'py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors text-black'
					} `}
					href={`/${$userStore.category}/profile`}
				>
					<div
						class={`${
							pageName === 'profile'
								? 'bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5'
								: 'icon text-icon shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5'
						} `}
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
									fill="#000"
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
