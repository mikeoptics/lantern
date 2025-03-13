<script>
	let { data } = $props();
	import { Button } from '$lib/components/ui/button/index.js';
	import Input from '$lib/components/ui/input/input.svelte';

	import Activity from 'lucide-svelte/icons/activity';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import Download from 'lucide-svelte/icons/download';
	import Users from 'lucide-svelte/icons/users';

	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	// Define the variables
	let PYE_income = 20000; // Example: PAYE income
	let SE_income = 40000; // Example: self-employed income

	let PersonalAllowance = 12570; // Personal allowance for 2024/25
	let tax_band_1_limit = 50270; // Basic rate limit for 2024/25
	let tax_band_2_limit = 150000; // Higher rate limit for 2024/25

	// NIC variables
	let class_2_NIC = 3.45 * 52; // Annual Class 2 NIC (flat rate of £3.45 per week)
	let class_4_NIC_lower_limit = 12570; // Lower limit for Class 4 NICs
	let class_4_NIC_upper_limit = 50270; // Upper limit for Class 4 NICs
	let class_4_NIC_rate_1 = 0.09; // Class 4 NICs rate 9%
	let class_4_NIC_rate_2 = 0.02; // Class 4 NICs rate 2%

	// Step 1: Calculate total income
	let totalIncome = PYE_income + SE_income;

	// Step 2: Apply Personal Allowance
	let remainingPersonalAllowance = PersonalAllowance - Math.min(PYE_income, PersonalAllowance);
	let taxableSEIncome = SE_income - remainingPersonalAllowance;

	// Step 3: Calculate Income Tax
	// Apply 20% tax rate on income up to the basic rate limit
	let taxOnPYE =
		Math.max(0, Math.min(PYE_income, tax_band_1_limit) - remainingPersonalAllowance) * 0.2;
	let taxOnSE = Math.max(0, taxableSEIncome) * 0.2;

	// Apply 40% tax rate on income above the basic rate limit
	if (totalIncome > tax_band_1_limit) {
		taxOnPYE += Math.max(0, PYE_income - tax_band_1_limit) * 0.4;
	}
	if (totalIncome > tax_band_1_limit) {
		taxOnSE += Math.max(0, taxableSEIncome - tax_band_1_limit) * 0.4;
	}

	// Step 4: Calculate National Insurance Contributions
	// Class 2 NICs for self-employment
	let totalClass2NIC = SE_income >= class_4_NIC_lower_limit ? class_2_NIC : 0;

	// Class 4 NICs for self-employment
	let class4NIC1 =
		Math.max(0, Math.min(SE_income, class_4_NIC_upper_limit) - class_4_NIC_lower_limit) *
		class_4_NIC_rate_1;
	let class4NIC2 = Math.max(0, SE_income - class_4_NIC_upper_limit) * class_4_NIC_rate_2;

	// Total NICs
	let totalClass4NIC = class4NIC1 + class4NIC2;

	// Step 5: Calculate Total Tax and NICs
	let totalTax = taxOnPYE + taxOnSE;
	let totalNICs = totalClass2NIC + totalClass4NIC;

	let totalTaxAndNICs = totalTax + totalNICs;

	// Return the final values
	console.log('Total Income Tax: £', totalTax);
	console.log('Total National Insurance Contributions: £', totalNICs);
	console.log('Total Tax and NICs: £', totalTaxAndNICs);

	let bookings = 21;
	let revenue = 350 * bookings;
	let hours = 7.5 * bookings;
</script>

<div class="hidden flex-col md:flex">
	<div class="flex-1 space-y-4 p-8 pt-6">
		<h1 class="mb-6 text-3xl font-semibold">Dashboard</h1>
		<Tabs.Root value="monthly" class="space-y-4">
			<Tabs.List>
				<Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
				<Tabs.Trigger value="annually">Annually</Tabs.Trigger>
				<Tabs.Trigger value="reports">Reports</Tabs.Trigger>
				<Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="monthly" class="space-y-4">
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
							<DollarSign class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">£{revenue}</div>
							<p class="text-muted-foreground text-xs">+20.1% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Monthly Bookings</Card.Title>
							<Users class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">{bookings}</div>
							<p class="text-muted-foreground text-xs">+180.1% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Hours Worked</Card.Title>
							<CreditCard class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+{hours}</div>
							<p class="text-muted-foreground text-xs">+19% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Value per hour</Card.Title>
							<Activity class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">£{Number.parseInt(revenue / hours)}</div>
							<p class="text-muted-foreground text-xs">+£4 since last month</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card.Root class="col-span-4">
						<Card.Header>
							<Card.Title>Monthly</Card.Title>
						</Card.Header>
						<Card.Content></Card.Content>
					</Card.Root>
					<Card.Root class="col-span-3">
						<Card.Header>
							<Card.Title>Tax YTD</Card.Title>
							<Card.Description>
								Total Tax: £{totalTax}<br />
								Total NIC: £{totalNICs}<br />
								Total Tax + NICs: £{totalTaxAndNICs}<br />
							</Card.Description>
						</Card.Header>
						<Card.Content></Card.Content>
					</Card.Root>
				</div>
			</Tabs.Content>
			<Tabs.Content value="annually" class="space-y-4">
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Apr 24 - Apr 25 Revenue</Card.Title>
							<DollarSign class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">£{revenue * 12}</div>
							<p class="text-muted-foreground text-xs">+20.1% from last year</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">YTD Bookings</Card.Title>
							<Users class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">{bookings * 12}</div>
							<p class="text-muted-foreground text-xs">+180.1% from last year</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Hours Worked</Card.Title>
							<CreditCard class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+{hours}</div>
							<p class="text-muted-foreground text-xs">+19% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Value per hour</Card.Title>
							<Activity class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">£{Number.parseInt(revenue / hours)}</div>
							<p class="text-muted-foreground text-xs">+£4 since last month</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card.Root class="col-span-4">
						<Card.Header>
							<Card.Title>Monthly</Card.Title>
						</Card.Header>
						<Card.Content></Card.Content>
					</Card.Root>
					<Card.Root class="col-span-3">
						<Card.Header>
							<Card.Title>Tax YTD</Card.Title>
							<Card.Description>
								Total Tax: £{totalTax}<br />
								Total NIC: £{totalNICs}<br />
								Total Tax + NICs: £{totalTaxAndNICs}<br />
							</Card.Description>
						</Card.Header>
						<Card.Content></Card.Content>
					</Card.Root>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
