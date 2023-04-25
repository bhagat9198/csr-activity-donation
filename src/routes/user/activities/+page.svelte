<script lang="ts">
	import Footer from '$lib/common/footer.svelte';
	import Header from '$lib/common/header.svelte';
	import JoinActivity from '$lib/common/joinActivity.svelte';
	import Navigation from '$lib/common/navigation.svelte';
	import PageHero from '$lib/common/pageHero.svelte';
	import PeopleAvtar from '$lib/common/peopleAvtar.svelte';

	let displayJoinModal = {
		status: false
	};
</script>

<Header />
<div
	class="m-0 py-5 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
>
	<Navigation />

	<div
		class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen bg-gray-50 transition-all duration-200"
	>
		<PageHero heading="All Activities to Participate" />
		<div class="w-full px-6 mx-auto">
			<div
				class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200"
			>
				<div class="flex justify-between flex-wrap -mx-3 my-4">
					<div class="flex-none w-auto max-w-full px-3 my-auto">
						<div class="h-full">
							<h5 class="mb-1">Your All Activities</h5>
						</div>
					</div>
					<div class="pr-4">
						<div class="relative right-0" />
					</div>
				</div>
			</div>
			<div class="flex-none w-full max-w-full px-3 mt-6">
				<div
					class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
				>
					<div class="flex-auto p-4">
						<div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
							<div
								class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"
							>
								<div class="relative">
									<a class="block shadow-xl rounded-2xl">
										<img
											src="/img/home-decor-1.jpg"
											alt="img-blur-shadow"
											class="max-w-full shadow-soft-2xl rounded-2xl"
										/>
									</a>
								</div>
								<div class="flex-auto px-1 pt-6">
									<p
										class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text"
									>
										Activity #1
									</p>
									<a href="javascript:;">
										<h5>Modern</h5>
									</a>
									<p class="mb-6 leading-normal text-sm">
										As Uber works through a huge amount of internal management turmoil.
									</p>
									<div class="flex items-center justify-between">
										<button
											on:click={() => (displayJoinModal.status = true)}
											type="button"
											class="inline-block px-3 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
											>View Activity</button
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

<Footer />

<!-- join -->
{#if displayJoinModal.status}
	<JoinActivity {displayJoinModal} />
{/if}
