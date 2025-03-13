<script>
	let canvas;
	let draw_mode = false;
	let m = { x: 0, y: 0 };
	let capture = $state();

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
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
	}

	function draw_on(e) {
		console.log('draw on');
		draw_mode = true;
		const ctx = canvas.getContext('2d');
		ctx.beginPath();
	}

	function draw_off(e) {
		console.log('draw off');

		draw_mode = false;
		capture = canvas.toDataURL('image/png');
	}

	console.log(canvas);
</script>

<canvas
	width="498px"
	height="100px"
	onmousemove={location}
	onmousedown={draw_on}
	onmouseup={draw_off}
	bind:this={canvas}
></canvas>

<button class="bg-green-600 text-white">Submit</button>
<button class="rounded-md bg-red-600 px-3 py-1 text-white" onclick={reset}> Reset </button>
