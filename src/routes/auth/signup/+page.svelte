<script lang="ts">
	import AuthHeader from '$lib/common/authHeader.svelte';
	import Footer from '$lib/common/footer.svelte';

	let name: string, email: string, phone: string, category: string, password: string;
	async function submitForm(event: any) {
		// console.log('submitForm :: event :: ', event);
		// console.log('submitForm :: event :: ', name, email, phone, category, password);


	}

	function nameHandler(e:Event) {
		const target  = e.target as HTMLInputElement;
		if(target) {
			console.log(target.value);
			name = target.value
		}
	}
	
	function emailHandler(e:Event) {
		const target  = e.target as HTMLInputElement;
		if(target) {
			console.log(target.value);
			email = target.value
		}
	}

	function phoneHandler(e:Event) {
		const target  = e.target as HTMLInputElement;
		if(target) {
			console.log(target.value);
			email = target.value
		}
	}

	function passwordHandler(e:Event) {
		const target  = e.target as HTMLInputElement;
		if(target) {
			console.log(target.value);
			email = target.value
		}
	}

	function categoryHandler(e:Event) {
		const target  = e.target as HTMLSelectElement;
		if(target) {
			console.log(target.value);
			email = target.value
		}
	}
</script>

<div
	class="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500"
>
	<AuthHeader />
	<section class="min-h-screen mb-20">
		<div
			class="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
			style="background-image: url('/images/auth-cover-2.jpeg')"
		>
			<span
				class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-700 opacity-60"
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
							<form on:submit={submitForm} role="form text-left">
								<div class="mb-4">
									<input
										type="text"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Name"
										on:input={nameHandler}
									/>
								</div>
								<div class="mb-4">
									<input
										type="email"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Email"
										on:input={emailHandler}
									/>
								</div>
								<div class="mb-4">
									<input
										type="number"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Phone Number"
										on:input={phoneHandler}
									/>
								</div>
								<div class="mb-4">
									<input
										type="password"
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
										placeholder="Password"
										on:input={passwordHandler}
									/>
								</div>
								<div class="mb-4">
									<select
										on:input={categoryHandler}
										class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
									>
										<option disabled selected value="">You are </option>
										<option value="Corprate">Corprate</option>
										<option value="NGO">NGO</option>
										<option value="Customer">Customer</option>
									</select>
								</div>
								<div class="text-center">
									<button
										type="submit"
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
