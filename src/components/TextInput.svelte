<script lang="ts">
	import type { FullAutoFill } from 'svelte/elements';

	let {
		label,
		value = $bindable(),
		oninput,
		placeholder = '',
		autocomplete
	}: {
		label: string;
		value: string;
		oninput: () => {};
		placeholder: string;
		autocomplete?: FullAutoFill | null;
	} = $props();
</script>

<div class="flex flex-col">
	<!-- svelte-ignore a11y_label_has_associated_control -->
	<label class="text-sm font-medium text-gray-700 mb-1">{label}</label>
	<input
		type="text"
		bind:value
		{placeholder}
		{autocomplete}
		{oninput}
		class="mt-1 block w-full rounded-md border-gray-300 shadow-sm pl-1 focus:border-indigo-500 focus:ring-indigo-500"
	/>
</div>
