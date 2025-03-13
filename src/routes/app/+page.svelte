<script>
	let { data } = $props();
	import { Button } from '$lib/components/ui/button/index.js';
</script>

Hi, {data.user.username} (user ID is {data.user.id})
