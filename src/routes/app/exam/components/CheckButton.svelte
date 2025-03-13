<script>
	export let value;
	export let id;
	export let placeholder;

	function handleInputFocus(event) {
		event.target.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
	}
</script>

<div
	class:bg-green-700={value}
	class:text-white={value}
	class="my-1.5 rounded border border-black py-1 text-center"
>
	<label for={id} class="cursor-pointer px-2 py-2 select-none">
		<input {id} type="checkbox" bind:checked={value} class="hidden" />
		<span>{placeholder}</span>
	</label>
</div>
