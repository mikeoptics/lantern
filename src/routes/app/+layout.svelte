<script>
	import '../../app.css';
	let { children } = $props();

	import PlusCircled from 'svelte-radix/PlusCircled.svelte';

	import { Sidebar } from './(components)';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { enhance } from '$app/forms';
</script>

<div class="flex h-screen flex-col-reverse sm:flex-row">
	<Sidebar />
	<div class="flex-1 overflow-scroll lg:border-l">
		<!-- Main Body-->
		<div class="h-full px-4 py-6 lg:px-8">
			{@render children()}
		</div>
	</div>
</div>
