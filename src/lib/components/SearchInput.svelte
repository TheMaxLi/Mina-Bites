<script>
	let { inputValue = $bindable(), oninput } = $props();
</script>

<div class="flex items-center">
	<input
		type="text"
		placeholder="Search..."
		autocomplete="off"
		class="border-b text-lg p-3 w-full focus:outline"
		bind:value={inputValue}
		{oninput}
	/>
	<span class="absolute right-[10px] top-[10px] text-lg">🔍</span>
</div>
