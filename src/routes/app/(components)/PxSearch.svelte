<script>
	import User from 'lucide-svelte/icons/user';
	import Search from 'lucide-svelte/icons/search';
	import ShieldCheck from 'lucide-svelte/icons/Shield-Check';

	import PxAdd from './PxAdd.svelte';

	import * as Command from '$lib/components/ui/command/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import Input from '$lib/components/ui/input/input.svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import { slide, fade } from 'svelte/transition';

	let i = $state(0);

	let hideSearch = $state(false);

	let patients = $state([]);
	let searchQuery = $state('');

	let showItems = $derived(patients.length !== 0);

	async function searchPatients(query) {
		if (searchQuery.length < 3) {
			patients = [];
			return;
		}

		if (!query.trim()) return;

		try {
			const response = await fetch(`/api/patientsearch?query=${encodeURIComponent(query)}`);
			if (!response.ok) throw new Error('Failed to fetch patients');

			// Update the patients list with the response data
			patients = await response.json();
			i = patients.length;
			patients = [...patients]; // Force reactivity update

			return patients;
		} catch (error) {
			console.error(error);
			patients = []; // Clear patients on error
		}
	}
</script>

<div class=" flex flex-1 flex-col-reverse sm:flex-col">
	<div class="relative mx-1.5 h-10">
		<!-- SEARCH INPUT FIELD -->
		<Input
			class=" mb-1 "
			placeholder="Patient search"
			bind:value={searchQuery}
			oninput={() => {
				searchPatients(searchQuery);
			}}
			onkeypress={(e) => {
				console.log(e.key);
				if (e.key === 'Enter') {
					hideSearch = true;
					searchQuery = '';
				}
			}}
		/>
		{#if searchQuery.length === 0}
			<Search
				class="sm:text-muted-foreground absolute top-[50%] right-3 z-50 ml-3 h-4 w-4  translate-y-[-50%]"
			/>
		{/if}

		<!-- ADD NEW PATIENT MODAL-->
		<div in:fade>
			<Dialog.Root bind:open={() => hideSearch, (newOpen) => (hideSearch = newOpen)}>
				{#if searchQuery.length !== 0}
					<Dialog.Trigger
						class="text-muted-foreground absolute top-[50%] right-3 h-4 w-4 translate-y-[-50%] cursor-pointer hover:stroke-red-400"
					>
						<Plus class="h-4 w-4 stroke-green-600"></Plus>
					</Dialog.Trigger>
				{/if}
				<Dialog.Content class="max-h-screen overflow-y-scroll">
					<Dialog.Header>
						<Dialog.Title>Would you like to add a new patient?</Dialog.Title>
						<div class="overflow-scroll">
							<div class="flex-1/2">
								<label for="givenName" class="block text-sm font-medium">First Name</label>
								<input
									type="text"
									id="givenName"
									name="givenName"
									class="w-full rounded border p-2"
								/>
							</div>

							<div class="flex-1/2">
								<label for="familyName" class="block text-sm font-medium">Surname</label>
								<input
									type="text"
									id="familyName"
									name="familyName"
									class="w-full rounded border p-2"
								/>
							</div>

							<div class="flex-1">
								<label for="birthDate" class="block text-sm font-medium">Birth Date</label>
								<input
									type="date"
									id="birthDate"
									name="birthDate"
									value="1990-11-28"
									class="w-full rounded border p-2"
								/>
							</div>

							<div class="flex-1">
								<label for="phone" class="block text-sm font-medium">Phone</label>
								<input
									type="text"
									id="phone"
									name="phone"
									value=""
									class="w-full rounded border p-2"
								/>
							</div>

							<div class="flex-1">
								<label for="email" class="block text-sm font-medium">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									value=""
									class="w-full rounded border p-2"
								/>
							</div>

							<div class="flex-1">
								<label for="addressLine1" class="block text-sm font-medium">Address Line 1</label>
								<input
									type="text"
									id="addressLine1"
									name="addressLine1"
									value="40 Faraday Close"
									class="w-full rounded border p-2"
								/>
							</div>

							<div class="flex gap-4">
								<div class="flex-1">
									<label for="addressLine2" class="block text-sm font-medium">Address Line 2</label>
									<input
										type="text"
										id="addressLine2"
										name="addressLine2"
										value=""
										class="w-full rounded border p-2"
									/>
								</div>

								<div class="flex-1">
									<label for="city" class="block text-sm font-medium">City</label>
									<input
										type="text"
										id="city"
										name="city"
										value="Ipswich"
										class="w-full rounded border p-2"
									/>
								</div>
							</div>

							<div class="flex gap-4">
								<div class="flex-1">
									<label for="district" class="block text-sm font-medium">District</label>
									<input
										type="text"
										id="district"
										name="district"
										value=""
										class="w-full rounded border p-2"
									/>
								</div>

								<div class="flex-1">
									<label for="state" class="block text-sm font-medium">State</label>
									<input
										type="text"
										id="state"
										name="state"
										value=""
										class="w-full rounded border p-2"
									/>
								</div>
							</div>

							<div class="flex gap-4">
								<div class="flex-1">
									<label for="postalCode" class="block text-sm font-medium">Postal Code</label>
									<input
										type="text"
										id="postalCode"
										name="postalCode"
										value="IP5 4AA"
										class="w-full rounded border p-2"
									/>
								</div>

								<div class="flex-1">
									<label for="country" class="block text-sm font-medium">Country</label>
									<input
										type="text"
										id="country"
										name="country"
										value="United Kingdom"
										class="w-full rounded border p-2"
									/>
								</div>
							</div>

							<div class="mt-4 flex justify-end">
								<button type="submit" class="rounded bg-blue-500 p-2 text-white">Submit</button>
							</div>
						</div>
					</Dialog.Header>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	</div>

	<!-- SEARCH RESULTS -->
	<div
		class="relative flex flex-col space-y-0.5 overflow-scroll rounded-md border
		border-transparent py-2 text-sm shadow-lg lg:border-l"
	>
		{#if searchQuery.length > 2}
			{#each patients.slice(0, i) as { givenName, familyName, gender, id }}
				<div transition:slide class="hover:bg-accent flex-1 cursor-pointer">
					<div class="my-1 flex w-full">
						<a href={`/app/patient?id=${id}`} class="flex flex-1">
							<User class="p-1" color={gender ? 'blue' : 'red'} />
							<span class="mx-2 mt-0.5">{givenName} {familyName}</span>
						</a>
						<div class="flex">
							<span class="mt-0.5 hidden">{gender}</span><ShieldCheck
								class={`${gender ? 'hidden' : ''} p-0.5`}
								color="blue"
							></ShieldCheck>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>
