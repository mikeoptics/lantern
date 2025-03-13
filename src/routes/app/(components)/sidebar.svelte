<script>
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { page } from '$app/state';
	let base = `${page.url.origin}/app`;
	let className = $state();

	export { className as class };

	import PxSearch from '../(components)/PxSearch.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<div class=" sm:h-screen">
	<!-- Logo -->
	<img
		src="/logos/lantern-mark.svg"
		class="mx-2 mt-2 mb-6 hidden h-16 sm:block"
		alt="logo mark lantern"
	/>
	<PxSearch></PxSearch>
	<!-- List -->
	<div class="flex gap-1 sm:flex-col">
		<Button variant="secondary" class="flex-1 justify-start rounded-none" href="{base}/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mx-auto h-4 w-4 sm:mx-0 sm:mr-2"
			>
				<circle cx="12" cy="12" r="10" />
				<polygon points="10 8 16 12 10 16 10 8" />
			</svg>
			<span class="hidden w-30 sm:inline-block">Dashboard</span>
		</Button>

		<Button variant="ghost" class="flex-1 justify-start rounded-none" href="{base}/status">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mx-auto h-4 w-4 sm:mx-0 sm:mr-2"
			>
				<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
				<circle cx="12" cy="7" r="4" />
			</svg>
			<span class="hidden sm:inline-block">Status Update</span>
		</Button>
		<Button variant="ghost" class="flex-1 justify-start rounded-none" href="/calendar.ics">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mx-auto h-4 w-4 sm:mx-0 sm:mr-2"
			>
				<rect width="7" height="7" x="3" y="3" rx="1" />
				<rect width="7" height="7" x="14" y="3" rx="1" />
				<rect width="7" height="7" x="14" y="14" rx="1" />
				<rect width="7" height="7" x="3" y="14" rx="1" />
			</svg>
			<span class="hidden sm:inline-block">Diary</span>
		</Button>
		<Button variant="ghost" class="flex-1 justify-start rounded-none" href="{base}/exam">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mx-auto h-4 w-4 sm:mx-0 sm:mr-2"
			>
				<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
				<path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
				<circle cx="12" cy="12" r="2" />
				<path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
				<path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
			</svg>
			<span class="hidden sm:inline-block">Examination</span>
		</Button>

		<Button
			variant="ghost"
			class="flex-1 justify-start rounded-none"
			href="{base}/patient?id=6ed1f12c-0475-41d8-a19f-cb8d5b2edc85"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mx-auto h-4 w-4 sm:mx-0 sm:mr-2"
			>
				<path d="M21 15V6" />
				<path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
				<path d="M12 12H3" />
				<path d="M16 6H3" />
				<path d="M12 18H3" />
			</svg>
			<span class="hidden sm:inline-block">Example Patient Record</span>
		</Button>

		<Button variant="ghost" class="flex-1 justify-start rounded-none" href="{base}/eGOS">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mx-auto h-4 w-4 sm:mx-0 sm:mr-2"
			>
				<circle cx="8" cy="18" r="4" />
				<path d="M12 18V2l7 4" />
			</svg>
			<span class="hidden sm:inline-block">eGOS Signature Example</span>
		</Button>
	</div>
	<!-- 
		<div class="py-2">
			<h2 class="relative px-7 text-lg font-semibold tracking-tight">Current Patients</h2>
			<ScrollArea class="h-[300px] px-1">
				<div class="space-y-1 p-2">
					{#each patients as patient}
						<Button variant="ghost" class="w-full justify-start font-normal">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2 h-4 w-4"
							>
								<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
								<circle cx="12" cy="7" r="4" />
							</svg>
							{patient}
						</Button>
					{/each}
				</div>
			</ScrollArea>
		</div>
		-->
</div>

<Button class="absolute bottom-2 left-2 hidden sm:block" href="logout">Sign out</Button>
