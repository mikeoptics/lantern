<script>
	import Canvas from '../app/exam/components/Canvas.svelte';
	import { trapFocus } from './actions.js';

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];

	let selected = $state('black');
	let size = $state(10);
	let showMenu = $state(false);

	let canvas;
</script>

<div class="container">
	<Canvas bind:this={canvas} color={selected} {size} />

	<div class="controls">
		<button class="show-menu" onclick={() => (showMenu = !showMenu)}>
			{showMenu ? 'close' : 'menu'}
		</button>

		<button onclick={() => canvas.clear()}> clear </button>
	</div>
</div>

<style>
	.container {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.controls {
		position: absolute;
		left: 0;
		top: 0;
		padding: 1em;
	}

	.show-menu {
		width: 5em;
	}
</style>
