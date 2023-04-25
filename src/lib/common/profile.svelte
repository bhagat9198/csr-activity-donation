<script>
	import Footer from '$lib/common/footer.svelte';
	import Header from '$lib/common/header.svelte';
	import Navigation from '$lib/common/navigation.svelte';
	import PageHero from '$lib/common/pageHero.svelte';

	import userStore from '$lib/store/user';

</script>

<Header />
<div
	class="m-0 py-4 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
>
	<Navigation />

	<div
		class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen bg-gray-50 transition-all duration-200"
	>
		<PageHero heading={$userStore.name} />
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
									<strong class="text-slate-700">Full Name:</strong> &nbsp; {$userStore.name}
								</li>
								<li
									class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"
								>
									<strong class="text-slate-700">Mobile:</strong> &nbsp; +91 {$userStore.phone}
								</li>
								<li
									class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"
								>
									<strong class="text-slate-700">Email:</strong> &nbsp; {$userStore.phone}
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
