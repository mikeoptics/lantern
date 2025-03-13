<script>
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	let { data } = $props();
	let patient = $derived(data.item[0]);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="flex justify-between">
			<div>
				<h2 class="text-xl font-bold text-gray-800">
					{patient.givenName}
					{patient.familyName}
				</h2>
			</div>
			<div class="text-sm">
				ID {patient.identifier}
				<span
					class={`rounded-full px-3 py-1 text-sm font-medium ${patient.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
				>
					{patient.active ? 'Active' : 'Inactive'}
				</span>
			</div>
		</Card.Title>
		<Card.Description>
			<p class="text-gray-700"><strong>Born:</strong> {patient.birthDate}</p>
		</Card.Description>
	</Card.Header>
	<Card.Content class="space-y-2">
		<div class="mt-4">
			<p class="text-gray-700"><strong>Phone:</strong> {patient.phone}</p>
			<p class="text-gray-700"><strong>Email:</strong> {patient.email}</p>
		</div>

		<div class="mt-4">
			<p class="text-gray-700"><strong>Address:</strong></p>
			<p class="text-sm text-gray-500">
				{patient.addressLine1}{patient.addressLine2 ? ', ' + patient.addressLine2 : ''},
				{patient.city}, {patient.state}, {patient.postalCode}, {patient.country}
			</p>
		</div>
	</Card.Content>
	<Card.Footer><!--nothing--></Card.Footer>
</Card.Root>
<Tabs.Root value="spectacle" class="mt-2">
	<Tabs.List class="grid w-full grid-cols-2">
		<Tabs.Trigger value="spectacle">Spectacle Prescription</Tabs.Trigger>
		<Tabs.Trigger value="contactlens">Contact Lens Prescription</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="spectacle">
		<Card.Root class="inset-shadow-primary inset-shadow">
			<Card.Header>
				<Card.Title>23 March 2024</Card.Title>
				<Card.Description>Issued by Sarah Owen</Card.Description>
			</Card.Header>
			<Card.Content class="grid grid-cols-4 gap-1 space-y-2">
				{#snippet Rx(label, id, value)}
					<div class="space-y-1">
						<Label for={id}>{label}</Label>
						<Input {id} {value} disabled />
					</div>
				{/snippet}

				{@render Rx('Sph (R)', 'sph-r', '+2.00')}
				{@render Rx('Cyl (R)', 'cyl-r', '-2.00')}
				{@render Rx('Axis (R)', 'axis-r', '90')}
				{@render Rx('Prism (R)', 'prism-r', '2 Base Up')}
				{@render Rx('Sph (L)', 'sph-l', '+2.00')}
				{@render Rx('Cyl (L)', 'cyl-l', '-1.00')}
				{@render Rx('Axis (L)', 'axis-l', '70')}
				{@render Rx('Prism (L)', 'prism-l', '2 Base Down')}
			</Card.Content>
			<Card.Footer>
				<Button class="cursor-pointer">Dispense</Button>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="contactlens">
		<Card.Root>
			<Card.Header>
				<Card.Title>Latest</Card.Title>
				<Card.Description>
					Change your password here. After saving, you'll be logged out.
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-2">
				<div class="space-y-1">
					<Label for="current">Current password</Label>
					<Input id="current" type="password" />
				</div>
				<div class="space-y-1">
					<Label for="new">New password</Label>
					<Input id="new" type="password" />
				</div>
			</Card.Content>
			<Card.Footer>
				<Button>Save password</Button>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content>
</Tabs.Root>
