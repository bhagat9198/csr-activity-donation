<script lang="ts">
	import PeopleAvtar from './peopleAvtar.svelte';

	export let counter: number;
	export let updateViewModalState: any;
	export let updateJoinModalState: any;
	export let name: string;
	export let description: string;
	export let imgLink: string;
	export let hasJoined: boolean;
	export let canView: boolean;
	export let allData: any;
</script>

<div
	class=" flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"
>
	<div class="">
		<a class="block shadow-xl rounded-2xl">
			<img src={imgLink} alt="img-blur-shadow" class="max-w-full shadow-soft-2xl rounded-2xl" />
		</a>
	</div>
	<div class="flex-auto px-1 pt-6">
		<p
			class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text"
		>
			No #{counter}
		</p>
		<a href="javascript:;">
			<h5>{name}</h5>
		</a>
		<p class="mb-6 leading-normal text-sm">
			{description}
		</p>
		<div class="flex items-center justify-between">
			{#if canView}
				<button
					on:click={() => updateViewModalState(true, allData)}
					type="button"
					class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
					>View</button
				>
			{:else if hasJoined}
				<button
					disabled
					type="button"
					class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
					>Joined</button
				>
			{:else}
				<button
					on:click={() => updateJoinModalState(true, allData)}
					type="button"
					class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
					>Join</button
				>
			{/if}
			<PeopleAvtar />
		</div>
	</div>
</div>
