<script>
	import Footer from '$lib/common/footer.svelte';

</script>
<div
	class="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500"
>
	<div class="container  top-0 z-sticky">
		<div class="flex flex-wrap -mx-3">
			<div class="w-full max-w-full px-3 flex-0">
				<!-- Navbar -->
				<nav
					class="absolute top-5 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start"
				>
					<div class="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
						<div class="flex gap-3" >
							  <img src="/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Yours only CSR Logo" />
								<a
									class="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0"
									href="/"
								>
									Yours only CSR
								</a>
						</div>

						<div
							class="flex justify-between items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto"
						>
							<div />

							<ul class="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
								<li>
									<a
										href="/auth/signin"
										class="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
										>Signin</a
									>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
	<section class="min-h-screen mb-20">
		<div
			class="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
			style="background-image: url('../assets/img/curved-images/curved14.jpg')"
		>
			<span
				class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"
			/>
			<div class="container z-10">
				<div class="flex flex-wrap justify-center -mx-3">
					<div class="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
						<h1 class="mt-16 mb-2 text-white">Welcome!</h1>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
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
										placeholder="Name"
										aria-label="Name"
										aria-describedby="email-addon"
									/>
								</div>
								<div class="mb-4">
									<input
										type="email"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Email"
										aria-label="Email"
										aria-describedby="email-addon"
									/>
								</div>
								<div class="mb-4">
									<input
										type="number"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Phone Number"
										aria-label="Email"
										aria-describedby="email-addon"
									/>
								</div>
								<div class="mb-4">
									<input
										type="password"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Password"
										aria-label="Password"
										aria-describedby="password-addon"
									/>
								</div>
								<div class="mb-4">
									<select
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  >
                    <option disabled selected value="" >You are </option>
                    <option  value="" >Corprate</option>
                    <option  value="" >NGO</option>
                    <option  value="" >Customer</option>
                  </select>
								</div>
								<div class="text-center">
									<button
										type="button"
										class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
										>Sign up</button
									>
								</div>
								<p class="mt-4 mb-0 leading-normal text-sm">
									Already have an account? <a href="/auth/signin" class="font-bold text-slate-700"
										>Sign in</a
									>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<Footer />