<script lang="ts">
	import AddDonation from '$lib/common/addDonation.svelte';
	import Footer from '$lib/common/footer.svelte';
	import Header from '$lib/common/header.svelte';
	import Navigation from '$lib/common/navigation.svelte';
	import PageHero from '$lib/common/pageHero.svelte';
	import PeopleAvtar from '$lib/common/peopleAvtar.svelte';
	import ViewDonation from '$lib/common/viewDonation.svelte';

	let displayAddModal = {
		status: false
	};
	let displayViewModal = {
		status: false
	};
</script>

<Header />
<div
	class="m-0 py-4 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
>
	<Navigation />

	<div
		class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen bg-gray-50 transition-all duration-200"
	>
		<PageHero heading="All Donations" />

		<div class="w-full px-6 mx-auto">
			<div class="flex-none w-full max-w-full px-3 mt-6">
				<div
					class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
				>
					<div class="flex-auto p-4">
						<div class="flex flex-wrap -mx-3">
							<div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
								<div
									class="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border"
								>
									<div
										on:click={() => (displayAddModal.status = true)}
										class="flex flex-col justify-center flex-auto p-6 text-center"
									>
										<a href="javascript:;">
											<i class="mb-4 fa fa-plus text-slate-400" />
											<h5 class="text-slate-400">New Donation</h5>
										</a>
									</div>
								</div>
							</div>

							<div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
								<div
									class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"
								>
									<div class="relative">
										<a class="block shadow-xl rounded-2xl">
											<img
												src="/img/home-decor-3.jpg"
												alt="img-blur-shadow"
												class="max-w-full shadow-soft-2xl rounded-2xl"
											/>
										</a>
									</div>
									<div class="flex-auto px-1 pt-6">
										<p
											class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text"
										>
											Donation #1
										</p>
										<a href="javascript:;">
											<h5>Modern</h5>
										</a>
										<p class="mb-6 leading-normal text-sm">
											As Uber works through a huge amount of internal management turmoil.
										</p>
										<div class="flex items-center justify-between">
											<button
												on:click={() => (displayViewModal.status = true)}
												type="button"
												class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
												>View Donations</button
											>
											<PeopleAvtar />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div />
		</div>
	</div>
</div>
<Footer />

<!-- add -->
{#if displayAddModal.status}
	<AddDonation {displayAddModal} />
{/if}

{#if displayViewModal.status}
	<ViewDonation {displayViewModal} />
{/if}
