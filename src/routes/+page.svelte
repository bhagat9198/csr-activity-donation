<script>
	import Footer from '$lib/common/footer.svelte';
	import { add } from '$lib/utils/firebaseUtils';

</script>

<header class="fixed w-full">
	<nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
		<div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
			<a href="/" class="flex items-center">
				<img src="/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Yours only CSR Logo" />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>Yours only CSR</span
				>
			</a>
			<div class="flex items-center lg:order-2">
				<div class="hidden mt-2 mr-4 sm:inline-block">
					<a
						class="github-button"
						href="/auth/signup"
						data-size="large"
						data-icon="octicon-star"
						data-show-count="true">Signup</a
					>
				</div>
				<a
					href="/auth/signin"
					class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
					>Signin</a
				>
			</div>
		</div>
	</nav>
</header>

<!-- Start block -->
<section class="bg-white dark:bg-gray-900">
	<div
		class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
	>
		<div class="mr-auto place-self-center lg:col-span-7">
			<h1
				class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
			>
				Building CSR <br />for All
			</h1>
			<p
				class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				Corporate Social Responsibility (CSR) is the idea that a company should play a positive role
				in the community by consider the environmental and social impact. CSR can be beneficial to a
				company in several ways. The first is by improving its brand image. When customers or
				clients see evidence that a business is socially responsible, they tend to respond
				positively. Some examples of CSR components are encouraging charity, volunteer work,
				supporting local communities, improving labour policies, engaging in wildlife conservation
				initiatives, ensuring diversity and equality in the workplace, investing in non-profit
				organizations, and guaranteeing ethically sourced materials.  In this project we aim to
				design a common CSR portal to connect many organizations in a single platform, through the
				common platform it will be easy for the people or communities to use the CSR initiative
				effectively.
			</p>
		</div>
		<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
			<img src="/images/hero.png" alt="hero image" class="w-full h-full object-contain" />
		</div>
	</div>
</section>

<section class="bg-gray-50 dark:bg-gray-800">
	<div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
		<!-- Row -->
		<div class="items-center gap-8 lg:grid xl:gap-16">
			<div class="text-gray-500 sm:text-lg dark:text-gray-400">
				<h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
					Aims and Objectives
				</h2>

				<!-- List -->
				<ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
					<li class="flex space-x-3">
						<!-- Icon -->
						<svg
							class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>To create a common web portal to connect corporate and various organization to
							enhance CSR activities.</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<svg
							class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>To provide research, training, practice, capacity building, standard setting,
							activities rating, monitoring, recognition and related support in the field of CSR.</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<svg
							class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>To facilitate exchange of experiences and ideas between various stakeholders for
							developing a framework for strengthening of CSR activities.</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<svg
							class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>To facilitate any other assistance directly or indirectly for activities which seek
							to promote CSR practices.</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<svg
							class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>To establish a database of credible implementing outfits with whom the corporate
							entities as well as the donor organisations can collaborate and work.</span
						>
					</li>
					<li class="flex space-x-3">
						<!-- Icon -->
						<svg
							class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
							>To conduct activities relating to public health, environment and employment
							enhancing.</span
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<Footer />
