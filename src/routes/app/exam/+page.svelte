<script>
	import RecordField from './components/RecordField.svelte';
	import CheckButton from './components/CheckButton.svelte';
	import Signature from './components/Signature.svelte';

	class Section {
		constructor(id, fields) {
			this.id = id;
			this.fields = fields;
		}
		title() {
			return this.id
				.replace(/(^\w)/g, (g) => g[0])
				.replace(/([-_]\w)/g, (g) => ' ' + g[1])
				.trim();
		}
	}

	class Field {
		constructor(id, placeholder, value1, value2) {
			this.id = id;
			this.placeholder = placeholder;
			if (value2 !== undefined) {
				this.right = value1;
				this.left = value2;
			} else {
				this.value = value1;
			}
		}
		title() {
			return this.id
				.replace(/(^\w)/g, (g) => g[0])
				.replace(/([-_]\w)/g, (g) => ' ' + g[1])
				.trim();
		}
	}

	let examination = [
		new Section('preliminary', [
			new Field(
				'History_and_Symptoms',
				['no symptoms', 'headaches', 'blurry in the distance', 'struggling with reading'],
				null
			),
			new Field('Ocular_History', ['no ocular history'], null),
			new Field('General_Health', ['In good health', 'diabetic'], null),
			new Field('Medication', ['none'], null),
			new Field('Family_History', ['none', 'FHG'], null)
		]),
		new Section('external', [
			new Field('Lids_and_Lashes', ['clean'], null, null),
			new Field('Palpebral_Conjunctiva', ['clean'], null, null),
			new Field('Bulbar_Conjunctiva', ['clean'], null, null),
			new Field('Limbus', ['clean'], null, null),
			new Field('Cornea', ['normal'], null, null),
			new Field('Tears', ['normal'], null, null),
			new Field('AC', ['normal'], null, null),
			new Field('Iris', ['normal'], null, null),
			new Field('Lens', ['normal'], null, null)
		]),
		new Section('internal', [
			new Field('Vitreous', ['well defined and quiet'], null, null),
			new Field('Disc', ['Pink and Healthy. NRR margins distinct'], null, null),
			new Field('vCD_ratio', ['Tortuosity grade 0'], null, null),
			new Field('Vessels', ['Healthy'], null, null),
			new Field('Macula', ['Healthy'], null, null),
			new Field('Posterior_pole', ['Healthy'], null, null),
			new Field('Periphery', ['Clear and flat'], null, null),
			new Field('Method', ['Healthy'], null, null),
			new Field('Dilated', ['Healthy'], null, null),
			new Field('OCT_Macula', ['Healthy'], null, null),
			new Field('OCT_Discs', ['Healthy'], null, null)
		]),
		new Section('visual_fields', [
			new Field('threshold', ['no weird movement'], null, null),
			new Field('visual_field', ['as wibbles should be'], [], []),
			new Field('machine_used', ['as wobbles should be'], null),
			new Field('confrontation', ['as wobbles should be'], null, null)
		])
	];

	let activeTab = 0;

	function setActiveTab(tabName) {
		activeTab = tabName;
	}
</script>

<div class="flex gap-4 px-4 py-2">
	<main class="flex flex-1 flex-col">
		{#each examination as { fields }}
			{#each fields as field, i}
				<RecordField {field} />
			{/each}
		{/each}
	</main>
</div>
