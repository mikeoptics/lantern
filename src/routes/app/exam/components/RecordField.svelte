<script>
	import { tick } from 'svelte';

	export let field;
	export let eye = null;

	function handleInputFocus(event) {
		event.target.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
	}

	async function handleKeydown(event) {
		if (event.key == 'Tab' && this.value == '') {
			this.value = this.placeholder;
		} else if (event.key === 'ArrowRight' && this.value == '') {
			if (placeholderIndex == field.placeholder.length - 1) {
				placeholderIndex = 0;
			} else {
				placeholderIndex++;
			}
			this.placeholder = field.placeholder[placeholderIndex];
		} else if (event.key === 'ArrowLeft' && this.value == '') {
			if (placeholderIndex == 0) {
				placeholderIndex = field.placeholder.length - 1;
			} else {
				placeholderIndex--;
			}
			this.placeholder = field.placeholder[placeholderIndex];
		}
	}

	let placeholderIndex = 0;
</script>

{#if field.right !== undefined}
	<label class="text-sm font-bold tracking-wide uppercase">
		{field.title()}
		<div class="record-field gap-1">
			{#each ['right', 'left'] as eye}
				<textarea
					bind:value={field[eye]}
					id={field.id}
					on:focus={handleInputFocus}
					placeholder={field.placeholder[0]}
					on:keydown={handleKeydown}
					class="w-full flex-1 rounded-md border bg-gray-200 px-2 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-gray-100 focus:outline-hidden"
				></textarea>
			{/each}
		</div>
	</label>
{:else}
	<div class="record-field flex-col">
		<label for={field.id} class="text-sm font-semibold tracking-wide text-gray-700 uppercase">
			{field.title()}

			<textarea
				bind:value={field[eye ?? 'value']}
				id={field.id}
				on:focus={handleInputFocus}
				placeholder={field.placeholder[0]}
				on:keydown={handleKeydown}
				class="mb-0.5 w-full flex-1 rounded-md border bg-gray-200 px-2 py-2 leading-tight font-normal text-gray-700 focus:border-gray-500 focus:bg-gray-100 focus:outline-hidden"
			></textarea>
		</label>
	</div>
{/if}

<style>
	.record-field {
		@apply flex flex-1;
	}
</style>
