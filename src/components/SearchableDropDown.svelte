<script lang="ts">
	import SearchInput from './SearchInput.svelte';
	type Searchable = {
		id: number;
		name: string;
	};
	let {
		onSelect,
		data
	}: {
		onSelect: (id: number) => Promise<void>;
		data: Searchable[] | undefined;
	} = $props();
	let menuOpen = $state(false);
	let inputValue = $state('');
	let filteredItems = $state<Searchable[]>([]);

	const handleInput = () => {
		if (data) {
			return (filteredItems = data.filter((item) =>
				item.name.toLowerCase().match(inputValue.toLowerCase())
			));
		}
	};
</script>

<section class="relative inline-block">
	<button onclick={() => (menuOpen = !menuOpen)}>{menuOpen ? 'Close Menu' : 'Open Menu'}</button>

	<div class="{menuOpen ? '' : 'hidden'} absolute min-w-56 max-w-28 border z-10 bottom-16 -left-4">
		<SearchInput bind:inputValue oninput={handleInput} />
		<div class="max-h-96 overflow-y-scroll flex flex-col">
			{#if filteredItems.length > 0}
				{#each filteredItems as item}
					<button onclick={async () => await onSelect(item.id)}>
						{item.name}
					</button>
				{/each}
			{:else}
				{#each data ?? [] as item}
					<button onclick={async () => await onSelect(item.id)}>
						{item.name}
					</button>
				{/each}
			{/if}
		</div>
	</div>
</section>
