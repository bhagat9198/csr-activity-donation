<script lang="ts">
	import { page } from '$app/stores';
	const pageRoute = $page.route.id?.split('/');
	const pageName = pageRoute?.[pageRoute?.length - 1] || '';
	
	export let heading = ''


</script>

<nav
	class="absolute z-20 flex flex-wrap items-center justify-between w-full px-6 py-2 text-white transition-all shadow-none duration-250 ease-soft-in lg:flex-nowrap lg:justify-start"
>
	<div class="flex items-center justify-between w-full px-6 py-1 mx-auto flex-wrap-inherit">
		<nav>
			<h6 class="mb-2 ml-2 font-bold text-white capitalize">{pageName?.toUpperCase()}</h6>
		</nav>
	</div>
</nav>

<div class="w-full px-6 mx-auto">
	<div
		class="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
		style={`background-image: url('/images/${pageName}.jpg'); background-position-y: 50%`}
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
					<h5 class="mb-1">{heading}</h5>
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
