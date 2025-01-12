<script lang="ts">
	let {
		label,
		value = $bindable(),
		onchange,
		placeholder = '',
		options
	}: {
		label: string;
		value: string;
		onchange: () => {};
		placeholder?: string;
		options: { value: string; label: string }[];
	} = $props();
</script>

<div class="flex flex-col">
	<!-- svelte-ignore a11y_label_has_associated_control -->
	<label class="text-sm font-medium text-gray-700 mb-1">{label}</label>
	<select
		bind:value
		{onchange}
		class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
	>
		<option value="">{placeholder}</option>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
