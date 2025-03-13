<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Add new patient</Dialog.Trigger>
	<Dialog.Header>
		<Dialog.Title>Add a new patient</Dialog.Title>
		<Dialog.Description>Save</Dialog.Description>
	</Dialog.Header>
	<Dialog.Content class="sm:max-w-[425px]">
		<main class="flex flex-col gap-4 p-4">
			<div>
				<label for="identifier" class="block text-sm font-medium">Identifier</label>
				<input
					type="text"
					id="identifier"
					name="identifier"
					value="NHS"
					class="w-full rounded border p-2"
				/>
			</div>

			<div class="flex-1">
				<label for="active" class="block text-sm font-medium">Active</label>
				<input
					type="number"
					id="active"
					name="active"
					value="1"
					class="w-full rounded border p-2"
				/>
			</div>

			<div class="flex-1">
				<label for="givenName" class="block text-sm font-medium">Given Name</label>
				<input
					type="text"
					id="givenName"
					name="givenName"
					value="Mike"
					class="w-full rounded border p-2"
				/>
			</div>

			<div class="flex-1">
				<label for="familyName" class="block text-sm font-medium">Family Name</label>
				<input
					type="text"
					id="familyName"
					name="familyName"
					value="Parker"
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
				<label for="gender" class="block text-sm font-medium">Gender</label>
				<input
					type="text"
					id="gender"
					name="gender"
					value="Male"
					class="w-full rounded border p-2"
				/>
			</div>

			<div class="flex-1">
				<label for="phone" class="block text-sm font-medium">Phone</label>
				<input type="text" id="phone" name="phone" value="" class="w-full rounded border p-2" />
			</div>

			<div class="flex-1">
				<label for="email" class="block text-sm font-medium">Email</label>
				<input type="email" id="email" name="email" value="" class="w-full rounded border p-2" />
			</div>

			<div class="flex-1">
				<label for="addressUse" class="block text-sm font-medium">Address Use</label>
				<input
					type="text"
					id="addressUse"
					name="addressUse"
					value=""
					class="w-full rounded border p-2"
				/>
			</div>

			<div class="flex-1">
				<label for="addressType" class="block text-sm font-medium">Address Type</label>
				<input
					type="text"
					id="addressType"
					name="addressType"
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
					<input type="text" id="state" name="state" value="" class="w-full rounded border p-2" />
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

			<div class="flex gap-4">
				<div class="flex-1">
					<label for="periodStart" class="block text-sm font-medium">Period Start</label>
					<input
						type="date"
						id="periodStart"
						name="periodStart"
						value=""
						class="w-full rounded border p-2"
					/>
				</div>

				<div class="flex-1">
					<label for="periodEnd" class="block text-sm font-medium">Period End</label>
					<input
						type="date"
						id="periodEnd"
						name="periodEnd"
						value=""
						class="w-full rounded border p-2"
					/>
				</div>
			</div>

			<div class="flex gap-4">
				<div class="flex-1">
					<label for="createdAt" class="block text-sm font-medium">Created At</label>
					<input
						type="text"
						id="createdAt"
						name="createdAt"
						value="2025-02-23T02:51:19.943Z"
						class="w-full rounded border p-2"
						disabled
					/>
				</div>

				<div class="flex-1">
					<label for="updatedAt" class="block text-sm font-medium">Updated At</label>
					<input
						type="text"
						id="updatedAt"
						name="updatedAt"
						value="2025-02-23T02:51:19.943Z"
						class="w-full rounded border p-2"
						disabled
					/>
				</div>
			</div>

			<div class="mt-4 flex justify-end">
				<button type="submit" class="rounded bg-blue-500 p-2 text-white">Submit</button>
			</div>
		</main>
		<Dialog.Footer>
			<Button type="submit">Add</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
