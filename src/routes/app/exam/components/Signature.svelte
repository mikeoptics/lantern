<script>
	import Button from '$lib/components/ui/button/button.svelte';

	let canvas;
	let w = 1;
	let draw_mode = false;
	let m = { x: 0, y: 0 };
	let capture = '';

	function location(e) {
		const ctx = canvas.getContext('2d');
		m = { x: e.clientX, y: e.clientY };
		if (draw_mode) {
			const ctx_rect = ctx.canvas.getBoundingClientRect();
			ctx.lineTo(e.clientX - ctx_rect.left, e.clientY - ctx_rect.top);
			ctx.stroke();
		}
	}

	function reset() {
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
		ctx.beginPath(); // Resets the drawing path
		capture = ''; // Clears the captured signature image
	}

	function draw_on(e) {
		draw_mode = true;
		const ctx = canvas.getContext('2d');
		ctx.beginPath();
	}

	function draw_off(e) {
		draw_mode = false;
		capture = canvas.toDataURL('image/png');
	}
</script>

<svelte:window bind:innerWidth={w} />
<sub>Sign below</sub>
<div>
	<canvas
		class="mb-2 h-20 w-64 rounded-md border-2"
		width="256px"
		height="80px"
		on:load={draw_on}
		on:mousemove={location}
		on:mousedown={draw_on}
		on:mouseup={draw_off}
		bind:this={canvas}
	></canvas>
	{#if capture != ''}
		<img class="h-20 border-2" alt="signature" src={capture} />
		<Button class=" bg-green-600 text-white">Submit</Button>
		<Button class=" bg-red-500" onclick={() => reset()}>Reset</Button>
	{/if}
</div>
