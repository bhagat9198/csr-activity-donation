<script lang="ts">
	import { page } from '$app/stores';
	const pageRoute = $page.route.id?.split('/');
	let pageName = pageRoute?.[pageRoute?.length - 1] || '';
	if (pageName === 'signin') {
		pageName = 'signup';
	} else {
		pageName = 'signin';
	}
</script>

<div class="container top-0 z-sticky">
	<div class="flex flex-wrap -mx-3">
		<div class="w-full max-w-full px-3 flex-0">
			<!-- Navbar -->
			<nav
				class="absolute top-5 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start"
			>
				<div class="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
					<div class="flex gap-3">
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
									href={`/auth/${pageName}`}
									class="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
									>{pageName}</a
								>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
</div>
